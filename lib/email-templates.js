export function buildJobApplicationConfirmationEmail({
  applicantName = "Candidate",
  applicantEmail = "candidate@example.com",
  jobTitle = "Role",
  companyName = "GCC Employer",
  companyLogo = "",
  location = "GCC",
  workMode = "On-site",
  salaryDisplay = "Competitive",
  category = "Technology",
  applicationId = "",
  appliedAt = new Date().toISOString(),
  applyMode = "easy",
  language = "en"
}) {
  const ar = language === "ar";
  const rawId = String(applicationId || "8F4A92C1").replace(/[^a-zA-Z0-9]/g, "");
  const referenceId = `ITT-${(rawId.slice(0, 8) || "8F4A92C1").toUpperCase()}`;

  const dateObj = appliedAt ? new Date(appliedAt) : new Date();
  const formattedDate = new Intl.DateTimeFormat(ar ? "ar-SA" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(isNaN(dateObj.getTime()) ? new Date() : dateObj);

  const from = "ittisal Talent <careers@ittisal.gcc>";
  const subject = ar
    ? `تأكيد التقديم: ${jobTitle} في ${companyName} (${referenceId})`
    : `Application Confirmed: ${jobTitle} at ${companyName} (${referenceId})`;

  const methodLabel =
    applyMode === "easy"
      ? ar
        ? "تقديم سريع (مع السيرة الذاتية المحفوظة)"
        : "Easy Apply (Stored Resume Attached)"
      : ar
      ? "تقديم يدوي عبر ملف اتصال"
      : "Direct Profile Application";

  const text = ar
    ? [
        `مرحباً ${applicantName}،`,
        "",
        `تم استلام طلب التقديم الخاص بك بنجاح لوظيفة "${jobTitle}" لدى ${companyName}.`,
        "",
        `تفاصيل الطلب:`,
        `- رقم المرجع: ${referenceId}`,
        `- المسمى الوظيفي: ${jobTitle}`,
        `- الشركة: ${companyName}`,
        `- الموقع: ${location} (${workMode})`,
        `- الراتب المتوقع: ${salaryDisplay}`,
        `- طريقة التقديم: ${methodLabel}`,
        `- تاريخ التقديم: ${formattedDate}`,
        "",
        `الخطوات القادمة:`,
        `1. تمت مشاركة ملفك المهني وسيرتك الذاتية مع فريق التوظيف في ${companyName}.`,
        `2. سيقوم فريق التوظيف بمراجعة طلبك والتواصل معك عبر البريد الإلكتروني (${applicantEmail}) في حال الترشح للمقابلة.`,
        "",
        `مع خالص التحيات،`,
        `فريق اتصال / ittisal`
      ].join("\n")
    : [
        `Hi ${applicantName},`,
        "",
        `Your application for "${jobTitle}" at ${companyName} has been received and confirmed.`,
        "",
        `Application Summary:`,
        `- Reference ID: ${referenceId}`,
        `- Role: ${jobTitle}`,
        `- Company: ${companyName}`,
        `- Location: ${location} (${workMode})`,
        `- Compensation: ${salaryDisplay}`,
        `- Submission Method: ${methodLabel}`,
        `- Submitted On: ${formattedDate}`,
        "",
        `What happens next:`,
        `1. Your ittisal profile and resume have been shared with the hiring team at ${companyName}.`,
        `2. The employer will review your application and reach out to ${applicantEmail} for next steps.`,
        "",
        `Warm regards,`,
        `The ittisal / اتصال Team`
      ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="${ar ? "ar" : "en"}" dir="${ar ? "rtl" : "ltr"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:24px 12px;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 10px 25px rgba(0,0,0,0.05);">
    <tr>
      <td style="background:linear-gradient(135deg,#0b1321 0%,#142a42 100%);padding:28px 32px;color:#ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="display:inline-block;background:#ff9076;color:#0b1321;font-weight:900;width:32px;height:32px;line-height:32px;text-align:center;border-radius:50%;margin-right:10px;">i</span>
              <span style="font-size:18px;font-weight:700;letter-spacing:-0.02em;color:#ffffff;">ittisal / اتصال</span>
            </td>
            <td align="${ar ? "left" : "right"}">
              <span style="display:inline-block;background:rgba(118,228,192,0.18);border:1px solid rgba(118,228,192,0.45);color:#76e4c0;font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;">
                ${ar ? "تم تأكيد الطلب ✓" : "Application Confirmed ✓"}
              </span>
            </td>
          </tr>
        </table>
        <h1 style="margin:22px 0 6px;font-size:24px;font-weight:700;color:#ffffff;">
          ${ar ? `شكراً لتقديمك يا ${applicantName}!` : `You're in the running, ${applicantName}!`}
        </h1>
        <p style="margin:0;font-size:14px;color:#c9d8e6;line-height:1.6;">
          ${
            ar
              ? `تم إرسال طلبك بنجاح إلى فريق التوظيف في ${companyName}.`
              : `Your application has been delivered to the hiring team at ${companyName}.`
          }
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px;">
        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin-bottom:24px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#b85c38;">
            ${ar ? "ملخص الوظيفة" : "Application Summary"}
          </p>
          <h2 style="margin:4px 0 2px;font-size:20px;font-weight:700;color:#0b1321;">${jobTitle}</h2>
          <p style="margin:0 0 16px;font-size:14px;color:#4b5563;">${companyName} · ${location}</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="6" style="font-size:13px;border-top:1px solid #e5e7eb;padding-top:12px;">
            <tr>
              <td style="color:#6b7280;width:42%;">${ar ? "رقم المرجع" : "Reference ID"}</td>
              <td style="font-weight:700;color:#111827;font-family:monospace;">${referenceId}</td>
            </tr>
            <tr>
              <td style="color:#6b7280;">${ar ? "نمط العمل والمجال" : "Work Mode & Category"}</td>
              <td style="font-weight:600;color:#111827;">${workMode} · ${category}</td>
            </tr>
            <tr>
              <td style="color:#6b7280;">${ar ? "الراتب المعروض" : "Compensation"}</td>
              <td style="font-weight:600;color:#111827;">${salaryDisplay}</td>
            </tr>
            <tr>
              <td style="color:#6b7280;">${ar ? "طريقة التقديم" : "Submission Method"}</td>
              <td style="font-weight:600;color:#065f46;">${methodLabel}</td>
            </tr>
            <tr>
              <td style="color:#6b7280;">${ar ? "تاريخ الإرسال" : "Submitted On"}</td>
              <td style="font-weight:600;color:#111827;">${formattedDate}</td>
            </tr>
          </table>
        </div>
        <h3 style="margin:0 0 10px;font-size:15px;font-weight:700;color:#111827;">
          ${ar ? "ماذا يحدث الآن؟" : "What happens next?"}
        </h3>
        <ol style="margin:0 0 24px;padding-${ar ? "right" : "left"}:20px;font-size:13.5px;color:#374151;line-height:1.7;">
          <li>${
            ar
              ? `يستعرض فريق التوظيف في ${companyName} ملفك المهني وسيرتك الذاتية.`
              : `The hiring team at ${companyName} reviews your profile and attached resume.`
          }</li>
          <li>${
            ar
              ? `ستصلك التحديثات ودعوات المقابلة مباشرة على بريدك (${applicantEmail}).`
              : `Status updates and interview invitations will be sent directly to ${applicantEmail}.`
          }</li>
          <li>${
            ar
              ? "يمكنك متابعة حالة جميع طلباتك في أي وقت من لوحة باحث عن عمل."
              : "You can track all your active applications anytime in the Job Hunter dashboard."
          }</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:18px 32px;text-align:center;font-size:12px;color:#6b7280;">
        ittisal / اتصال — ${ar ? "منصة الفرص المهنية في الخليج" : "The human-first work platform across the GCC"}
      </td>
    </tr>
  </table>
</body>
</html>`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    applicantEmail
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  return {
    from,
    to: applicantEmail,
    subject,
    referenceId,
    formattedDate,
    methodLabel,
    companyLogo,
    html,
    text,
    gmailComposeUrl
  };
}

