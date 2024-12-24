import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import "../../app/globals.css";
import { signOut } from "next-auth/react";
import AdminNav from "./AdminNav";
export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/signin");
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <AdminNav />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>
        <p className="text-lg text-center mb-8">
          Welcome, {session.user.email}
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <a
            href="/admin/newsletterform"
            className="bg-white/5 p-6 rounded transition hover:bg-white/10"
          >
            <h3 className="text-2xl font-semibold mb-2">Send Newsletter</h3>
            <p className="text-sm text-gray-300">
              Create and distribute newsletters to your subscribers.
            </p>
          </a>
          <a
            href="/admin/subscribers"
            className="bg-white/5 p-6 rounded transition hover:bg-white/10"
          >
            <h3 className="text-2xl font-semibold mb-2">Subscribers List</h3>
            <p className="text-sm text-gray-300">
              View and manage your newsletter distributors.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
