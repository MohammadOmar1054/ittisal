"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import Navbar from "./navbar";
import { createClient } from "../lib/supabase/client";

const AppContext = createContext(null);
const DEFAULT_THEME = "dark";
const THEME_STORAGE_KEY = "ittisal-theme-v2";

export function useApp() {
  return useContext(AppContext);
}

export default function ClientShell({ children }) {
  const [language, setLanguageState] = useState("en");
  const [theme, setThemeState] = useState(DEFAULT_THEME);

  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [resume, setResume] = useState(null);
  const [resumeSignedUrl, setResumeSignedUrl] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Initialize language & theme from localStorage for logged-out visitors
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("ittisal-language");
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedLanguage) setLanguageState(savedLanguage);
    if (savedTheme) setThemeState(savedTheme);
  }, []);

  // Sync document language, dir & theme
  useEffect(() => {
    window.localStorage.setItem("ittisal-language", language);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.remove("theme-light", "theme-dark", "theme-aurora", "theme-nocturne");
    document.documentElement.classList.add(`theme-${theme}`);
  }, [language, theme]);

  const supabase = createClient();

  const loadProfileAndResume = useCallback(async (userId) => {
    if (!supabase) {
      setLoadingAuth(false);
      return;
    }

    try {
      const [profileRes, resumeRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
        supabase.from("resumes").select("*").eq("profile_id", userId).maybeSingle()
      ]);

      if (profileRes.data) {
        setProfile(profileRes.data);
        if (profileRes.data.language) {
          setLanguageState(profileRes.data.language);
        }
        if (profileRes.data.theme) {
          setThemeState(profileRes.data.theme);
        }
      }

      if (resumeRes.data) {
        setResume(resumeRes.data);
        try {
          const { data: signed } = await supabase.storage
            .from("resumes")
            .createSignedUrl(resumeRes.data.file_path, 3600);
          setResumeSignedUrl(signed?.signedUrl || null);
        } catch {
          setResumeSignedUrl(null);
        }
      } else {
        setResume(null);
        setResumeSignedUrl(null);
      }
    } catch (err) {
      console.error("Error loading user profile:", err);
    } finally {
      setLoadingAuth(false);
    }
  }, [supabase]);

  // Auth state listener & initial session check
  useEffect(() => {
    let mounted = true;

    if (!supabase) {
      setLoadingAuth(false);
      return () => {
        mounted = false;
      };
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      setSession(session);
      setUser(session?.user || null);
      if (session?.user) {
        loadProfileAndResume(session.user.id);
      } else {
        setLoadingAuth(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!mounted) return;
      setSession(newSession);
      setUser(newSession?.user || null);
      if (newSession?.user) {
        loadProfileAndResume(newSession.user.id);
      } else {
        setProfile(null);
        setResume(null);
        setResumeSignedUrl(null);
        setLoadingAuth(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, loadProfileAndResume]);

  const setLanguage = useCallback((newLang) => {
    setLanguageState(newLang);
    if (user) {
      supabase.from("profiles").update({ language: newLang }).eq("id", user.id).then();
    }
  }, [user, supabase]);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    if (user) {
      supabase.from("profiles").update({ theme: newTheme }).eq("id", user.id).then();
    }
  }, [user, supabase]);

  const refreshProfile = useCallback(() => {
    if (user) return loadProfileAndResume(user.id);
  }, [user, loadProfileAndResume]);

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
    setResume(null);
    setResumeSignedUrl(null);
  }, [supabase]);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      user,
      session,
      profile,
      resume,
      resumeSignedUrl,
      loadingAuth,
      refreshProfile,
      signOut,
      supabase
    }}>
      <div className={`min-h-screen ${theme === "light" ? "theme-light" : ""} ${theme === "dark" ? "theme-dark" : ""} ${theme === "aurora" ? "theme-aurora" : ""} ${theme === "nocturne" ? "theme-nocturne" : ""}`}>
        <Navbar />
        {children}
      </div>
    </AppContext.Provider>
  );
}
