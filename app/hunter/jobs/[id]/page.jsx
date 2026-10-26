"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AmbientBackground from "../../../../components/ambient-background";
import { jobs } from "../../../../lib/jobs";
import { useApp } from "../../../../components/client-shell";

export default function JobDetailsPage() {
  const { id } = useParams();
  const { language } = useApp();
  const ar = language === "ar";
  const job = jobs.find((item) => item.id === id) || jobs[0];
  const [profile, setProfile] = useState(null);
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("ittisal-job-profile");
    if (!saved) return;
    try {
      setProfile(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem("ittisal-job-profile");
    }
  }, []);
  return <main className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8"><AmbientBackground /><Link href="/hunter" className="eyebrow">← {ar ? "كل الوظائف" : "All jobs"}</Link><div className="glass mt-12 rounded-[2rem] p-7 sm:p-10"><div className="flex flex-col gap-6 sm:flex-row sm:items-start"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-xl font-bold text-[var(--accent)]">{job.company.slice(0, 2).toUpperCase()}</span><div><p className="eyebrow">{job.company} · {job.location}</p><h1 className="mt-3 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{job.title}</h1><div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--muted)]"><span>{job.mode}</span><span>·</span><span>{job.level}</span><span>·</span><span>{job.salary}</span></div></div></div><div className="mt-10 grid gap-10 border-t border-[var(--line)] pt-8 md:grid-cols-[1fr_260px]"><div><h2 className="text-xl font-bold">{ar ? "عن الوظيفة" : "About the role"}</h2><p className="mt-4 leading-8 text-[var(--muted)]">{ar ? "انضم إلى فريق طموح يعمل على بناء منتجات مؤثرة لملايين الأشخاص في الخليج. ستقود مبادرات مهمة وتتعاون مع فرق متعددة التخصصات." : "Join an ambitious team building products that matter for millions of people across the Gulf. You will lead meaningful initiatives and collaborate with a thoughtful, cross-functional team."}</p><h2 className="mt-10 text-xl font-bold">{ar ? "المهارات المطلوبة" : "Required skills"}</h2><div className="mt-4 flex flex-wrap gap-2">{job.skills.map((skill) => <span key={skill} className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[var(--accent)]">{skill}</span>)}</div></div><aside className="h-fit rounded-2xl bg-[var(--accent-soft)] p-5"><p className="text-sm text-[var(--muted)]">{job.applicants} {ar ? "متقدم" : "applicants"}</p><p className="mt-2 text-lg font-bold">{job.salary}</p>{profile?.resume ? <button disabled={applied} onClick={() => setApplied(true)} className="button-primary mt-6 w-full rounded-xl py-3 text-sm font-bold">{applied ? (ar ? "تم التقديم ✓" : "Applied ✓") : (ar ? "تقديم سريع" : "Easy Apply")}</button> : <><Link href="/hunter/onboarding" className="button-primary mt-6 block w-full rounded-xl py-3 text-center text-sm font-bold">{ar ? "احفظ سيرتك للتقديم" : "Store resume to apply"}</Link><p className="mt-3 text-center text-xs text-[var(--muted)]">{ar ? "أو تواصل مع الشركة للتقديم اليدوي." : "Or contact the company for a manual application."}</p></>}</aside></div></div></main>;
}
