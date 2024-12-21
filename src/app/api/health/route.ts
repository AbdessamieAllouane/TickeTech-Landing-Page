import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();
    return NextResponse.json({ status: "healthy", database: "connected" });
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json(
      { status: "unhealthy", error: "Database connection failed" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
