"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Hero() {
  const [heroRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative min-h-screen flex items-center bg-gradient-to-r from-purple-900 via-blue-900 to-black overflow-hidden pt-24 pb-16 px-4 md:px-0 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute animate-pulse w-96 h-96 bg-purple-500 rounded-full -top-20 -left-20 blur-3xl" />
        <div className="absolute animate-pulse w-96 h-96 bg-blue-500 rounded-full -bottom-20 -right-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Description */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Future of Event Management in Algeria
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                Revolutionizing the Algerian event industry with cutting-edge
                technology and seamless experiences.
              </p>
              <ul className="text-lg text-gray-300 space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Secure digital ticketing with QR validation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Smart event promotion and discovery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Real-time analytics and insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Comprehensive event management tools
                </li>
              </ul>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all mt-8 hover:scale-105 transform duration-200 flex items-center"
            >
              <span>Coming Soon</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Founder Info */}
          <div className="text-center md:text-right">
            <div className="relative w-48 h-48 mx-auto md:ml-auto md:mr-0 mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-purple-500/30">
              <Image
                src="/founder.jpg"
                alt="Abdessamie Allouane"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Founded by Abdessamie ALLOUANE
            </h2>
            <p className="text-gray-300">
              Telecommunication student at ENSTTIC
              <br />
              Full Stack Web Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
