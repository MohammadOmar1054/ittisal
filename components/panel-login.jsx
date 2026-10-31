"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AmbientBackground from "./ambient-background";
import { useApp } from "./client-shell";

export default function PanelLogin({ type, title, arabic, description, bullets, translations }) {
  const { language } = useApp();
  const ar = language === "ar";
  const copy = ar ? translations : { type, title, description, bullets };
  return <main className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-5 py-16 sm:px-8">
    <AmbientBackground />
    <div className="grid w-full gap-12 lg:grid-cols-[1fr_.85fr] lg:items-center">
      <div>
        <Link href="/" className="eyebrow">← {ar ? "العودة للرئيسية" : "Back to home"}</Link>
        <p className="eyebrow mt-10">{copy.type} / {ar ? arabic : "ittisal"}</p>
        <h1 className="mt-4 max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-7xl">{copy.title}</h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">{copy.description}</p>
        <div className="mt-10 space-y-4">
          {copy.bullets.map((bullet) => <div key={bullet} className="flex items-center gap-3 text-sm font-medium"><span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">✓</span>{bullet}</div>)}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="glass rounded-[2rem] p-6 shadow-2xl sm:p-9">
        <div className="mb-8 flex items-center justify-between"><div><p className="text-xl font-bold">{ar ? "مرحباً بعودتك" : "Welcome back"}</p><p className="mt-1 text-sm text-[var(--muted)]">{ar ? "سجل الدخول لمتابعة رحلتك." : "Sign in to continue your journey."}</p></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent)] text-xl font-black text-[#0b1321]">i</span></div>
        <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-semibold">{ar ? "البريد الإلكتروني" : "Email address"}<input required type="email" placeholder={ar ? "you@example.com" : "you@example.com"} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]" /></label>
          <label className="block text-sm font-semibold">{ar ? "كلمة المرور" : "Password"}<input required type="password" placeholder={ar ? "أدخل كلمة المرور" : "Enter your password"} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 outline-none transition focus:border-[var(--accent)]" /></label>
          <div className="flex justify-end"><button type="button" className="text-xs font-bold text-[var(--accent)]">{ar ? "هل نسيت كلمة المرور؟" : "Forgot password?"}</button></div>
          <button type="submit" className="button-primary w-full rounded-xl py-3.5 text-sm font-bold">{ar ? `تسجيل الدخول إلى ${copy.type}` : `Sign in to ${copy.type}`}</button>
        </form>
        <div className="my-6 flex items-center gap-3 text-xs text-[var(--muted)]"><span className="h-px flex-1 bg-[var(--line)]" />or<span className="h-px flex-1 bg-[var(--line)]" /></div>
        <button type="button" className="button-outline w-full rounded-xl py-3 text-sm font-semibold">{ar ? "المتابعة باستخدام Google" : "Continue with Google"}</button>
        <p className="mt-7 text-center text-sm text-[var(--muted)]">
          {ar ? "جديد على اتصال؟" : "New to ittisal?"}{" "}
          <Link href="/hunter/onboarding" className="font-bold text-[var(--accent)] hover:underline">
            {ar ? "أنشئ حساباً" : "Create an account"}
          </Link>
        </p>
      </motion.div>
    </div>
  </main>;
}
