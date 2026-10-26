"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import AmbientBackground from "../../../../components/ambient-background";
import { useApp } from "../../../../components/client-shell";
import { formatSalaryAmount } from "../../../../lib/jobs";

export default function JobDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { language, user, resume, supabase } = useApp();
  const ar = language === "ar";

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [application, setApplication] = useState(null);
  const [applying, setApplying] = useState(false);
  const [applyError, setApplyError] = useState("");

  const isUuid = typeof id === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

  // Fetch job from Supabase
  useEffect(() => {
    let isCancelled = false;
    async function loadJob() {
      setLoading(true);
      setError(null);
      try {
        let req;
        if (isUuid) {
          req = supabase.from("jobs").select("*, company:companies(*)").eq("id", id).maybeSingle();
        } else {
          // If a non-uuid slug or legacy ID was passed, fetch the most recent matching job or first job
          req = supabase.from("jobs").select("*, company:companies(*)").limit(1).maybeSingle();
        }

        const { data, error: jobErr } = await req;
        if (jobErr) throw jobErr;
        if (!data) throw new Error(ar ? "الوظيفة غير موجودة." : "Job not found.");

        if (!isCancelled) {
          setJob(data);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("Error fetching job:", err);
          setError(err.message || (ar ? "تعذر تحميل تفاصيل الوظيفة." : "Failed to load job details."));
        }
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    loadJob();
    return () => {
      isCancelled = true;
    };
  }, [id, isUuid, supabase, ar]);

  // Check if current user has already applied
  const checkApplication = useCallback(async (jobId, userId) => {
    try {
      const { data } = await supabase
        .from("applications")
        .select("*")
        .eq("job_id", jobId)
        .eq("profile_id", userId)
        .maybeSingle();

      if (data) {
        setApplication(data);
      }
    } catch (err) {
      console.error("Error checking application:", err);
    }
  }, [supabase]);

  useEffect(() => {
    if (job?.id && user?.id) {
      checkApplication(job.id, user.id);
    }
  }, [job?.id, user?.id, checkApplication]);

  // Handle application submission (both Easy Apply and Manual Apply)
  const handleApply = async (mode = "easy") => {
    if (!user) {
      router.push("/hunter/onboarding?login=1");
      return;
    }

    if (application || applying) return;

    setApplying(true);
    setApplyError("");

    try {
      const { data, error: insertErr } = await supabase
        .from("applications")
        .insert({
          job_id: job.id,
          profile_id: user.id,
          status: "applied"
        })
        .select()
        .single();

      if (insertErr) {
        // If unique constraint violation, user already applied
        if (insertErr.code === "23505" || insertErr.message.includes("unique")) {
          setApplication({ status: "applied" });
          return;
        }
        throw insertErr;
      }

      setApplication(data);

      // Increment applicants count
      await supabase
        .from("jobs")
        .update({ applicants_count: (job.applicants_count || 0) + 1 })
        .eq("id", job.id);

      setJob((prev) => ({
        ...prev,
        applicants_count: (prev.applicants_count || 0) + 1
      }));
    } catch (err) {
      console.error("Error submitting application:", err);
      setApplyError(
        ar ? "تعذر إرسال التقديم. يرجى المحاولة مرة أخرى." : "Failed to submit application. Please try again."
      );
    } finally {
      setApplying(false);
    }
  };

  const hasResume = Boolean(resume?.easy_apply_enabled);

  const salaryDisplay =
    job?.salary_min && job?.salary_max
      ? `${job.currency || "SAR"} ${formatSalaryAmount(job.salary_min)}–${formatSalaryAmount(job.salary_max)}`
      : job?.currency
      ? `${job.currency} competitive`
      : "Competitive";

  const statusLabel = application
    ? application.status === "applied"
      ? ar
        ? "قيد المراجعة"
        : "Under review"
      : application.status
    : null;

  return (
    <main className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <AmbientBackground />
      <Link href="/hunter" className="eyebrow">
        ← {ar ? "كل الوظائف" : "All jobs"}
      </Link>

      {/* Loading state */}
      {loading && (
        <div className="glass mt-12 animate-pulse rounded-[2rem] p-7 sm:p-10">
          <div className="flex gap-6">
            <div className="h-16 w-16 rounded-2xl bg-[var(--line)]" />
            <div className="flex-1 space-y-4">
              <div className="h-6 w-1/3 rounded bg-[var(--line)]" />
              <div className="h-10 w-2/3 rounded bg-[var(--line)]" />
              <div className="h-4 w-1/2 rounded bg-[var(--line)]" />
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="glass mt-12 rounded-[2rem] p-12 text-center">
          <p className="text-3xl">⚠️</p>
          <h2 className="mt-4 text-2xl font-bold">{error}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {ar ? "يرجى التحقق من الرابط أو استعراض وظائف أخرى." : "Check the URL or browse available opportunities."}
          </p>
          <Link href="/hunter" className="button-primary mt-6 inline-block rounded-xl px-6 py-2.5 text-sm font-bold">
            {ar ? "العودة إلى الوظائف" : "Back to jobs"}
          </Link>
        </div>
      )}

      {/* Loaded Job Details */}
      {!loading && !error && job && (
        <div className="glass mt-12 rounded-[2rem] p-7 sm:p-10">
          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-xl font-bold text-[var(--accent)]">
              {(job.company?.name || "GCC").slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="eyebrow">
                {job.company?.name} · {job.location}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
                {job.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
                {job.work_mode && <span>{job.work_mode}</span>}
                {job.level && (
                  <>
                    <span>·</span>
                    <span>{job.level}</span>
                  </>
                )}
                <span>·</span>
                <span className="font-semibold text-[var(--foreground)]">{salaryDisplay}</span>
                {job.category && (
                  <>
                    <span>·</span>
                    <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-bold text-[#0b1321]">
                      {job.category}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Grid: Details & Apply Aside */}
          <div className="mt-10 grid gap-10 border-t border-[var(--line)] pt-8 md:grid-cols-[1fr_280px]">
            <div>
              {/* About Role */}
              <h2 className="text-xl font-bold">{ar ? "عن الوظيفة" : "About the role"}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                {job.description ||
                  (ar
                    ? "انضم إلى فريق طموح يعمل على بناء منتجات مؤثرة لملايين الأشخاص في الخليج. ستقود مبادرات مهمة وتتعاون مع فرق متعددة التخصصات."
                    : "Join an ambitious team building products that matter for millions of people across the Gulf. You will lead meaningful initiatives and collaborate with a thoughtful, cross-functional team.")}
              </p>

              {/* Required Skills */}
              <h2 className="mt-10 text-xl font-bold">{ar ? "المهارات المطلوبة" : "Required skills"}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {(job.required_skills || []).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Company Info */}
              {job.company?.about && (
                <>
                  <h2 className="mt-10 text-xl font-bold">{ar ? "عن الشركة" : "About the company"}</h2>
                  <p className="mt-4 leading-8 text-[var(--muted)]">{job.company.about}</p>
                </>
              )}
            </div>

            {/* Aside: Action Box */}
            <aside className="h-fit rounded-2xl bg-[var(--accent-soft)] p-5">
              <p className="text-sm text-[var(--muted)]">
                {job.applicants_count ?? 0} {ar ? "متقدم" : "applicants"}
              </p>
              <p className="mt-2 text-lg font-bold">{salaryDisplay}</p>

              {applyError && (
                <p className="mt-3 text-xs font-semibold text-red-400">{applyError}</p>
              )}

              {/* Application Status or Action Buttons */}
              {application ? (
                <div className="mt-6 rounded-xl border border-[var(--talent-line)] bg-[color-mix(in_srgb,var(--talent-highlight)_10%,transparent)] p-4 text-center">
                  <p className="text-sm font-bold text-[var(--talent-highlight)]">
                    {ar ? "تم التقديم بنجاح ✓" : "Applied ✓"}
                  </p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {ar ? `الحالة: ${statusLabel}` : `Status: ${statusLabel}`}
                  </p>
                </div>
              ) : user ? (
                <div className="mt-6 space-y-3">
                  {hasResume ? (
                    <button
                      disabled={applying}
                      onClick={() => handleApply("easy")}
                      className="button-primary w-full rounded-xl py-3 text-sm font-bold disabled:opacity-50"
                    >
                      {applying
                        ? ar
                          ? "جارٍ التقديم..."
                          : "Submitting..."
                        : ar
                        ? "تقديم سريع"
                        : "Easy Apply"}
                    </button>
                  ) : (
                    <>
                      <Link
                        href="/hunter/settings"
                        className="button-primary block w-full rounded-xl py-3 text-center text-sm font-bold"
                      >
                        {ar ? "احفظ سيرتك للتقديم السريع" : "Store resume for Easy Apply"}
                      </Link>
                      <button
                        disabled={applying}
                        onClick={() => handleApply("manual")}
                        className="button-outline w-full rounded-xl py-2.5 text-xs font-bold disabled:opacity-50"
                      >
                        {applying
                          ? ar
                            ? "جارٍ التقديم..."
                            : "Submitting..."
                          : ar
                          ? "تقديم يدوي الآن"
                          : "Apply manually"}
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="mt-6 space-y-3">
                  <Link
                    href="/hunter/onboarding?login=1"
                    className="button-primary block w-full rounded-xl py-3 text-center text-sm font-bold"
                  >
                    {ar ? "سجّل دخولك للتقديم" : "Sign in to apply"}
                  </Link>
                  <p className="text-center text-xs text-[var(--muted)]">
                    {ar
                      ? "أنشئ حساباً لتفعيل التقديم السريع وحفظ سيرتك الذاتية."
                      : "Create an account to unlock Easy Apply with your stored resume."}
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      )}
    </main>
  );
}
