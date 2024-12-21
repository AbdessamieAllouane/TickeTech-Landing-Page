import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/validation/contact";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Save to database
    const submission = await prisma.contact.create({
      data: validatedData,
    });

    // Send emails
    await Promise.all([
      sendAdminNotification(validatedData),
      sendUserConfirmation(validatedData),
    ]);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
