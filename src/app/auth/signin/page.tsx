"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../../app/globals.css";

export default function SignIn() {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) setError("Invalid credentials");
    else router.push("/admin");
  };

  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-black min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white/5 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Admin Sign In
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 mt-1 bg-gray-800/50 text-white rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 mt-1 bg-gray-800/50 text-white rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded hover:opacity-90 tracking-wide"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
