"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AmbientBackground from "../components/ambient-background";
import { useApp } from "../components/client-shell";

const testimonials = [
  { name: "Noura Al-Harbi", role: "Product designer, Riyadh", roleAr: "مصممة منتجات، الرياض", quote: "ittisal helped me find a team that sees my potential, not just my CV.", quoteAr: "ساعدني اتصال في العثور على فريق يرى إمكاناتي، وليس سيرتي الذاتية فقط.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEHz7XFA-XJgsQK8m_WlNJDFae7XvhPeTRi-Do4pvNpqGOPklQ41u0Ps&s=10", imagePosition: "center 18%" },
  { name: "Omar Mansour", role: "Founder, Dubai", roleAr: "مؤسس، دبي", quote: "We made our first senior hire in two weeks. The quality is remarkable.", quoteAr: "أتممنا أول توظيف قيادي لنا خلال أسبوعين. الجودة استثنائية.", image: "https://img.magnific.com/premium-photo/smiling-saudi-man-traditional-attire-portrait_99297-1419.jpg?semt=ais_hybrid&w=740&q=80", imagePosition: "center 14%" },
  { name: "Layla Haddad", role: "Data analyst, Doha", roleAr: "محللة بيانات، الدوحة", quote: "A warmer, clearer way to find the right next chapter across the Gulf.", quoteAr: "طريقة أكثر دفئاً ووضوحاً للعثور على الفصل المهني القادم في الخليج.", image: "https://campaignme.com/wp-content/uploads/2024/11/1714561839615-e1730443517409.jpeg", imagePosition: "center 16%" },
  { name: "Maha Al-Sabah", role: "People lead, Kuwait City", roleAr: "قائدة أفراد، مدينة الكويت", quote: "The right introduction changed the pace of our entire team.", quoteAr: "غيّرت المقدمة المناسبة إيقاع فريقنا بالكامل.", image: "https://i.pinimg.com/736x/41/04/79/410479f2ba87c71e6c4ea974e68e0263.jpg", imagePosition: "center 18%" },
  { name: "Yousef Rahman", role: "Product manager, Manama", roleAr: "مدير منتجات، المنامة", quote: "I found a role that fits the person I am becoming.", quoteAr: "وجدت دوراً يناسب الشخص الذي أتحول إليه.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5K3JdsCa8dtZKvr7hCQ1PF08azEEMk_Czs2lFT__u6DPnD1DthlQIFU&s=10", imagePosition: "center 18%" },
  { name: "Sara Al-Mazrouei", role: "Investor, Abu Dhabi", roleAr: "مستثمرة، أبوظبي", quote: "ittisal makes ambitious Gulf ideas feel closer and more human.", quoteAr: "يجعل اتصال الأفكار الخليجية الطموحة أقرب وأكثر إنسانية.", image: "https://hanayen.com/cdn/shop/files/plain-sheila-with-hanayen-small-logo-hanayen-sheila-luxury-abaya-online-43023006040318.jpg?v=1728375628", imagePosition: "center 18%" },
  { name: "Rami Haddad", role: "Engineering lead, Muscat", roleAr: "قائد هندسة، مسقط", quote: "Our search became focused, thoughtful, and surprisingly joyful.", quoteAr: "أصبح بحثنا أكثر تركيزاً ووعياً ومتعة بشكل مفاجئ.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4U4PTONoj4ECJD7jCX5Xn5i6Vnq4huWkS-L2AxD4FH9vXxIj5dHCQcBA&s=10", imagePosition: "center 18%" },
  { name: "Alya Noor", role: "Creative director, Riyadh", roleAr: "مديرة إبداعية، الرياض", quote: "It felt less like applying and more like finding the right conversation.", quoteAr: "شعرت أن الأمر أقل شبهاً بالتقديم وأكثر شبهاً بالعثور على الحوار المناسب.", image: "https://cdn.arabsstock.com/uploads/images/362875/making-a-phone-call-via-thumbnail-362875.webp", imagePosition: "center 18%" }
];

