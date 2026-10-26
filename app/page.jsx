"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AmbientBackground from "../components/ambient-background";
import { useApp } from "../components/client-shell";

const testimonials = [
  ["Noura Al-Harbi", "Product designer, Riyadh", "ittisal helped me find a team that sees my potential, not just my CV.", "/images/noura.jpg"],
  ["Omar Mansour", "Founder, Dubai", "We made our first senior hire in two weeks. The quality is remarkable.", "/images/omar.jpg"],
  ["Layla Haddad", "Data analyst, Doha", "A warmer, clearer way to find the right next chapter across the Gulf.", "/images/layla.jpg"]
];

export default function Home() {
  const { language } = useApp();
  const ar = language === "ar";
  return <main className="relative overflow-hidden">
    <AmbientBackground />
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pt-36">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">{ar ? "فرص الخليج، متصلة" : "The Gulf, connected"}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-5 max-w-3xl text-6xl font-semibold leading-[.9] tracking-[-.07em] sm:text-8xl">{ar ? "مستقبلك المهني يبدأ هنا." : "Your next chapter starts here."}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">{ar ? "اتصال هي منصة العمل التي تجمع المواهب والشركات والمستثمرين في جميع أنحاء الخليج." : "ittisal is the human-first work platform connecting ambitious talent, thoughtful companies, and the people investing in a brighter Gulf."}</motion.p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/hunter" className="button-primary rounded-full px-6 py-3.5 text-sm font-bold">{ar ? "اكتشف الفرص" : "Explore opportunities"} ↗</Link>
            <a href="#panels" className="button-outline rounded-full px-6 py-3.5 text-sm font-bold">{ar ? "كيف يعمل" : "See how it works"} ↓</a>
          </div>
          <div className="mt-12 flex items-center gap-5 text-sm text-[var(--muted)]"><div className="flex -space-x-2">{["NA", "OM", "LH", "AK"].map((item, index) => <span key={item} className={`grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--background)] text-[10px] font-bold text-[#0b1321] ${["bg-[#ffb79f]", "bg-[#b8f3d0]", "bg-[#d6b7ff]", "bg-[#f5d477]"][index]}`}>{item}</span>)}</div><span><b className="text-[var(--foreground)]">12,400+</b> people moving forward</span></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -top-8 z-10 rounded-2xl bg-[var(--accent)] px-4 py-3 text-xs font-bold shadow-xl"><span className="block text-lg">4.9/5</span>community love</div>
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-5 shadow-2xl">
            <div className="rounded-[2rem] bg-[var(--secondary)] p-7 pb-20"><p className="text-xs font-bold uppercase tracking-widest opacity-70">GCC talent index</p><p className="mt-16 text-6xl font-semibold tracking-[-.07em]">+38%</p><p className="mt-2 text-sm opacity-70">new opportunities this month</p><div className="mt-7 flex items-end gap-2">{[30, 45, 37, 61, 55, 78, 93].map((height, index) => <motion.i key={index} animate={{ height: [`${height - 10}px`, `${height}px`, `${height - 5}px`] }} transition={{ duration: 2, delay: index * .1, repeat: Infinity }} className="block flex-1 rounded-t-md bg-[var(--accent)]" />)}</div></div>
            <div className="-mt-10 rounded-2xl bg-[var(--surface-strong)] p-5 shadow-xl"><p className="text-xs font-bold text-[var(--muted)]">A good match is waiting</p><div className="mt-4 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-sm font-bold">AF</span><div><p className="text-sm font-bold">Senior Product Lead</p><p className="text-xs text-[var(--muted)]">Al Futtaim · Dubai</p></div><span className="ml-auto text-lg">↗</span></div></div>
          </div>
        </motion.div>
      </div>
    </section>
    <section className="border-y border-[var(--line)] py-5"><div className="mx-auto flex max-w-7xl gap-10 overflow-hidden px-5 text-xs font-bold uppercase tracking-[.2em] text-[var(--muted)] sm:px-8"><span>Riyadh</span><span>Dubai</span><span>Doha</span><span>Kuwait City</span><span>Manama</span><span>Muscat</span><span>Abu Dhabi</span></div></section>
    <section id="panels" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="max-w-2xl"><p className="eyebrow">One platform. Three possibilities.</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Whatever you’re building, <span className="text-[var(--accent)]">start here.</span></h2></div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">{[
        ["/hunter", "01", "Job hunter", "Find work that fits your life, ambition, and next destination.", "→"],
        ["/employers", "02", "Hire from ittisal", "Meet the people who will take your team further.", "↗"],
        ["/investors", "03", "مُسْتَثْمِر · Investor", "Back the ideas shaping the next era of work in the Gulf.", "✦"]
      ].map(([href, number, title, copy, icon]) => <Link href={href} key={href} className="group glass rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]"><div className="flex justify-between text-xs font-bold text-[var(--muted)]"><span>{number}</span><span className="text-xl text-[var(--accent)] transition group-hover:rotate-45">{icon}</span></div><h3 className="mt-20 text-2xl font-bold">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-[var(--muted)]">{copy}</p><span className="mt-7 inline-block text-sm font-bold text-[var(--accent)]">Enter panel →</span></Link>)}</div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8"><div className="mb-9 flex items-end justify-between"><div><p className="eyebrow">Real stories, real momentum</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.05em]">Good things are <span className="text-[var(--accent)]">connecting.</span></h2></div><span className="hidden text-sm text-[var(--muted)] sm:block">← drag to explore →</span></div><div className="grid gap-4 md:grid-cols-3">{testimonials.map(([name, role, quote, image]) => <motion.article whileHover={{ y: -6 }} key={name} className="glass rounded-3xl p-6"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]" title={`Replace with ${image}`}>{name.split(" ").map((word) => word[0]).join("")}</div><div><p className="text-sm font-bold">{name}</p><p className="text-xs text-[var(--muted)]">{role}</p></div></div><p className="mt-8 text-lg leading-7">“{quote}”</p></motion.article>)}</div><p className="mt-4 text-xs text-[var(--muted)]">Profile image placeholders are ready at the paths shown in <code>/public/images/</code>.</p></section>
  </main>;
}
