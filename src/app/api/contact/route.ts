import { NextResponse, type NextRequest } from "next/server";
import { deliverContactEmail, validateContactSubmission } from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 12_000;

function response(data: Record<string, unknown>, status: number) {
  return NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } });
}

/** No secrets exposed. Email is sent only from the server using a verified Resend sender. */
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin) {
    try {
      if (new URL(origin).host !== host) {
        return response({ error: "Cross-origin submissions are not allowed." }, 403);
      }
    } catch {
      return response({ error: "Invalid request origin." }, 403);
    }
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return response({ error: "Expected JSON." }, 415);
  }
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BYTES) {
    return response({ error: "Submission is too large." }, 413);
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return response({ error: "Unable to read the submission." }, 400);
  }
  if (new TextEncoder().encode(raw).length > MAX_BYTES) {
    return response({ error: "Submission is too large." }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return response({ error: "Invalid JSON submission." }, 400);
  }
  const validated = validateContactSubmission(payload);
  if (!validated.success) {
    return response({ error: "Check the highlighted fields.", fields: validated.errors }, 422);
  }

  // Honeypot: discard automated submissions without delivering an email.
  if (validated.data.website) {
    return response({ accepted: true, message: "Request received." }, 200);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return response({ error: "Email delivery is not configured. Please use WhatsApp or email us directly." }, 503);
  }

  try {
    const result = await deliverContactEmail(validated.data, { apiKey, from, to });
    if (!result.success) {
      return response({ error: "Email delivery failed. Please try again or contact us directly." }, 502);
    }
    // Resend accepted the email; final inbox delivery is not guaranteed by the API response.
    return response({ accepted: true, message: "Your message was accepted for delivery. We will respond by email." }, 200);
  } catch {
    return response({ error: "Unable to send the message right now. Please use WhatsApp or email us directly." }, 502);
  }
}
