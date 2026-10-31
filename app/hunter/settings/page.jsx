"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AmbientBackground from "../../../components/ambient-background";
import { useApp } from "../../../components/client-shell";

export default function HunterSettingsPage() {
  const router = useRouter();
  const {
    language,
    setLanguage,
    theme,
    setTheme,
    user,
    profile,
    resume,
    resumeSignedUrl,
    refreshProfile,
    signOut,
    supabase,
    loadingAuth
  } = useApp();

  const ar = language === "ar";

  // Form states
  const [form, setForm] = useState({
    full_name: "",
    age: "",
    degree: "",
    field_of_study: "",
    location: "",
    bio: "",
    skills: ""
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const [savingProfile, setSavingProfile] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);

  const [profileMsg, setProfileMsg] = useState("");
  const [profileError, setProfileError] = useState("");
  const [avatarError, setAvatarError] = useState("");
  const [resumeError, setResumeError] = useState("");

  // Protect page
  useEffect(() => {
    if (!loadingAuth && !user) {
      router.push("/hunter/onboarding?login=1");
    }
  }, [loadingAuth, user, router]);

  // Populate form with current profile
  useEffect(() => {
    if (profile) {
      setForm({
        full_name: profile.full_name || "",
        age: profile.age != null ? String(profile.age) : "",
        degree: profile.degree || "",
        field_of_study: profile.field_of_study || "",
        location: profile.location || "",
        bio: profile.bio || "",
        skills: (profile.skills || []).join(", ")
      });
    }
  }, [profile]);

  const updateField = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setProfileMsg("");
    setProfileError("");
  };

  // Save profile text fields
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!user) return;
    setSavingProfile(true);
    setProfileMsg("");
    setProfileError("");

    try {
      const skillsArray = form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const updates = {
        full_name: form.full_name.trim(),
        age: form.age ? parseInt(form.age, 10) : null,
        degree: form.degree.trim(),
        field_of_study: form.field_of_study.trim(),
        location: form.location.trim(),
        bio: form.bio.trim(),
        skills: skillsArray
      };

      const { error } = await supabase.from("profiles").update(updates).eq("id", user.id);
      if (error) throw error;

      await refreshProfile();
      setProfileMsg(ar ? "تم حفظ التعديلات بنجاح." : "Profile updated successfully.");
    } catch (err) {
      console.error("Save profile error:", err);
      setProfileError(ar ? "تعذر حفظ التعديلات." : "Failed to update profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  // Upload or replace avatar
  const handleUploadAvatar = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setAvatarError("");
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setAvatarError(ar ? "يجب أن تكون الصورة بصيغة JPG أو PNG أو WebP." : "Avatar must be a JPG, PNG, or WebP image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setAvatarError(ar ? "حجم الصورة يجب ألا يتجاوز 2 ميغابايت." : "Avatar must be under 2MB.");
      return;
    }

    setUploadingAvatar(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${user.id}/avatar.${ext}`;
      const { error: upErr } = await supabase.storage.from("avatars").upload(path, file, {
        upsert: true
      });
      if (upErr) throw upErr;

      const { data: pubData } = supabase.storage.from("avatars").getPublicUrl(path);
      // Append cache-buster timestamp so the browser updates immediately
      const publicUrl = `${pubData.publicUrl}?t=${Date.now()}`;
      await supabase.from("profiles").update({ avatar_url: publicUrl }).eq("id", user.id);

      await refreshProfile();
    } catch (err) {
      console.error("Avatar upload error:", err);
      setAvatarError(ar ? "تعذر رفع الصورة الشخصية." : "Failed to upload avatar.");
    } finally {
      setUploadingAvatar(false);
      setAvatarFile(null);
    }
  };

  // Upload or replace resume
  const handleUploadResume = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setResumeError("");
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      setResumeError(ar ? "يجب أن تكون السيرة الذاتية بصيغة PDF فقط." : "Resume must be a PDF file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError(ar ? "حجم السيرة الذاتية يجب ألا يتجاوز 5 ميغابايت." : "Resume must be under 5MB.");
      return;
    }

    setUploadingResume(true);
    try {
      const path = `${user.id}/resume.pdf`;
      const { error: upErr } = await supabase.storage.from("resumes").upload(path, file, {
        upsert: true,
        contentType: "application/pdf"
      });
      if (upErr) throw upErr;

      await supabase.from("resumes").upsert({
        profile_id: user.id,
        file_path: path,
        easy_apply_enabled: true,
        uploaded_at: new Date().toISOString()
      });

      await refreshProfile();
    } catch (err) {
      console.error("Resume upload error:", err);
      setResumeError(ar ? "تعذر رفع السيرة الذاتية." : "Failed to upload resume.");
    } finally {
      setUploadingResume(false);
      setResumeFile(null);
    }
  };

  if (loadingAuth || !user) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <AmbientBackground />
        <div className="glass mt-12 animate-pulse rounded-2xl p-10 text-center">
          <p className="text-sm text-[var(--muted)]">
            {ar ? "جارٍ التحميل..." : "Loading settings..."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <AmbientBackground />
      <div className="flex items-center justify-between">
        <Link href="/hunter" className="eyebrow">
          ← {ar ? "العودة للوظائف" : "Back to jobs"}
        </Link>
        <button
          onClick={async () => {
            await signOut();
            router.push("/hunter");
          }}
          className="text-xs font-bold text-red-400 hover:underline"
        >
          {ar ? "تسجيل الخروج" : "Log out"}
        </button>
      </div>

      <h1 className="mt-8 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">
        {ar ? "إعدادات الملف المهني" : "Profile settings"}
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {user.email}
      </p>

      <div className="mt-10 space-y-6">
        {/* Profile Picture Section */}
        <section className="glass rounded-2xl p-6">
          <h2 className="font-bold">{ar ? "الصورة الشخصية" : "Profile picture"}</h2>
          <div className="mt-4 flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-[var(--accent)] font-bold text-[#0b1321]">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="h-full w-full object-cover" />
              ) : (
                (profile?.full_name || user.email || "G").slice(0, 1).toUpperCase()
              )}
            </div>
            <div className="flex-1">
              <label className="button-outline inline-flex cursor-pointer items-center rounded-xl px-4 py-2 text-xs font-bold transition hover:border-[var(--accent)]">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleUploadAvatar}
                  disabled={uploadingAvatar}
                  className="sr-only"
                />
                {uploadingAvatar
                  ? ar
                    ? "جارٍ الرفع..."
                    : "Uploading..."
                  : profile?.avatar_url
                  ? ar
                    ? "تغيير الصورة"
                    : "Replace avatar"
                  : ar
                  ? "إضافة صورة"
                  : "Upload avatar"}
              </label>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {ar ? "JPG أو PNG أو WebP · أقل من 2MB" : "JPG, PNG, or WebP · under 2MB"}
              </p>
              {avatarError && <p className="mt-2 text-xs text-red-400">{avatarError}</p>}
            </div>
          </div>
        </section>

        {/* Resume Management Section */}
        <section className="glass rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold">{ar ? "السيرة الذاتية" : "Stored resume"}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {resume?.easy_apply_enabled
                  ? ar
                    ? "السيرة الذاتية محفوظة ومفعلة للتقديم السريع."
                    : "Your resume is active for 1-click Easy Apply."
                  : ar
                  ? "احفظ سيرتك الذاتية بصيغة PDF لتفعيل التقديم السريع."
                  : "Upload a PDF resume to unlock Easy Apply across all jobs."}
              </p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                resume?.easy_apply_enabled
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-[var(--accent-soft)] text-[var(--muted)]"
              }`}
            >
              {resume?.easy_apply_enabled ? (ar ? "مفعل" : "Active") : ar ? "غير محفوظ" : "Not stored"}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {resumeSignedUrl && (
              <a
                href={resumeSignedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold"
              >
                <span>📄</span>
                <span>{ar ? "عرض السيرة الذاتية الحالية" : "View current resume"}</span>
              </a>
            )}

            <label className="button-outline inline-flex cursor-pointer items-center rounded-xl px-4 py-2 text-xs font-bold transition hover:border-[var(--accent)]">
              <input
                type="file"
                accept="application/pdf,.pdf"
                onChange={handleUploadResume}
                disabled={uploadingResume}
                className="sr-only"
              />
              {uploadingResume
                ? ar
                  ? "جارٍ الرفع..."
                  : "Uploading..."
                : resume?.easy_apply_enabled
                ? ar
                  ? "استبدال السيرة الذاتية (PDF)"
                  : "Replace resume (PDF)"
                : ar
                ? "رفع السيرة الذاتية (PDF)"
                : "Upload resume (PDF)"}
            </label>
          </div>
          {resumeError && <p className="mt-2 text-xs text-red-400">{resumeError}</p>}
        </section>

        {/* Profile Info Form */}
        <section className="glass rounded-2xl p-6">
          <h2 className="font-bold">{ar ? "البيانات المهنية" : "Career profile"}</h2>
          <form onSubmit={handleSaveProfile} className="mt-6 space-y-4">
            {profileMsg && (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-300">
                {profileMsg}
              </div>
            )}
            {profileError && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-xs font-semibold text-red-300">
                {profileError}
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-bold">
                {ar ? "الاسم الكامل" : "Full name"}
                <input
                  type="text"
                  value={form.full_name}
                  onChange={updateField("full_name")}
                  className="mt-1 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
                />
              </label>

              <label className="block text-xs font-bold">
                {ar ? "العمر" : "Age"}
                <input
                  type="number"
                  value={form.age}
                  onChange={updateField("age")}
                  className="mt-1 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-bold">
                {ar ? "الموقع" : "Location"}
                <input
                  type="text"
                  value={form.location}
                  onChange={updateField("location")}
                  className="mt-1 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
                />
              </label>

              <label className="block text-xs font-bold">
                {ar ? "الدرجة العلمية" : "Degree"}
                <input
                  type="text"
                  value={form.degree}
                  onChange={updateField("degree")}
                  className="mt-1 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
                />
              </label>
            </div>

            <label className="block text-xs font-bold">
              {ar ? "مجال التخصص" : "Field of study"}
              <input
                type="text"
                value={form.field_of_study}
                onChange={updateField("field_of_study")}
                className="mt-1 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
              />
            </label>

            <label className="block text-xs font-bold">
              {ar ? "المهارات (مفصولة بفاصلة)" : "Skills (comma separated)"}
              <input
                type="text"
                value={form.skills}
                onChange={updateField("skills")}
                className="mt-1 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
              />
            </label>

            <label className="block text-xs font-bold">
              {ar ? "نبذة عنك" : "About you"}
              <textarea
                rows={3}
                value={form.bio}
                onChange={updateField("bio")}
                className="mt-1 w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5 text-sm outline-none focus:border-[var(--accent)]"
              />
            </label>

            <button
              type="submit"
              disabled={savingProfile}
              className="button-primary rounded-xl px-5 py-2.5 text-xs font-bold disabled:opacity-50"
            >
              {savingProfile ? (ar ? "جارٍ الحفظ..." : "Saving...") : ar ? "حفظ التغييرات" : "Save changes"}
            </button>
          </form>
        </section>

        {/* Language Section */}
        <section className="glass rounded-2xl p-6">
          <h2 className="font-bold">{ar ? "اللغة" : "Language"}</h2>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-xl border px-4 py-2 text-sm ${
                language === "en" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`rounded-xl border px-4 py-2 text-sm ${
                language === "ar" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"
              }`}
            >
              🇸🇦 العربية
            </button>
          </div>
        </section>

        {/* Theme Section */}
        <section className="glass rounded-2xl p-6">
          <h2 className="font-bold">{ar ? "المظهر" : "Theme"}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              ["dark", ar ? "بعد العمل (داكن)" : "After hours"],
              ["light", ar ? "ضوء النهار (فاتح)" : "Daylight"],
              ["aurora", ar ? "شفق الخليج" : "Gulf aurora"],
              ["nocturne", ar ? "نوكتورن (ليلي)" : "Nocturne"],
              ["desert", ar ? "رمال الصحراء" : "Desert sand"]
            ].map(([id, name]) => (
              <button
                key={id}
                onClick={() => setTheme(id)}
                className={`rounded-xl border px-4 py-2 text-sm ${
                  theme === id ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
