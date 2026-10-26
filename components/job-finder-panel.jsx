"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import AmbientBackground from "./ambient-background";
import JobPagination from "./job-pagination";
import { jobs } from "../lib/jobs";

const translations = {
  en: { home: "Job Finder", hello: "Find work that feels like you.", sub: "Curated opportunities across the Gulf, built around where you want to go next.", search: "Search job title, skill, or company", filters: "Filters", all: "All", mode: "Work mode", level: "Experience", location: "Location", category: "Industry", clear: "Clear all", results: "opportunities", apply: "Easy Apply", manual: "Manual apply", noResume: "No resume stored", profile: "Profile", settings: "Settings", logout: "Log out", page: "Page", of: "of", prev: "Prev", next: "Next", pagination: "Job results pages", upload: "Store a resume to unlock Easy Apply.", signIn: "Sign in", create: "Create account" },
  ar: { home: "باحث عن عمل", hello: "اعثر على عمل يشبهك.", sub: "فرص منتقاة في الخليج، مصممة حول وجهتك القادمة.", search: "ابحث عن وظيفة أو مهارة أو شركة", filters: "الفلاتر", all: "الكل", mode: "نمط العمل", level: "الخبرة", location: "الموقع", category: "المجال", clear: "مسح الكل", results: "فرصة", apply: "تقديم سريع", manual: "تقديم يدوي", noResume: "لا توجد سيرة ذاتية محفوظة", profile: "الملف الشخصي", settings: "الإعدادات", logout: "تسجيل الخروج", page: "صفحة", of: "من", prev: "السابق", next: "التالي", pagination: "صفحات نتائج الوظائف", upload: "احفظ سيرتك الذاتية لتفعيل التقديم السريع.", signIn: "تسجيل الدخول", create: "إنشاء حساب" }
};

function Logo({ name }) {
  return <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent)] font-black text-[#0b1321]">i</span><div><p className="text-sm font-bold">{name}</p><p className="text-[10px] text-[var(--muted)]">ittisal / اتصال</p></div></div>;
}

