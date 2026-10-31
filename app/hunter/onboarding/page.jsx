"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AmbientBackground from "../../../components/ambient-background";
import { useApp } from "../../../components/client-shell";

const MIN_AGE = 18;
const MAX_AGE = 100;

function FilePicker({ label, hint, accept, file, onChange, icon }) {
  return (
    <label className="group block cursor-pointer rounded-2xl border border-dashed border-[var(--line)] bg-[var(--surface-strong)] p-4 transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]">
      <input
        type="file"
        accept={accept}
        onChange={(event) => onChange(event.target.files?.[0] || null)}
        className="sr-only"
      />
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--accent-soft)] text-xl text-[var(--accent)]">
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold">{file?.name || label}</span>
          <span className="mt-1 block truncate text-xs text-[var(--muted)]">
            {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : hint}
          </span>
        </span>
        <span className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-bold transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
          {file ? "Replace" : "Choose file"}
        </span>
      </div>
    </label>
  );
}

export default function HunterOnboardingPage() {
  const router = useRouter();
  const { language, user, supabase, refreshProfile, theme } = useApp();
  const ar = language === "ar";

  const [login, setLogin] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    degree: "",
    field: "",
    location: "",
    bio: "",
    skills: ""
  });
  const [avatar, setAvatar] = useState(null);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push("/hunter");
    }
  }, [user, router]);

  useEffect(() => {
    setLogin(new URLSearchParams(window.location.search).get("login") === "1");
  }, []);

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
    setErrorMsg("");
  };

  const submit = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    setInfoMsg("");
    setLoading(true);

    try {
      if (login) {
        // Sign in with password
        const { data, error } = await supabase.auth.signInWithPassword({
          email: form.email.trim(),
          password: form.password
        });

        if (error) {
          if (
            error.message.includes("Invalid login credentials") ||
            error.message.includes("invalid_grant")
          ) {
            throw new Error(
              ar
                ? "البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى."
                : "Invalid email or password. Please try again."
            );
          }
          throw error;
        }

        if (data?.session) {
          if (refreshProfile) await refreshProfile();
          router.push("/hunter");
        }
      } else {
        // Sign up validation
        const ageValue = Number(form.age);
        if (!form.age || !Number.isInteger(ageValue) || ageValue < MIN_AGE) {
          throw new Error(
            ar
              ? `يجب أن يكون عمرك ${MIN_AGE} عاماً أو أكثر لإنشاء حساب.`
              : `You must be at least ${MIN_AGE} years old to create an account.`
          );
        }
        if (ageValue > MAX_AGE) {
          throw new Error(ar ? "يرجى إدخال عمر صحيح." : "Please enter a valid age.");
        }

        if (form.password.length < 6) {
          throw new Error(
            ar
              ? "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل."
              : "Password must be at least 6 characters."
          );
        }

        if (avatar) {
          const validTypes = ["image/jpeg", "image/png", "image/webp"];
          if (!validTypes.includes(avatar.type)) {
            throw new Error(
              ar
                ? "يجب أن تكون الصورة الشخصية بصيغة JPG أو PNG أو WebP."
                : "Avatar must be a JPG, PNG, or WebP image."
            );
          }
          if (avatar.size > 2 * 1024 * 1024) {
            throw new Error(
              ar
                ? "حجم الصورة الشخصية يجب ألا يتجاوز 2 ميغابايت."
                : "Avatar size must be less than 2MB."
            );
          }
        }

        if (resume) {
          const isPdf =
            resume.type === "application/pdf" || resume.name.toLowerCase().endsWith(".pdf");
          if (!isPdf) {
            throw new Error(
              ar
                ? "يجب أن تكون السيرة الذاتية بصيغة PDF فقط."
                : "Resume must be a PDF file."
            );
          }
          if (resume.size > 5 * 1024 * 1024) {
            throw new Error(
              ar
                ? "حجم ملف السيرة الذاتية يجب ألا يتجاوز 5 ميغابايت."
                : "Resume size must be less than 5MB."
            );
          }
        }

        const skillsArray = form.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean);

        const { data, error } = await supabase.auth.signUp({
          email: form.email.trim(),
          password: form.password,
          options: {
            data: {
              full_name: form.name.trim(),
              age: ageValue,
              degree: form.degree.trim(),
              field_of_study: form.field.trim(),
              location: form.location.trim(),
              bio: form.bio.trim(),
              skills: skillsArray,
              language,
              theme
            }
          }
        });

        if (error) {
          if (
            error.message.includes("User already registered") ||
            error.message.includes("already registered")
          ) {
            throw new Error(
              ar
                ? "هذا البريد الإلكتروني مسجل بالفعل. يرجى تسجيل الدخول بدلاً من ذلك."
                : "This email is already registered. Please sign in instead."
            );
          }
          throw error;
        }

        const newUserId = data?.user?.id;

        if (newUserId && data?.session) {
          // Upload avatar if selected
          if (avatar) {
            const ext = avatar.name.split(".").pop() || "jpg";
            const avatarPath = `${newUserId}/avatar.${ext}`;
            const { error: avatarErr } = await supabase.storage
              .from("avatars")
              .upload(avatarPath, avatar, { upsert: true });

            if (!avatarErr) {
              const { data: pubData } = supabase.storage
                .from("avatars")
                .getPublicUrl(avatarPath);
              if (pubData?.publicUrl) {
                await supabase
                  .from("profiles")
                  .update({ avatar_url: pubData.publicUrl })
                  .eq("id", newUserId);
              }
            }
          }

          // Upload resume if selected
          if (resume) {
            const resumePath = `${newUserId}/resume.pdf`;
            const { error: resumeErr } = await supabase.storage
              .from("resumes")
              .upload(resumePath, resume, {
                upsert: true,
                contentType: "application/pdf"
              });

            if (!resumeErr) {
              await supabase.from("resumes").upsert({
                profile_id: newUserId,
                file_path: resumePath,
                easy_apply_enabled: true
              });
            }
          }

          if (refreshProfile) await refreshProfile();
          router.push("/hunter");
        } else {
          // Email confirmation required case
          setInfoMsg(
            ar
              ? "تم إنشاء الحساب بنجاح! إذا تطلب تأكيد البريد الإلكتروني، يرجى مراجعة بريدك ثم تسجيل الدخول."
              : "Account created successfully! If email confirmation is enabled, check your inbox then sign in."
          );
        }
      }
    } catch (err) {
      console.error("Auth error:", err);
      setErrorMsg(err.message || (ar ? "حدث خطأ غير متوقع." : "An unexpected error occurred."));
    } finally {
      setLoading(false);
    }
  };

  const input = (key, placeholder, type = "text", required = true) => (
    <input
      required={required}
      type={type}
      value={form[key]}
      onChange={update(key)}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
    />
  );

  return (
    <main className="relative min-h-screen px-5 py-16 sm:px-8">
      <AmbientBackground />
      <div className="mx-auto max-w-5xl">
        <Link href="/hunter" className="eyebrow">
          ← {ar ? "العودة للوظائف" : "Back to jobs"}
        </Link>
        <div className="mt-12 grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          {/* Side Intro */}
          <div className="lg:sticky lg:top-10">
            <p className="eyebrow">{ar ? "ملفك المهني" : "Your work profile"}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">
              {ar ? "اجعل الفرصة تعرفك." : "Let opportunity know you."}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              {ar
                ? "سجّل حسابك وأكمل ملفك لتتمكن من التقديم السريع وحفظ تقدمك عبر منصة اتصال."
                : "Complete your profile once to unlock Easy Apply and follow opportunities across ittisal."}
            </p>
            <div className="mt-8 space-y-3 text-sm text-[var(--muted)]">
              <p>✓ {ar ? "فرص مخصصة لك" : "Personalised opportunities"}</p>
              <p>✓ {ar ? "تقديم سريع بسيرة محفوظة" : "Easy Apply with a stored resume"}</p>
              <p>✓ {ar ? "ملف مهني قابل للتحديث في أي وقت" : "A verified profile you control"}</p>
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={submit} className="glass rounded-[2rem] p-6 sm:p-9">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {login
                  ? ar
                    ? "مرحباً بعودتك"
                    : "Welcome back"
                  : ar
                  ? "أنشئ ملفك المهني"
                  : "Create your work profile"}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setLogin(!login);
                  setErrorMsg("");
                  setInfoMsg("");
                }}
                className="text-xs font-bold text-[var(--accent)] hover:underline"
              >
                {login
                  ? ar
                    ? "جديد في اتصال؟ أنشئ حسابك"
                    : "New to ittisal? Sign up"
                  : ar
                  ? "لديك حساب بالفعل؟ سجّل دخولك"
                  : "Already registered? Sign in"}
              </button>
            </div>

            <p className="mt-2 text-sm text-[var(--muted)]">
              {login
                ? ar
                  ? "سجّل الدخول للوصول إلى سيرتك الذاتية ومتابعة تقديماتك."
                  : "Sign in to access your profile, stored resume, and applications."
                : ar
                ? "سجّل بياناتك لتفعيل التقديم السريع المباشر في كبرى شركات الخليج."
                : "Register with Supabase Auth to enable one-click Easy Apply across top Gulf employers."}
            </p>

            {/* Error & Info Alerts */}
            {errorMsg && (
              <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
                {errorMsg}
              </div>
            )}
            {infoMsg && (
              <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                {infoMsg}
              </div>
            )}

            <div className="mt-8 space-y-5">
              {!login && (
                <label className="block text-sm font-bold">
                  {ar ? "الاسم الكامل" : "Full name"}
                  {input("name", ar ? "نورة الحربي" : "Noura Al-Harbi")}
                </label>
              )}

              <label className="block text-sm font-bold">
                {ar ? "البريد الإلكتروني" : "Email address"}
                {input("email", "you@example.com", "email")}
              </label>

              <label className="block text-sm font-bold">
                {ar ? "كلمة المرور" : "Password"}
                {input(
                  "password",
                  ar ? "أنشئ كلمة مرور قوية (6 أحرف على الأقل)" : "Enter your secure password",
                  "password"
                )}
              </label>

              {!login && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-bold">
                      {ar ? "العمر" : "Age"}
                      <input
                        required
                        type="number"
                        inputMode="numeric"
                        min={MIN_AGE}
                        max={MAX_AGE}
                        step={1}
                        value={form.age}
                        onChange={update("age")}
                        placeholder="26"
                        className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                      />
                      <span className="mt-1 block text-xs font-normal text-[var(--muted)]">
                        {ar ? `يجب أن يكون عمرك ${MIN_AGE} عاماً أو أكثر.` : `You must be ${MIN_AGE} or older.`}
                      </span>
                    </label>
                    <label className="block text-sm font-bold">
                      {ar ? "الموقع" : "Location"}
                      {input("location", ar ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia", "text", false)}
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-bold">
                      {ar ? "الدرجة العلمية" : "Degree"}
                      {input("degree", ar ? "بكالوريوس علوم حاسب" : "BSc Computer Science", "text", false)}
                    </label>
                    <label className="block text-sm font-bold">
                      {ar ? "مجال التخصص" : "Field of study"}
                      {input("field", ar ? "علوم الحاسب" : "Computer Science", "text", false)}
                    </label>
                  </div>

                  <label className="block text-sm font-bold">
                    {ar ? "المهارات الرئيسية" : "Key Skills"}
                    {input("skills", "React, Next.js, TypeScript, PostgreSQL", "text", false)}
                  </label>

                  <label className="block text-sm font-bold">
                    {ar ? "نبذة عنك" : "About you"}
                    <textarea
                      value={form.bio}
                      onChange={update("bio")}
                      placeholder={
                        ar
                          ? "أخبر الشركات باختصار عن مسارك المهني وطموحاتك..."
                          : "Tell employers a little about your experience and career goals..."
                      }
                      rows={4}
                      className="mt-2 w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                    />
                  </label>

                  <FilePicker
                    icon="◎"
                    label={ar ? "إضافة صورة شخصية" : "Add profile picture"}
                    hint={ar ? "JPG أو PNG أو WebP · أقل من 2MB" : "JPG, PNG, or WebP · under 2MB"}
                    accept="image/png,image/jpeg,image/webp"
                    file={avatar}
                    onChange={setAvatar}
                  />

                  <FilePicker
                    icon="↥"
                    label={ar ? "حفظ السيرة الذاتية (PDF)" : "Store your resume (PDF)"}
                    hint={ar ? "ملف PDF فقط · أقل من 5MB لتفعيل التقديم السريع" : "PDF only · under 5MB for Easy Apply"}
                    accept="application/pdf,.pdf"
                    file={resume}
                    onChange={setResume}
                  />
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="button-primary w-full rounded-xl py-3.5 text-sm font-bold disabled:opacity-50"
              >
                {loading
                  ? ar
                    ? "جارٍ المعالجة..."
                    : "Processing..."
                  : login
                  ? ar
                    ? "تسجيل الدخول"
                    : "Sign in"
                  : ar
                  ? "إنشاء الحساب والبدء"
                  : "Create profile and start"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