export default function Home() {
  const { language } = useApp();
  const ar = language === "ar";
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const showNextTestimonial = () => setTestimonialIndex((current) => (current + 1) % testimonials.length);
  const showPreviousTestimonial = () => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isTestimonialPaused) return undefined;
    const timer = window.setInterval(showNextTestimonial, 4800);
    return () => window.clearInterval(timer);
  }, [isTestimonialPaused]);

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
    drag: "← اسحب للاستكشاف →"
  } : {
    eyebrow: "The Gulf, connected", hero: "Your next chapter starts here.", intro: "ittisal is the human-first work platform connecting ambitious talent, thoughtful companies, and the people investing in a brighter Gulf.", explore: "Explore opportunities", how: "See how it works", moving: "people moving forward", love: "community love", index: "GCC talent index", month: "new opportunities this month", match: "A good match is waiting", role: "Senior Product Lead", cities: ["Riyadh", "Dubai", "Doha", "Kuwait City", "Manama", "Muscat", "Abu Dhabi"], sectionEyebrow: "One platform. Three possibilities.", sectionTitle: "Whatever you’re building, ", sectionAccent: "start here.", panels: [["Job hunter", "Find work that fits your life, ambition, and next destination."], ["Hire from ittisal", "Meet the people who will take your team further."], ["مُسْتَثْمِر · Investor", "Back the ideas shaping the next era of work in the Gulf."]],     enter: "Enter panel", stories: "Real stories, real momentum", storiesTitle: "Good things are ", storiesAccent: "connecting.", drag: "← drag to explore →"
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
    <section id="panels" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><div className="max-w-2xl"><p className="eyebrow">{text.sectionEyebrow}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{text.sectionTitle}<span className="text-[var(--accent)]">{text.sectionAccent}</span></h2></div><div className="mt-12 grid gap-4 md:grid-cols-3">{[["/hunter", "01", "Job hunter", "Find work that fits your life, ambition, and next destination.", "→", ""], ["/employers", "02", "Hire from ittisal", "Meet the people who will take your team further.", "↗", "Coming soon"], ["/investors", "03", "مُسْتَثْمِر · Investor", "Back the ideas shaping the next era of work in the Gulf.", "✦", "Coming soon"]].map(([href, number, title, copy, icon, ribbon], index) => <Link href={href} key={href} className="group relative overflow-hidden glass rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]">{ribbon && <motion.span className="panel-ribbon" initial={{ x: "-100%" }} animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3.2, repeat: Infinity, repeatType: "loop", ease: "linear" }}>{ribbon}</motion.span>}<div className="flex justify-between text-xs font-bold text-[var(--muted)]"><span>{number}</span><span className="text-xl text-[var(--accent)] transition group-hover:rotate-45">{icon}</span></div><h3 className="mt-20 text-2xl font-bold">{text.panels[index][0]}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-[var(--muted)]">{text.panels[index][1]}</p><span className="mt-7 inline-block text-sm font-bold text-[var(--accent)]">{text.enter} →</span></Link>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8"><div className="mb-9 flex items-end justify-between"><div><p className="eyebrow">{text.stories}</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.05em]">{text.storiesTitle}<span className="text-[var(--accent)]">{text.storiesAccent}</span></h2></div><span className="hidden text-sm text-[var(--muted)] sm:block">{text.drag}</span></div><div className="testimonial-slider relative mx-auto h-[30rem] max-w-5xl overflow-hidden sm:h-[27rem]" onMouseEnter={() => setIsTestimonialPaused(true)} onMouseLeave={() => setIsTestimonialPaused(false)}>{testimonials.map((testimonial, index) => {
      const offset = (index - testimonialIndex + testimonials.length) % testimonials.length;
      const isVisible = offset < 4;
      return <motion.article
        key={testimonial.name}
        drag={offset === 0 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -70) showNextTestimonial();
          if (info.offset.x > 70) showPreviousTestimonial();
        }}
        initial={false}
        animate={{
          x: `${offset * 5}%`,
          y: offset * 20,
          scale: 1 - offset * .055,
          rotate: offset === 0 ? 0 : offset % 2 ? 1.5 : -1.5,
          opacity: isVisible ? 1 - offset * .16 : 0,
          zIndex: testimonials.length - offset
        }}
        transition={{ type: "spring", stiffness: 170, damping: 22 }}
        className={`testimonial-card glass absolute left-0 right-0 top-0 mx-auto w-[calc(100%-1rem)] max-w-2xl overflow-hidden rounded-[2rem] p-3 shadow-2xl sm:w-[min(90%,40rem)] ${offset === 0 ? "cursor-grab active:cursor-grabbing" : ""}`}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <div className="testimonial-cover relative h-52 overflow-hidden rounded-[1.4rem] sm:h-60">
          {testimonial.image ? <div className="testimonial-photo-stage absolute inset-0">
            <img src={testimonial.image} alt="" aria-hidden="true" className="testimonial-photo-backdrop absolute inset-0 h-full w-full object-cover" style={{ objectPosition: testimonial.imagePosition || "center 18%" }} />
            <div className="testimonial-photo-wash absolute inset-0" />
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-photo-portrait relative z-[1] h-full w-full object-contain" />
          </div> : <div className="testimonial-placeholder grid h-full w-full place-items-center text-5xl font-semibold">{testimonial.name.split(" ").map((part) => part[0]).join("")}</div>}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 text-white"><p className="text-lg font-bold">{testimonial.name}</p><p className="text-xs text-white/80">{ar ? testimonial.roleAr : testimonial.role}</p></div>
        </div>
        <p key={`${testimonial.name}-${testimonialIndex}`} className="typewriter-copy px-4 pb-5 pt-6 text-lg leading-7 sm:text-xl">“{ar ? testimonial.quoteAr : testimonial.quote}”</p>
      </motion.article>;
    })}</div><div className="mt-6 flex items-center justify-center gap-3"><button type="button" onClick={showPreviousTestimonial} aria-label={ar ? "السابق" : "Previous testimonial"} className="testimonial-control">←</button>{testimonials.map((testimonial, index) => <button type="button" key={testimonial.name} onClick={() => setTestimonialIndex(index)} aria-label={`${ar ? "عرض" : "Show"} ${testimonial.name}`} className={`testimonial-dot ${index === testimonialIndex ? "testimonial-dot-active" : ""}`} />)}<button type="button" onClick={showNextTestimonial} aria-label={ar ? "التالي" : "Next testimonial"} className="testimonial-control">→</button></div></section>
  </main>;
}
