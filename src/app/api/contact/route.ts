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

    // Try to send emails but don't fail if they don't work
    try {
      await Promise.allSettled([
        sendAdminNotification(validatedData),
        sendUserConfirmation(validatedData),
      ]);
    } catch (emailError) {
      console.error("Failed to send emails:", emailError);
      // Continue execution - we don't want to fail the submission if emails fail
    }

    return NextResponse.json(
      { message: "Form submitted successfully", id: submission.id },
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
