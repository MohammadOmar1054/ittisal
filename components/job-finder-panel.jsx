"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import AmbientBackground from "./ambient-background";
import JobPagination from "./job-pagination";
import { useApp } from "./client-shell";
import { formatSalaryAmount, formatPosted } from "../lib/jobs";
import { jobs as localJobs } from "../lib/jobs";
import { getCompanyLogo } from "../lib/company-logos";

const translations = {
  en: {
    home: "Job Finder",
    hello: "Find work that feels like you.",
    sub: "Curated opportunities across the Gulf, built around where you want to go next.",
    search: "Search job title, skill, or company",
    filters: "Filters",
    all: "All",
    mode: "Work mode",
    level: "Experience",
    location: "Location",
    category: "Industry",
    clear: "Clear all",
    results: "opportunities",
    apply: "Easy Apply",
    manual: "Manual apply",
    applied: "Applied ✓",
    noResume: "No resume stored",
    profile: "Profile",
    settings: "Settings",
    logout: "Log out",
    page: "Page",
    of: "of",
    prev: "Prev",
    next: "Next",
    pagination: "Job results pages",
    upload: "Store a resume to unlock Easy Apply.",
    signIn: "Sign in",
    create: "Create account",
    loading: "Finding opportunities...",
    emptyTitle: "No matching opportunities",
    emptySub: "Try clearing filters or searching for another title, skill, or company.",
    errorTitle: "Unable to load jobs",
    errorSub: "Please check your database connection or try refreshing the page.",
    retry: "Try again"
  },
  ar: {
    home: "باحث عن عمل",
    hello: "اعثر على عمل يشبهك.",
    sub: "فرص منتقاة في الخليج، مصممة حول وجهتك القادمة.",
    search: "ابحث عن وظيفة أو مهارة أو شركة",
    filters: "الفلاتر",
    all: "الكل",
    mode: "نمط العمل",
    level: "الخبرة",
    location: "الموقع",
    category: "المجال",
    clear: "مسح الكل",
    results: "فرصة",
    apply: "تقديم سريع",
    manual: "تقديم يدوي",
    applied: "تم التقديم ✓",
    noResume: "لا توجد سيرة ذاتية محفوظة",
    profile: "الملف الشخصي",
    settings: "الإعدادات",
    logout: "تسجيل الخروج",
    page: "صفحة",
    of: "من",
    prev: "السابق",
    next: "التالي",
    pagination: "صفحات نتائج الوظائف",
    upload: "احفظ سيرتك الذاتية لتفعيل التقديم السريع.",
    signIn: "تسجيل الدخول",
    create: "إنشاء حساب",
    loading: "جارٍ جلب الفرص المتاحة...",
    emptyTitle: "لا توجد فرص مطابقة",
    emptySub: "جرّب مسح الفلاتر أو البحث عن مسمى وظيفي أو مهارة أو شركة أخرى.",
    errorTitle: "تعذر تحميل الوظائف",
    errorSub: "يرجى التحقق من الاتصال بقاعدة البيانات وإعادة المحاولة.",
    retry: "إعادة المحاولة"
  }
};

const defaultCategories = [
  "Software Engineering",
  "AI",
  "Data",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Hardware",
  "Electronics",
  "Robotics",
  "Industrial Technology",
  "Technology",
  "Enterprise Technology",
  "Emerging Technology",
  "Infrastructure",
  "Customer Technology",
  "Developer Experience",
  "Design Technology",
  "Petroleum",
  "Construction",
  "Marketing",
  "Sales",
  "Delivery Driver",
  "Mechanical",
  "Consulting",
  "Finance",
  "Logistics",
  "Human Resources",
  "Design",
  "Customer Service",
  "Energy",
  "Healthcare",
  "Aviation",
  "Administration"
];

function Logo({ name }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent)] font-black text-[#0b1321]">
        i
      </span>
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[10px] text-[var(--muted)]">ittisal / اتصال</p>
      </div>
    </div>
  );
}

