"use client";

import Link from "next/link";
import AmbientBackground from "../../components/ambient-background";
import { useApp } from "../../components/client-shell";
export default function CareersPage() {
  const { language } = useApp();
  const ar = language === "ar";
  return <main className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8"><AmbientBackground /><Link href="/" className="eyebrow">← {ar ? "العودة للرئيسية" : "Back to home"}</Link><p className="eyebrow mt-16">{ar ? "الوظائف في اتصال" : "Careers at ittisal"}</p><h1 className="mt-4 max-w-3xl text-6xl font-semibold leading-[.95] tracking-[-.06em] sm:text-8xl">{ar ? "ساهم في بناء خليج أكثر اتصالاً." : "Come build a more connected Gulf."}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">{ar ? "نحن فريق صغير وطموح يجعل العمل أكثر إنسانية. أحضر شخصيتك كاملة." : "We are a small, ambitious team making work feel more human. Bring your whole self."}</p><div className="mt-14 grid gap-4 md:grid-cols-2"><div className="glass rounded-3xl p-7"><p className="eyebrow">{ar ? "الوظائف المتاحة" : "Open roles"}</p><h2 className="mt-4 text-2xl font-bold">{ar ? "لا توجد وظائف متاحة الآن." : "No open roles right now."}</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{ar ? "ننمو بتأنٍ. أرسل لنا رسالة إذا كنت ترى أنك تستطيع المساعدة في تشكيل ما يأتي." : "We are growing thoughtfully. Send us a note if you think you could help shape what comes next."}</p><button className="button-primary mt-7 rounded-full px-5 py-3 text-sm font-bold">{ar ? "تواصل معنا" : "Say hello"} ↗</button></div><div className="rounded-3xl bg-[var(--secondary)] p-7 text-[var(--foreground)]"><p className="text-6xl">✦</p><p className="mt-16 text-xl font-bold">{ar ? "فريق صغير، أفق كبير." : "Small team, big horizon."}</p><p className="mt-2 text-sm opacity-70">Riyadh · Dubai · Remote</p></div></div></main>;
}
