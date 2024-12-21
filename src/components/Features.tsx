"use client";
import { useRef } from "react";
import { useInView } from "framer-motion"; // We'll use framer-motion instead

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const features = [
    {
      title: "Secure Ticketing",
      description:
        "Buy and sell tickets securely with integrated QR code validation",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive financial analytics and insights for business growth",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
        <section
          ref={ref}
          id="features"
          className={`py-20 bg-gray-900 transition-opacity duration-500 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Events
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Everything you need to manage, promote, and grow your events in
                Algeria
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-purple-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }