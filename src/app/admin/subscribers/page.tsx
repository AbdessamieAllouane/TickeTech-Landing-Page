import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import "../../../app/globals.css";

export default async function Subscribers() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/signin");
  }

  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-black min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto bg-white/5 rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Subscribers</h1>
        <p className="text-gray-300 mb-6">
          View or remove subscribers from your mailing list.
        </p>
        {/* This table is just a placeholder */}
        <table className="w-full text-left bg-gray-800/50 rounded">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Joined</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">test@example.com</td>
              <td className="py-2 px-4">2024-01-01</td>
              <td className="py-2 px-4">
                <button className="text-red-400 hover:text-red-600">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
