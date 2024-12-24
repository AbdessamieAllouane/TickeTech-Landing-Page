import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import "../../../app/globals.css";

export default async function NewsletterForm() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/signin");
  }

  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-black min-h-screen p-8 text-white">
      <div className="max-w-3xl mx-auto bg-white/5 rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Send Newsletter</h1>
        <p className="text-gray-300 mb-6">
          Compose and send a newsletter to your subscribers.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block">Subject</label>
            <input
              type="text"
              className="w-full mt-1 p-2 bg-gray-800/50 text-white rounded"
            />
          </div>
          <div>
            <label className="block">Content</label>
            <textarea
              rows={6}
              className="w-full mt-1 p-2 bg-gray-800/50 text-white rounded"
            />
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded hover:opacity-90">
            Send Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
