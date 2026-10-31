"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useApp } from "../../components/client-shell";

const themes = [
  { id: "light", name: "Daylight", nameAr: "ضوء النهار", description: "Warm and optimistic", descriptionAr: "دافئ ومتفائل", swatches: ["#f7f5ef", "#ff785a", "#b8f3d0"] },
  { id: "dark", name: "After hours", nameAr: "بعد ساعات العمل", description: "Quiet and focused", descriptionAr: "هادئ ومركّز", swatches: ["#08111d", "#ff9076", "#16483b"] },
  { id: "aurora", name: "Gulf aurora", nameAr: "شفق الخليج", description: "Deep sea energy", descriptionAr: "طاقة البحر العميق", swatches: ["#07131d", "#76e4c0", "#1d5e66"] },
  { id: "nocturne", name: "Nocturne", nameAr: "ليل", description: "A little mysterious", descriptionAr: "غامض قليلاً", swatches: ["#100b1b", "#d7a2ff", "#432c69"] },
  { id: "desert", name: "Desert sand", nameAr: "رمال الصحراء", description: "Warm, natural, and timeless", descriptionAr: "دافئ وطبيعي وخالد", swatches: ["#cdb28d", "#b85c38", "#6f7d5d"] }
];

export default function SettingsPage() {
  const { language, setLanguage, theme, setTheme } = useApp();
  const ar = language === "ar";
  return <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8"><Link href="/" className="eyebrow">← {ar ? "العودة للرئيسية" : "Back to home"}</Link><div className="mt-14"><p className="eyebrow">{ar ? "التفضيلات" : "Your preferences"}</p><h1 className="mt-3 text-5xl font-semibold tracking-[-.06em] sm:text-7xl">{ar ? "الإعدادات" : "Settings"}</h1><p className="mt-5 max-w-xl text-[var(--muted)]">{ar ? "اجعل اتصال يناسبك." : "Make ittisal feel like yours. Your choices are saved on this device."}</p></div>
    <section className="mt-14 border-t border-[var(--line)] pt-8"><div className="flex flex-col justify-between gap-5 sm:flex-row"><div><h2 className="text-xl font-bold">{ar ? "اللغة" : "Language"}</h2><p className="mt-1 text-sm text-[var(--muted)]">{ar ? "اختر اللغة المفضلة لديك" : "Choose how ittisal speaks to you."}</p></div><div className="flex gap-2"><button onClick={() => setLanguage("en")} className={`rounded-2xl border px-5 py-3 text-left transition ${language === "en" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"}`}><span className="block text-lg">🇬🇧</span><span className="mt-1 block text-sm font-bold">English</span></button><button onClick={() => setLanguage("ar")} className={`rounded-2xl border px-5 py-3 text-left transition ${language === "ar" ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--line)]"}`}><span className="block text-lg">🇸🇦</span><span className="mt-1 block text-sm font-bold">العربية</span></button></div></div></section>
    <section className="mt-12 border-t border-[var(--line)] pt-8"><div><h2 className="text-xl font-bold">{ar ? "المظهر" : "Appearance"}</h2><p className="mt-1 text-sm text-[var(--muted)]">{ar ? "اختر الأجواء المناسبة لك." : "Choose the atmosphere that feels right."}</p></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{themes.map((item) => <motion.button whileHover={{ y: -3 }} onClick={() => setTheme(item.id)} key={item.id} className={`rounded-2xl border p-3 text-left transition ${theme === item.id ? "border-[var(--accent)] ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--background)]" : "border-[var(--line)]"}`}><div className="h-24 rounded-xl p-3" style={{ background: item.swatches[0] }}><div className="flex justify-between"><span className="h-3 w-16 rounded-full" style={{ background: item.swatches[1] }} /><span className="h-3 w-6 rounded-full" style={{ background: item.swatches[2] }} /></div><div className="mt-10 h-2 w-24 rounded-full opacity-30" style={{ background: item.swatches[1] }} /></div><div className="mt-3 flex items-center justify-between px-1"><div><p className="text-sm font-bold">{ar ? item.nameAr : item.name}</p><p className="mt-0.5 text-xs text-[var(--muted)]">{ar ? item.descriptionAr : item.description}</p></div>{theme === item.id && <span className="text-[var(--accent)]">✓</span>}</div></motion.button>)}</div></section>
    <div className="mt-14 rounded-2xl bg-[var(--accent-soft)] p-5 text-sm text-[var(--muted)]"><span className="font-bold text-[var(--foreground)]">{ar ? "ملاحظة:" : "A note:"}</span> {ar ? "الترجمة العربية الأساسية متاحة الآن، وستتوسع مع كل لوحة." : "Arabic is available across the core experience and will grow with each panel."}</div>
  </main>;
}
