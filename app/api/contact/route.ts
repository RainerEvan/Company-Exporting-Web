import { NextResponse } from "next/server"
import { writeFile, readFile } from "node:fs/promises"
import path from "node:path"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const payload = {
      ...body,
      createdAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "",
    }

    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_TO_EMAIL && process.env.SENDGRID_FROM_EMAIL) {
      // Optional: Send email via SendGrid
      const sg = await import("@sendgrid/mail").then((m) => m.default)
      sg.setApiKey(process.env.SENDGRID_API_KEY!)
      await sg.send({
        to: process.env.SENDGRID_TO_EMAIL!,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: `New Inquiry: ${payload.product || "General"} from ${payload.name}`,
        text: JSON.stringify(payload, null, 2),
      })
    } else {
      // Fallback: Append JSON to data/contacts.json
      const file = path.join(process.cwd(), "data", "contacts.json")
      let arr: any[] = []
      try {
        const raw = await readFile(file, "utf8")
        arr = JSON.parse(raw)
      } catch {}
      arr.push(payload)
      await writeFile(file, JSON.stringify(arr, null, 2))
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[v0] contact error", e)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
