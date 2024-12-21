import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/validation/contact";

export const runtime = "nodejs"; 

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Database configuration error" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    const submission = await prisma.contact
      .create({
        data: validatedData,
      })
      .catch((error) => {
        console.error("Database error:", error);
        throw new Error("Failed to save to database");
      });

    if (!submission) {
      throw new Error("Failed to create submission");
    }

    return NextResponse.json(
      { message: "Form submitted successfully", id: submission.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
