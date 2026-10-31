import { NextResponse } from "next/server";
import { buildJobApplicationConfirmationEmail } from "../../../lib/email-templates";

export async function POST(request) {
  try {
    const body = await request.json();
    const emailPayload = buildJobApplicationConfirmationEmail(body || {});

    let delivered = false;
    let provider = "template-preview";
    let dispatchResult = null;

    // Live delivery via Resend if RESEND_API_KEY is configured in .env.local
    if (process.env.RESEND_API_KEY && emailPayload.to) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "ittisal Careers <onboarding@resend.dev>",
            to: [emailPayload.to],
            subject: emailPayload.subject,
            html: emailPayload.html,
            text: emailPayload.text
          })
        });

        const resData = await res.json().catch(() => null);

        if (res.ok) {
          delivered = true;
          provider = "resend";
          dispatchResult = resData;
        } else {
          console.warn("Resend API warning/error:", resData);
          dispatchResult = resData;
        }
      } catch (sendErr) {
        console.warn("Email live dispatch skipped:", sendErr);
        dispatchResult = { error: sendErr?.message };
      }
    }

    return NextResponse.json({
      ok: true,
      delivered,
      provider,
      dispatchResult,
      email: emailPayload
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Failed to generate confirmation email" },
      { status: 400 }
    );
  }
}