function JobCard({ job, copy, hasResume, language }) {
  const postedText = language === "ar" ? job.postedAr : job.posted;
  const applicantsLabel = language === "ar" ? "متقدم" : "applicants";
  return <Link href={`/hunter/jobs/${job.id}`} className="glass group block rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"><div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">{job.company.slice(0, 2).toUpperCase()}</span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold group-hover:text-[var(--accent)]">{job.title}</h3><p className="mt-1 text-sm text-[var(--muted)]">{job.company} · {job.location}</p></div><span className="text-xs text-[var(--muted)]">{postedText}</span></div><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[11px] font-bold text-[#0b1321]">{job.category}</span>{job.skills.map((skill) => <span key={skill} className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent)]">{skill}</span>)}<span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] text-[var(--muted)]">{job.mode}</span></div><div className="mt-5 flex items-center justify-between text-xs text-[var(--muted)]"><span>{job.salary} · {job.applicants} {applicantsLabel}</span><span className={hasResume ? "font-bold text-[var(--accent)]" : ""}>{hasResume ? copy.apply : copy.manual}</span></div></div></div></Link>;
}

export default function JobFinderPanel({ language = "en" }) {
  const copy = translations[language];
  const [profile, setProfile] = useState(null);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All");
  const [level, setLevel] = useState("All");
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [menu, setMenu] = useState(false);
  const perPage = 15;
  const listTopRef = useRef(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("ittisal-job-profile");
    if (!saved) return;
    try {
      setProfile(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem("ittisal-job-profile");
    }
  }, []);

  const filtered = useMemo(() => jobs.filter((job) => {
    const haystack = `${job.title} ${job.company} ${job.category} ${job.skills.join(" ")}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (mode === "All" || job.mode === mode) && (level === "All" || job.level === level) && (location === "All" || job.location.includes(location)) && (category === "All" || job.category === category);
  }), [query, mode, level, location, category]);
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const shown = filtered.slice((page - 1) * perPage, page * perPage);
  const reset = () => { setQuery(""); setMode("All"); setLevel("All"); setLocation("All"); setCategory("All"); setPage(1); };
  const categories = [...new Set(jobs.map((job) => job.category))];
  const changePage = (next) => {
    setPage(next);
    requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      listTopRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  };

  return <main className="relative min-h-screen"><AmbientBackground /><div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8">
    <div className="flex items-center justify-between"><Logo name={copy.home} /><div className="relative flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-bold">{profile?.name || "Guest hunter"}</p><p className="text-xs text-[var(--muted)]">{profile?.resume ? "Easy Apply enabled" : copy.noResume}</p></div><button onClick={() => setMenu(!menu)} className="grid h-11 w-11 place-items-center rounded-full bg-[var(--accent)] font-bold text-[#0b1321]">{profile?.name?.slice(0, 1).toUpperCase() || "G"}</button>{menu && <div className="glass absolute right-0 top-14 z-20 w-48 rounded-2xl p-2 text-sm shadow-2xl"><Link href="/hunter/settings" className="block rounded-xl p-3 hover:bg-[var(--accent-soft)]">{copy.settings}</Link><button onClick={() => { window.localStorage.removeItem("ittisal-job-profile"); setProfile(null); setMenu(false); }} className="block w-full rounded-xl p-3 text-left hover:bg-[var(--accent-soft)]">{copy.logout}</button></div>}</div></div>
    <section className="mt-16 max-w-3xl"><p className="eyebrow">{copy.home}</p><h1 className="mt-3 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">{copy.hello}</h1><p className="mt-5 text-lg leading-8 text-[var(--muted)]">{copy.sub}</p></section>
    {!profile && <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-4 text-sm"><span className="flex-1">{copy.upload}</span><Link href="/hunter/onboarding" className="button-primary rounded-full px-4 py-2 font-bold">{copy.create}</Link><Link href="/hunter/onboarding?login=1" className="button-outline rounded-full px-4 py-2 font-bold">{copy.signIn}</Link></div>}
    <div className="mt-12 flex flex-col gap-3 lg:flex-row"><div className="relative flex-1"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">⌕</span><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder={copy.search} className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-4 pl-11 pr-4 outline-none focus:border-[var(--accent)]" /></div><button onClick={reset} className="button-outline rounded-2xl px-5 text-sm font-bold">{copy.clear}</button></div>
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><select value={category} onChange={(event) => { setCategory(event.target.value); setPage(1); }} className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm"><option value="All">{copy.category}: {copy.all}</option>{categories.map((item) => <option key={item}>{item}</option>)}</select><select value={mode} onChange={(event) => { setMode(event.target.value); setPage(1); }} className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm"><option value="All">{copy.mode}: {copy.all}</option><option>Remote</option><option>Hybrid</option><option>Onsite</option></select><select value={level} onChange={(event) => { setLevel(event.target.value); setPage(1); }} className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm"><option value="All">{copy.level}: {copy.all}</option><option>Entry-level</option><option>Mid-level</option><option>Senior</option></select><select value={location} onChange={(event) => { setLocation(event.target.value); setPage(1); }} className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm"><option value="All">{copy.location}: {copy.all}</option>{["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"].map((item) => <option key={item}>{item}</option>)}</select></div>
    <div ref={listTopRef} className="mt-10 flex scroll-mt-6 items-center justify-between"><p className="text-sm font-bold">{filtered.length} {copy.results}</p><p className="text-sm text-[var(--muted)]">{copy.page} {page} {copy.of} {pages}</p></div>
    <div className="mt-4 grid gap-4 md:grid-cols-2">{shown.map((job) => <JobCard key={job.id} job={job} copy={copy} hasResume={Boolean(profile?.resume)} language={language} />)}</div>
    <JobPagination page={page} pages={pages} onPageChange={changePage} labels={copy} />
  </div></main>;
}
