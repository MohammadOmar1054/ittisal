"use client";

import Link from "next/link";
import { useApp } from "../../../components/client-shell";

export default function HunterSettingsPage() {
  const { language, setLanguage, theme, setTheme } = useApp();
  const ar = language === "ar";
  return <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><Link href="/hunter" className="eyebrow">← {ar ? "العودة للوظائف" : "Back to jobs"}</Link><h1 className="mt-12 text-5xl font-semibold tracking-[-.06em]">{ar ? "إعدادات الملف" : "Profile settings"}</h1><div className="mt-10 space-y-4"><section className="glass rounded-2xl p-6"><h2 className="font-bold">{ar ? "اللغة" : "Language"}</h2><div className="mt-4 flex gap-2"><button onClick={() => setLanguage("en")} className={`rounded-xl border px-4 py-2 text-sm ${language === "en" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"}`}>🇬🇧 English</button><button onClick={() => setLanguage("ar")} className={`rounded-xl border px-4 py-2 text-sm ${language === "ar" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"}`}>🇸🇦 العربية</button></div></section><section className="glass rounded-2xl p-6"><h2 className="font-bold">{ar ? "المظهر" : "Theme"}</h2><div className="mt-4 flex flex-wrap gap-2">{[["dark", "After hours"], ["light", "Daylight"], ["aurora", "Gulf aurora"], ["nocturne", "Nocturne"]].map(([id, name]) => <button key={id} onClick={() => setTheme(id)} className={`rounded-xl border px-4 py-2 text-sm ${theme === id ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"}`}>{name}</button>)}</div></section><section className="glass rounded-2xl p-6"><h2 className="font-bold">{ar ? "السيرة الذاتية" : "Resume"}</h2><p className="mt-2 text-sm text-[var(--muted)]">{ar ? "يمكنك استبدال سيرتك من خلال إعادة الإعداد." : "Resume replacement will connect to Supabase Storage in the next integration step."}</p></section></div></main>;
}
