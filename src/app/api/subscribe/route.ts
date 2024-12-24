import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = subscribeSchema.parse(body);

    const subscriber = await prisma.subscriber.create({
      data: { email: data.email },
    });

    return NextResponse.json(
      { message: "Successfully subscribed!", subscriber },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
}