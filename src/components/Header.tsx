"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Hero", href: "#hero" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (elementId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(elementId);
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
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative w-32 h-10 md:w-40 md:h-12">
                <Image
                  src="logo_ticketech_org white.svg"
                  alt="Company Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Comming soon{" "}
            </button>
          </div>

          {/* Improved Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between items-center">
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-200 ease-in-out ${
                  isMenuOpen ? "opacity-0 translate-x-3" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Improved Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-lg transition-all duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-gray-900 to-black transform transition-transform duration-500 ease-in-out px-6 py-20 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Content */}
            <div className="h-full flex flex-col">
              {/* Navigation Items */}
              <div className="flex-1 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`w-full text-left py-4 px-4 text-lg font-medium text-gray-300 
                      hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300
                      transform ${
                        isMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }
                    `}
                    style={{ transitionDelay: `${150 + index * 50}ms` }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="pt-6 mt-6 border-t border-gray-800">
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 
                    text-white px-6 py-4 rounded-xl text-lg font-medium
                    hover:opacity-90 transition-all duration-300 transform
                    ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }
                  `}
                  style={{ transitionDelay: "400ms" }}
                >
                  Comming soon{" "}
                </button>

                {/* Social Links */}
                <div
                  className={`mt-8 flex justify-center space-x-6 
                  transform transition-all duration-300
                  ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                `}
                  style={{ transitionDelay: "500ms" }}
                >
                  {/* Add your social media icons/links here */}
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    {/* Twitter Icon */}
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn Icon */}
                  </a>
                  {/* Add more social links as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