function JobCard({ job, copy, hasResume, language, isApplied }) {
  const companyName = job.company?.name || "GCC Employer";
  const initials = companyName.slice(0, 2).toUpperCase();
  const logoUrl = getCompanyLogo(companyName, job.company?.logo_url);

  const diffDays = Math.max(
    1,
    Math.round((Date.now() - new Date(job.posted_at || Date.now()).getTime()) / (1000 * 60 * 60 * 24))
  );
  const postedText = formatPosted(diffDays, language);
  const applicantsLabel = language === "ar" ? "متقدم" : "applicants";

  const salaryDisplay =
    job.salary_min && job.salary_max
      ? `${job.currency || "SAR"} ${formatSalaryAmount(job.salary_min)}–${formatSalaryAmount(job.salary_max)}`
      : job.currency
      ? `${job.currency} competitive`
      : "Competitive";

  return (
    <Link
      href={`/hunter/jobs/${job.id}`}
      className="glass group block rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div className="flex gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-2 text-sm font-bold text-[var(--accent)]">
          {logoUrl ? <img src={logoUrl} alt={`${companyName} logo`} className="h-full w-full object-contain" /> : initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold group-hover:text-[var(--accent)]">{job.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {companyName} · {job.location}
              </p>
            </div>
            <span className="text-xs text-[var(--muted)]">{postedText}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.category && (
              <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[11px] font-bold text-[#0b1321]">
                {job.category}
              </span>
            )}
            {(job.required_skills || []).slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent)]"
              >
                {skill}
              </span>
            ))}
            {job.work_mode && (
              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] text-[var(--muted)]">
                {job.work_mode}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between text-xs text-[var(--muted)]">
            <span>
              {salaryDisplay} · {job.applicants_count ?? 0} {applicantsLabel}
            </span>
            {isApplied ? (
              <span className="badge-applied">
                {copy.applied}
              </span>
            ) : (
              <span
                title={!hasResume ? copy.noResume : ""}
                className={hasResume ? "font-bold text-[var(--accent)]" : "italic"}
              >
                {hasResume ? copy.apply : copy.manual}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function JobFinderPanel({ language = "en" }) {
  const copy = translations[language] || translations.en;
  const { user, profile, resume, signOut, supabase, loadingAuth } = useApp();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [mode, setMode] = useState("All");
  const [level, setLevel] = useState("All");
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [menu, setMenu] = useState(false);

  const [jobsList, setJobsList] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(defaultCategories);
  const [appliedJobIds, setAppliedJobIds] = useState(new Set());

  const perPage = 15;
  const listTopRef = useRef(null);

  // Fetch applications for current user once (single query)
  const fetchApplications = useCallback(async () => {
    if (!user?.id || !supabase) {
      setAppliedJobIds(new Set());
      return;
    }
    try {
      const { data, error: appErr } = await supabase
        .from("applications")
        .select("job_id, status")
        .eq("profile_id", user.id);

      if (!appErr && data) {
        setAppliedJobIds(new Set(data.map((app) => app.job_id)));
      }
    } catch (err) {
      console.error("Error fetching applied jobs:", err);
    }
  }, [user?.id, supabase]);

  // Refetch when user changes, on mount, or when returning to page (window focus)
  useEffect(() => {
    fetchApplications();

    const handleFocus = () => {
      fetchApplications();
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [fetchApplications]);

  // Debounce search query to avoid spamming database
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1);
    }, 250);
    return () => clearTimeout(timer);
  }, [query]);

  // Load distinct categories from DB once
  useEffect(() => {
    async function loadCategories() {
      if (!supabase) return;

      try {
        const { data } = await supabase
          .from("jobs")
          .select("category")
          .not("category", "is", null);
        if (data && data.length > 0) {
          const unique = [...new Set(data.map((j) => j.category).filter(Boolean))].sort();
          if (unique.length > 0) setCategories(unique);
        }
      } catch {
        // Fall back to defaultCategories
      }
    }
    loadCategories();
  }, [supabase]);

  // Fetch jobs from Supabase
  useEffect(() => {
    let isCancelled = false;
    async function fetchJobs() {
      setLoadingJobs(true);
      setError(null);

      if (!supabase) {
        const q = debouncedQuery.trim().toLowerCase();
        const filtered = localJobs
          .filter((job) => {
            const matchesQuery =
              !q ||
              job.title.toLowerCase().includes(q) ||
              job.company.toLowerCase().includes(q) ||
              job.skills.some((skill) => skill.toLowerCase().includes(q));
            const matchesCategory = category === "All" || job.category === category;
            const matchesMode = mode === "All" || job.mode === mode;
            const matchesLevel = level === "All" || job.level === level;
            const matchesLocation = location === "All" || job.location.includes(location);
            return matchesQuery && matchesCategory && matchesMode && matchesLevel && matchesLocation;
          })
          .map((job) => ({
            ...job,
            description: `Join ${job.company} as a ${job.title} in ${job.location}. Key skills: ${job.skills.join(", ")}.`,
            required_skills: job.skills,
            work_mode: job.mode,
            salary_min: job.salaryMin,
            salary_max: Math.round(job.salaryMin * 1.3),
            currency: job.salary.split(" ")[0],
            applicants_count: job.applicants,
            posted_at: new Date(Date.now() - job.days * 24 * 60 * 60 * 1000).toISOString(),
            company: { name: job.company, logo_url: getCompanyLogo(job.company), location: job.location }
          }));

        const from = (page - 1) * perPage;
        if (!isCancelled) {
          setJobsList(filtered.slice(from, from + perPage));
          setTotalJobs(filtered.length);
          setLoadingJobs(false);
        }
        return;
      }

      try {
        let req = supabase
          .from("jobs")
          .select("*, company:companies(*)", { count: "exact" });

        const q = debouncedQuery.trim();
        if (q) {
          const { data: matchedCompanies } = await supabase
            .from("companies")
            .select("id")
            .ilike("name", `%${q}%`);

          const companyIds = (matchedCompanies || []).map((c) => c.id);
          if (companyIds.length > 0) {
            req = req.or(
              `title.ilike.%${q}%,description.ilike.%${q}%,company_id.in.(${companyIds.join(",")})`
            );
          } else {
            req = req.or(`title.ilike.%${q}%,description.ilike.%${q}%`);
          }
        }

        if (category !== "All") {
          req = req.eq("category", category);
        }
        if (mode !== "All") {
          req = req.eq("work_mode", mode);
        }
        if (level !== "All") {
          req = req.eq("level", level);
        }
        if (location !== "All") {
          req = req.ilike("location", `%${location}%`);
        }

        const from = (page - 1) * perPage;
        const to = from + perPage - 1;
        req = req.order("posted_at", { ascending: false }).range(from, to);

        const { data, count, error: reqErr } = await req;
        if (reqErr) throw reqErr;

        if (!isCancelled) {
          setJobsList(data || []);
          setTotalJobs(count || 0);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("Error fetching jobs from Supabase:", err);
          setError(err.message || "Failed to load jobs");
        }
      } finally {
        if (!isCancelled) {
          setLoadingJobs(false);
        }
      }
    }

    fetchJobs();
    return () => {
      isCancelled = true;
    };
  }, [debouncedQuery, category, mode, level, location, page, supabase]);

  const pages = Math.max(1, Math.ceil(totalJobs / perPage));

  const reset = () => {
    setQuery("");
    setDebouncedQuery("");
    setMode("All");
    setLevel("All");
    setLocation("All");
    setCategory("All");
    setPage(1);
  };

  const changePage = (next) => {
    setPage(next);
    requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      listTopRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  };

  const displayName = profile?.full_name || user?.email?.split("@")[0] || null;
  const avatarLetter = (displayName || "G").slice(0, 1).toUpperCase();
  const hasResume = Boolean(resume?.easy_apply_enabled);

  return (
    <main className="relative min-h-screen">
      <AmbientBackground />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8">
        {/* Header / User Profile Bar */}
        <div className="flex items-center justify-between">
          <Logo name={copy.home} />
          <div className="relative flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold">{displayName || "Guest hunter"}</p>
              <p className="text-xs text-[var(--muted)]">
                {user ? (hasResume ? "Easy Apply enabled" : copy.noResume) : copy.noResume}
              </p>
            </div>
            {user ? (
              <button
                onClick={() => setMenu(!menu)}
                aria-label="User menu"
                className="grid h-11 w-11 overflow-hidden place-items-center rounded-full bg-[var(--accent)] font-bold text-[#0b1321]"
              >
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="" className="h-full w-full object-cover" />
                ) : (
                  avatarLetter
                )}
              </button>
            ) : (
              <Link
                href="/hunter/onboarding?login=1"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-bold transition hover:border-[var(--accent)]"
              >
                G
              </Link>
            )}

            {menu && user && (
              <div className="glass absolute right-0 top-14 z-20 w-48 rounded-2xl p-2 text-sm shadow-2xl">
                <Link
                  href="/hunter/settings"
                  onClick={() => setMenu(false)}
                  className="block rounded-xl p-3 hover:bg-[var(--accent-soft)]"
                >
                  {copy.settings}
                </Link>
                <button
                  onClick={async () => {
                    setMenu(false);
                    await signOut();
                  }}
                  className="block w-full rounded-xl p-3 text-left rtl:text-right hover:bg-[var(--accent-soft)]"
                >
                  {copy.logout}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hero */}
        <section className="mt-16 max-w-3xl">
          <p className="eyebrow">{copy.home}</p>
          <h1 className="mt-3 text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl">
            {copy.hello}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{copy.sub}</p>
        </section>

        {/* Guest Banner */}
        {!user && !loadingAuth && (
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-4 text-sm">
            <span className="flex-1">{copy.upload}</span>
            <Link href="/hunter/onboarding" className="button-primary rounded-full px-4 py-2 font-bold">
              {copy.create}
            </Link>
            <Link
              href="/hunter/onboarding?login=1"
              className="button-outline rounded-full px-4 py-2 font-bold"
            >
              {copy.signIn}
            </Link>
          </div>
        )}

        {/* Search Bar */}
        <div className="mt-12 flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] rtl:left-auto rtl:right-4">
              ⌕
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={copy.search}
              className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-4 pl-11 pr-4 outline-none focus:border-[var(--accent)] rtl:pl-4 rtl:pr-11"
            />
          </div>
          <button onClick={reset} className="button-outline rounded-2xl px-5 text-sm font-bold">
            {copy.clear}
          </button>
        </div>

        {/* Filters */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none"
          >
            <option value="All">
              {copy.category}: {copy.all}
            </option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={mode}
            onChange={(e) => {
              setMode(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none"
          >
            <option value="All">
              {copy.mode}: {copy.all}
            </option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Onsite">Onsite</option>
          </select>

          <select
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none"
          >
            <option value="All">
              {copy.level}: {copy.all}
            </option>
            <option value="Entry-level">Entry-level</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
          </select>

          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setPage(1);
            }}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none"
          >
            <option value="All">
              {copy.location}: {copy.all}
            </option>
            {["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Results Header */}
        <div ref={listTopRef} className="mt-10 flex scroll-mt-6 items-center justify-between">
          <p className="text-sm font-bold">
            {totalJobs} {copy.results}
          </p>
          <p className="text-sm text-[var(--muted)]">
            {copy.page} {page} {copy.of} {pages}
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="glass mt-8 rounded-2xl border-red-500/40 p-8 text-center">
            <h3 className="text-lg font-bold text-red-400">{copy.errorTitle}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{copy.errorSub}</p>
            <button onClick={reset} className="button-outline mt-4 rounded-xl px-5 py-2 text-sm font-bold">
              {copy.retry}
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {loadingJobs && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass animate-pulse rounded-2xl p-5">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--line)]" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-3/4 rounded bg-[var(--line)]" />
                    <div className="h-3 w-1/2 rounded bg-[var(--line)]" />
                    <div className="flex gap-2 pt-2">
                      <div className="h-5 w-16 rounded-full bg-[var(--line)]" />
                      <div className="h-5 w-16 rounded-full bg-[var(--line)]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loadingJobs && !error && jobsList.length === 0 && (
          <div className="glass mt-8 rounded-2xl p-12 text-center">
            <p className="text-3xl">🔍</p>
            <h3 className="mt-3 text-lg font-bold">{copy.emptyTitle}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{copy.emptySub}</p>
            <button onClick={reset} className="button-outline mt-6 rounded-xl px-6 py-2.5 text-sm font-bold">
              {copy.clear}
            </button>
          </div>
        )}

        {/* Job Cards Grid */}
        {!loadingJobs && !error && jobsList.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {jobsList.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                copy={copy}
                hasResume={hasResume}
                language={language}
                isApplied={appliedJobIds.has(job.id)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loadingJobs && !error && totalJobs > perPage && (
          <JobPagination page={page} pages={pages} onPageChange={changePage} labels={copy} />
        )}
      </div>
    </main>
  );
}
