import { NextResponse } from "next/server";

/**
 * Example backend endpoint — proof that the TypeScript backend layer is wired
 * and ready. A contact form on the frontend can POST JSON here. Right now it
 * only validates and echoes back; plug in your email provider / DB / CRM where
 * indicated.
 *
 *   POST /api/contact
 *   { "name": "...", "email": "...", "message": "..." }
 */

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body." };
  }
  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return { ok: false, error: "A valid name is required." };
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return { ok: false, error: "A valid email is required." };
  }
  if (typeof message !== "string" || message.trim().length < 10) {
    return { ok: false, error: "Message must be at least 10 characters." };
  }

  return { ok: true, data: { name: name.trim(), email: email.trim(), message: message.trim() } };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed JSON." }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  // TODO: deliver the message — e.g. Resend / Nodemailer / store in a database.
  // await sendEmail(result.data);
  console.info("[contact] new enquiry from", result.data.email);

  return NextResponse.json({ ok: true }, { status: 200 });
}
