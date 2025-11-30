import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { name, email, message, contact } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "support@achtrex.com",
            subject: `New Contact Submission from ${name}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        if (error) {
            console.error("Resend email error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: "Contact email sent successfully", data });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Failed to send contact email" }, { status: 500 });
    }
}