import { NextResponse } from "next/server";

/**
 * Lead capture endpoint.
 *
 * For launch we log to the server console and optionally forward to Slack
 * via an incoming webhook if SLACK_WEBHOOK_URL is set. Swap in Resend,
 * HubSpot, or Attio when the stack is picked.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Minimal validation
    const { name, email, company } = body ?? {};
    if (!name || !email || !company) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, company." },
        { status: 400 }
      );
    }

    const payload = {
      received_at: new Date().toISOString(),
      ...body,
    };

    // Server-side log (shows up in Vercel function logs)
    console.log("[BCS lead]", JSON.stringify(payload));

    // Optional: forward to Slack
    const slack = process.env.SLACK_WEBHOOK_URL;
    if (slack) {
      await fetch(slack, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text: [
            `*New BCS lead*`,
            `*${payload.name}* — ${payload.company}`,
            `${payload.email}${payload.phone ? " · " + payload.phone : ""}`,
            `${payload.role ?? "—"} · ${payload.species ?? "—"} · ${payload.volume ?? "—"} BF · ${payload.state ?? "—"}`,
            payload.notes ? `> ${payload.notes}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      }).catch(() => {/* swallow — don't block the user */});
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[BCS lead] error", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
