"use client";

import { signOut } from "next-auth/react";

export default function AdminNav() {
  return (
    <nav className="bg-black/80 backdrop-blur-sm shadow px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="space-x-4">
          <a
            href="/admin"
            className="hover:underline hover:text-gray-300 transition"
          >
            Dashboard
          </a>
          <a
            href="/admin/newsletterform"
            className="hover:underline hover:text-gray-300 transition"
          >
            Send Newsletter
          </a>
          <a
            href="/admin/subscribers"
            className="hover:underline hover:text-gray-300 transition"
          >
            Subscribers
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="hover:underline hover:text-gray-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
