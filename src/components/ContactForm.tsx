"use client";
import { useState, useEffect } from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setStatusMessage("");

    try {
      const validatedData = formSchema.parse(formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setSubmitStatus("success");
      setStatusMessage("Thank you for your interest! We'll be in touch soon.");
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus("error");
        setStatusMessage("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!isMounted) {
    return null;
  }
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Elevate Your Events
          </h2>

          <div className="text-center space-y-4 mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-gray-200">
              Seamless event management for creators who dare to be different
            </p>
            <p className="text-base md:text-lg text-gray-300 px-4">
              From intimate workshops to grand festivals, we empower event
              creators with the tools they need to succeed
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-8">
            <p className="text-base md:text-lg text-gray-200 mb-4 text-center">
              Why switch to us?
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3 text-sm md:text-base">
                <svg
                  className="w-5 h-5 text-purple-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  All-in-one platform: ticketing, marketing, and analytics
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base">
                <svg
                  className="w-5 h-5 text-purple-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Industry-lowest fees to maximize your revenue</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base">
                <svg
                  className="w-5 h-5 text-purple-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>24/7 dedicated support for you and your attendees</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base">
                <svg
                  className="w-5 h-5 text-purple-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Be The First To Know When We Launch And Get Early Free Access
                </span>
              </li>
            </ul>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
              <p className="text-green-400 text-center text-sm md:text-base font-medium">
                {statusMessage}
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg">
              <p className="text-red-400 text-center text-sm md:text-base font-medium">
                {statusMessage}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-colors ${
                  errors.name ? "border-red-500" : "border-gray-700"
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-colors ${
                  errors.email ? "border-red-500" : "border-gray-700"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Organization Name"
                className={`w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-colors ${
                  errors.company ? "border-red-500" : "border-gray-700"
                }`}
                disabled={isSubmitting}
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500">{errors.company}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What kind of events do you organize?"
                rows={3}
                className={`w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-colors ${
                  errors.message ? "border-red-500" : "border-gray-700"
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 md:py-4 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 text-base md:text-lg font-medium"
            >
              {isSubmitting ? "Processing..." : "Join the Revolution"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
