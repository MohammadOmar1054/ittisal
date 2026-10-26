"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AmbientBackground from "../components/ambient-background";
import { useApp } from "../components/client-shell";

const testimonials = [
  ["Noura Al-Harbi", "Product designer, Riyadh", "مصممة منتجات، الرياض", "ittisal helped me find a team that sees my potential, not just my CV.", "/images/noura.jpg"],
  ["Omar Mansour", "Founder, Dubai", "مؤسس، دبي", "We made our first senior hire in two weeks. The quality is remarkable.", "/images/omar.jpg"],
  ["Layla Haddad", "Data analyst, Doha", "محللة بيانات، الدوحة", "A warmer, clearer way to find the right next chapter across the Gulf.", "/images/layla.jpg"]
];

export default function Home() {
  const { language } = useApp();
  const ar = language === "ar";
  const text = ar ? {
    eyebrow: "الخليج، متصل",
    hero: "يبدأ فصلك المهني القادم هنا.",
    intro: "اتصال هي منصة العمل الإنسانية التي تجمع المواهب الطموحة والشركات الواعية والمستثمرين في خليج أكثر إشراقاً.",
    explore: "استكشف الفرص",
    how: "كيف نعمل",
    moving: "شخص يتحرك إلى الأمام",
    love: "محبة المجتمع",
    index: "مؤشر مواهب الخليج",
    month: "فرص جديدة هذا الشهر",
    match: "تطابق جيد بانتظارك",
    role: "قائد منتجات أول",
    cities: ["الرياض", "دبي", "الدوحة", "مدينة الكويت", "المنامة", "مسقط", "أبوظبي"],
    sectionEyebrow: "منصة واحدة. ثلاث إمكانيات.",
    sectionTitle: "أيّاً كان ما تبنيه، ",
    sectionAccent: "ابدأ من هنا.",
    panels: [["باحث عن عمل", "اعثر على عمل يناسب حياتك وطموحك ووجهتك التالية."], ["التوظيف من اتصال", "التقِ بالأشخاص الذين سيدفعون فريقك إلى الأمام."], ["مُسْتَثْمِر", "ادعم الأفكار التي تشكل مستقبل العمل في الخليج."]],
    enter: "دخول إلى اللوحة",
    stories: "قصص حقيقية، زخم حقيقي",
    storiesTitle: "أشياء جيدة ",
    storiesAccent: "تتصل.",
    drag: "← اسحب للاستكشاف →",
    placeholder: "الصور الشخصية متاحة في المسارات الموجودة داخل /public/images/"
  } : {
    eyebrow: "The Gulf, connected", hero: "Your next chapter starts here.", intro: "ittisal is the human-first work platform connecting ambitious talent, thoughtful companies, and the people investing in a brighter Gulf.", explore: "Explore opportunities", how: "See how it works", moving: "people moving forward", love: "community love", index: "GCC talent index", month: "new opportunities this month", match: "A good match is waiting", role: "Senior Product Lead", cities: ["Riyadh", "Dubai", "Doha", "Kuwait City", "Manama", "Muscat", "Abu Dhabi"], sectionEyebrow: "One platform. Three possibilities.", sectionTitle: "Whatever you’re building, ", sectionAccent: "start here.", panels: [["Job hunter", "Find work that fits your life, ambition, and next destination."], ["Hire from ittisal", "Meet the people who will take your team further."], ["مُسْتَثْمِر · Investor", "Back the ideas shaping the next era of work in the Gulf."]], enter: "Enter panel", stories: "Real stories, real momentum", storiesTitle: "Good things are ", storiesAccent: "connecting.", drag: "← drag to explore →", placeholder: "Profile image placeholders are ready at the paths shown in /public/images/"
  };
  return <main className="relative overflow-hidden">
    <AmbientBackground />
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pt-36">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">{text.eyebrow}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-5 max-w-3xl text-6xl font-semibold leading-[.9] tracking-[-.07em] sm:text-8xl">{text.hero}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">{text.intro}</motion.p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/hunter" className="button-primary rounded-full px-6 py-3.5 text-sm font-bold">{text.explore} ↗</Link><a href="#panels" className="button-outline rounded-full px-6 py-3.5 text-sm font-bold">{text.how} ↓</a></div>
          <div className="mt-12 flex items-center gap-5 text-sm text-[var(--muted)]"><div className="flex -space-x-2">{["NA", "OM", "LH", "AK"].map((item, index) => <span key={item} className={`grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--background)] text-[10px] font-bold text-[#0b1321] ${["bg-[#ffb79f]", "bg-[#b8f3d0]", "bg-[#d6b7ff]", "bg-[#f5d477]"][index]}`}>{item}</span>)}</div><span><b className="text-[var(--foreground)]">12,400+</b> {text.moving}</span></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-4 -top-8 z-10 rounded-2xl bg-[var(--accent)] px-4 py-3 text-xs font-bold shadow-xl"><span className="block text-lg">4.9/5</span>{text.love}</div>
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-5 shadow-2xl">
            <div className="talent-card relative overflow-hidden rounded-[2rem] p-7 pb-20"><div className="talent-card-grid pointer-events-none absolute inset-0 opacity-80" /><div className="relative"><div className="flex items-center justify-between"><p className="talent-card-copy text-xs font-bold uppercase tracking-[.18em]">{text.index}</p><span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--talent-line)] text-sm text-[var(--talent-highlight)]">↗</span></div><p className="mt-16 text-6xl font-semibold tracking-[-.07em]">+38%</p><p className="talent-card-copy mt-2 text-sm">{text.month}</p><div className="mt-7 flex h-24 items-end gap-2">{[30, 45, 37, 61, 55, 78, 93].map((height, index) => <i key={index} style={{ height: `${height}%` }} className="talent-card-bar block flex-1 rounded-t-md opacity-90" />)}</div></div></div>
            <div className="-mt-10 rounded-2xl bg-[var(--surface-strong)] p-5 shadow-xl"><p className="text-xs font-bold text-[var(--muted)]">{text.match}</p><div className="mt-4 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-sm font-bold">AF</span><div><p className="text-sm font-bold">{text.role}</p><p className="text-xs text-[var(--muted)]">Al Futtaim · Dubai</p></div><span className="ml-auto text-lg">↗</span></div></div>
          </div>
        </motion.div>
      </div>
    </section>
    <section className="border-y border-[var(--line)] py-5"><div className="mx-auto flex max-w-7xl gap-10 overflow-hidden px-5 text-xs font-bold uppercase tracking-[.2em] text-[var(--muted)] sm:px-8">{text.cities.map((city) => <span key={city}>{city}</span>)}</div></section>
    <section id="panels" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="max-w-2xl"><p className="eyebrow">{text.sectionEyebrow}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{text.sectionTitle}<span className="text-[var(--accent)]">{text.sectionAccent}</span></h2></div><div className="mt-12 grid gap-4 md:grid-cols-3">{[["/hunter", "01", "Job hunter", "Find work that fits your life, ambition, and next destination.", "→"], ["/employers", "02", "Hire from ittisal", "Meet the people who will take your team further.", "↗"], ["/investors", "03", "مُسْتَثْمِر · Investor", "Back the ideas shaping the next era of work in the Gulf.", "✦"]].map(([href, number, title, copy, icon], index) => <Link href={href} key={href} className="group glass rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]"><div className="flex justify-between text-xs font-bold text-[var(--muted)]"><span>{number}</span><span className="text-xl text-[var(--accent)] transition group-hover:rotate-45">{icon}</span></div><h3 className="mt-20 text-2xl font-bold">{text.panels[index][0]}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-[var(--muted)]">{text.panels[index][1]}</p><span className="mt-7 inline-block text-sm font-bold text-[var(--accent)]">{text.enter} →</span></Link>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8"><div className="mb-9 flex items-end justify-between"><div><p className="eyebrow">{text.stories}</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.05em]">{text.storiesTitle}<span className="text-[var(--accent)]">{text.storiesAccent}</span></h2></div><span className="hidden text-sm text-[var(--muted)] sm:block">{text.drag}</span></div><div className="grid gap-4 md:grid-cols-3">{testimonials.map(([name, role, roleAr, quote, image]) => <motion.article whileHover={{ y: -6 }} key={name} className="glass rounded-3xl p-6"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]" title={`Replace with ${image}`}>{name.split(" ").map((word) => word[0]).join("")}</div><div><p className="text-sm font-bold">{name}</p><p className="text-xs text-[var(--muted)]">{ar ? roleAr : role}</p></div></div><p className="mt-8 text-lg leading-7">“{ar ? "اتصال ساعدني في العثور على فريق يرى إمكاناتي، وليس سيرتي الذاتية فقط." : quote}”</p></motion.article>)}</div><p className="mt-4 text-xs text-[var(--muted)]">{text.placeholder}</p></section>
  </main>;
}
