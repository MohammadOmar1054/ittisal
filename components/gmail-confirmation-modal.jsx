"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { buildJobApplicationConfirmationEmail } from "../lib/email-templates";

export default function GmailConfirmationModal({
  open,
  onClose,
  data,
  language = "en"
}) {
  const ar = language === "ar";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !data) return null;

  const email = buildJobApplicationConfirmationEmail({
    ...data,
    language
  });

  const handleDownloadHtml = () => {
    const blob = new Blob([email.html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ittisal-application-${email.referenceId.toLowerCase()}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gmail-confirmation-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose?.();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.97 }}
          transition={{ duration: 0.22 }}
          className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#dadce0] bg-white text-[#202124] shadow-2xl"
        >
          {/* Authentic Gmail Top Bar */}
          <div className="flex items-center justify-between border-b border-[#eceff1] bg-[#f6f8fc] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              {/* Gmail 4-color envelope icon */}
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-black/5"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M3 6.75V18a1.5 1.5 0 001.5 1.5h2.25V10.8L12 14.7l5.25-3.9v8.7h2.25A1.5 1.5 0 0021 18V6.75a1.5 1.5 0 00-2.4-1.2L12 10.5 5.4 5.55A1.5 1.5 0 003 6.75z"
                    fill="#EA4335"
                  />
                  <path d="M3 6.75V18a1.5 1.5 0 001.5 1.5h2.25V10.8L3 7.95v-1.2z" fill="#4285F4" />
                  <path d="M21 6.75V18a1.5 1.5 0 01-1.5 1.5h-2.25V10.8L21 7.95v-1.2z" fill="#34A853" />
                  <path d="M18.6 5.55L12 10.5 5.4 5.55A1.5 1.5 0 016.75 5.25h10.5c.5 0 .97.11 1.35.3z" fill="#FBBC04" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold tracking-tight text-[#1f1f1f] sm:text-sm">
                  {ar ? "تأكيد البريد الإلكتروني · Gmail" : "Gmail · Confirmation Template"}
                </p>
                <p className="text-[11px] text-[#5f6368]">
                  {ar ? `تم الإرسال إلى ${email.to}` : `Sent to ${email.to}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden rounded-full bg-[#e6f4ea] px-2.5 py-1 text-[11px] font-semibold text-[#137333] sm:inline-block">
                {ar ? "تم التسليم ✓" : "Delivered ✓"}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={ar ? "إغلاق" : "Close"}
                className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-[#5f6368] transition hover:bg-black/5 hover:text-[#202124]"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Scrollable Gmail Message Content */}
          <div className="overflow-y-auto px-4 py-5 sm:px-7">
            {/* Subject + Inbox Label */}
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="gmail-confirmation-title"
                className="text-base font-bold text-[#1f1f1f] sm:text-lg"
              >
                {email.subject}
              </h2>
              <span className="rounded bg-[#dddddd] px-2 py-0.5 text-[11px] font-medium text-[#444746]">
                {ar ? "البريد الوارد" : "Inbox"}
              </span>
            </div>

            {/* Sender Metadata Row */}
            <div className="mt-4 flex items-start justify-between gap-3 border-b border-[#f1f3f4] pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0b1321] text-sm font-black text-[#ff9076]">
                  i
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-sm font-bold text-[#1f1f1f]">ittisal Talent</span>
                    <span className="text-xs text-[#5f6368]">&lt;careers@ittisal.gcc&gt;</span>
                  </div>
                  <p className="text-xs text-[#5f6368]">
                    {ar ? `إلى ${email.to}` : `to me (${email.to})`}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs text-[#5f6368]">{email.formattedDate}</span>
            </div>

            {/* Branded Email Template Body */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#ffffff] shadow-sm">
              {/* Hero Banner */}
              <div
                className="p-5 text-white sm:p-6"
                style={{
                  background: "linear-gradient(135deg, #0b1321 0%, #142a42 100%)"
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ff9076] text-xs font-black text-[#0b1321]">
                      i
                    </span>
                    <span className="text-sm font-bold tracking-tight text-white">
                      ittisal <span className="text-[#ff9076]">/</span> اتصال
                    </span>
                  </div>
                  <span className="rounded-full border border-[#76e4c0]/40 bg-[#76e4c0]/15 px-3 py-1 text-[11px] font-bold text-[#76e4c0]">
                    {ar ? "تم تأكيد الطلب ✓" : "Application Confirmed ✓"}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                  {ar
                    ? `شكراً لتقديمك يا ${data.applicantName || "مرشحنا"}!`
                    : `You're in the running, ${data.applicantName || "Candidate"}!`}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#c9d8e6] sm:text-sm">
                  {ar
                    ? `تم إرسال طلبك بنجاح إلى فريق التوظيف في ${data.companyName}.`
                    : `Your application has been delivered to the hiring team at ${data.companyName}.`}
                </p>
              </div>

              {/* Job Summary Card inside Email */}
              <div className="p-5 sm:p-6">
                <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-4">
                  <div className="flex items-center gap-3.5">
                    {data.companyLogo ? (
                      <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-1.5">
                        <img
                          src={data.companyLogo}
                          alt={data.companyName}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ) : (
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0b1321] text-sm font-bold text-white">
                        {(data.companyName || "GC").slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#b85c38]">
                        {ar ? "ملخص الوظيفة" : "Application Summary"}
                      </p>
                      <h4 className="text-base font-bold text-[#0b1321] sm:text-lg">
                        {data.jobTitle}
                      </h4>
                      <p className="text-xs text-[#4b5563]">
                        {data.companyName} · {data.location}
                      </p>
                    </div>
                  </div>

                  <dl className="mt-4 grid gap-2.5 border-t border-[#e5e7eb] pt-3 text-xs sm:grid-cols-2">
                    <div>
                      <dt className="text-[#6b7280]">{ar ? "رقم المرجع" : "Reference ID"}</dt>
                      <dd className="mt-0.5 font-mono font-bold text-[#111827]">{email.referenceId}</dd>
                    </div>
                    <div>
                      <dt className="text-[#6b7280]">{ar ? "نمط العمل والمجال" : "Work Mode & Category"}</dt>
                      <dd className="mt-0.5 font-semibold text-[#111827]">
                        {data.workMode || "On-site"} · {data.category || "GCC"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#6b7280]">{ar ? "الراتب المعروض" : "Compensation"}</dt>
                      <dd className="mt-0.5 font-semibold text-[#111827]">{data.salaryDisplay}</dd>
                    </div>
                    <div>
                      <dt className="text-[#6b7280]">{ar ? "طريقة التقديم" : "Submission Method"}</dt>
                      <dd className="mt-0.5 font-semibold text-[#065f46]">{email.methodLabel}</dd>
                    </div>
                  </dl>
                </div>

                {/* Next Steps */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                    {ar ? "ماذا يحدث الآن؟" : "What happens next?"}
                  </p>
                  <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-[#4b5563]">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#e6f4ea] text-[10px] font-bold text-[#137333]">
                        1
                      </span>
                      <span>
                        {ar
                          ? `يستعرض فريق التوظيف في ${data.companyName} ملفك المهني وسيرتك الذاتية.`
                          : `The hiring team at ${data.companyName} reviews your profile and attached resume.`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#e8f0fe] text-[10px] font-bold text-[#1967d2]">
                        2
                      </span>
                      <span>
                        {ar
                          ? `ستصلك التحديثات ودعوات المقابلة مباشرة على بريدك (${email.to}).`
                          : `Status updates and interview invitations will be sent directly to ${email.to}.`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#fef7e0] text-[10px] font-bold text-[#b06000]">
                        3
                      </span>
                      <span>
                        {ar
                          ? "يمكنك متابعة حالة جميع طلباتك في أي وقت من لوحة باحث عن عمل."
                          : "You can track all your active applications anytime in the Job Hunter dashboard."}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gmail Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#eceff1] bg-[#f8f9fa] px-4 py-3 sm:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={email.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0b57d0] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0842a0]"
              >
                <span>✉</span>
                <span>{ar ? "فتح في Gmail" : "Open in Gmail"}</span>
              </a>
              <button
                type="button"
                onClick={handleDownloadHtml}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#747775] bg-white px-3.5 py-2 text-xs font-semibold text-[#1f1f1f] transition hover:bg-[#f1f3f4]"
              >
                <span>↓</span>
                <span>{ar ? "تنزيل القالب (.html)" : "Download Template (.html)"}</span>
              </button>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-xs font-bold text-[#444746] transition hover:bg-black/5"
            >
              {ar ? "تم" : "Done"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

