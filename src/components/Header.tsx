"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { name: "Features", href: "#features", icon: "🎯" },
    { name: "Hero", href: "#hero", icon: "🚀" },
    { name: "Partners", href: "#partners", icon: "🤝" },
    { name: "Contact", href: "#contact", icon: "📧" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ticketech",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/people/TickeTech/61570660832185/",
      icon: <FaFacebook className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ticket_tech/",
      icon: <FaInstagram className="w-6 h-6" />,
    },
  ];

  const scrollToSection = (elementId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-black/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-32 h-10 md:w-40 md:h-12">
                <Image
                  src="/logo_ticketech_org_white.svg"
                  alt="TickeTech Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>

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
                Coming Soon
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <RiMenu4Line className="w-8 h-8 text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop with faster blur transition */}
        <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-md transition-opacity duration-300" />

        {/* Menu Content - Faster animations */}
        <div className="relative h-full overflow-y-auto">
          {/* Menu Header */}
          <div className="sticky top-0 z-50 bg-gradient-to-b from-gray-900 to-gray-900/0 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="relative w-32 h-10">
                <Image
                  src="/logo_ticketech_org_white.svg"
                  alt="TickeTech Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                aria-label="Close menu"
              >
                <IoClose className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>

          <div className="flex flex-col px-6 py-8">
            {/* Navigation Items - Faster animations */}
            <nav className="space-y-4 mb-12">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`w-full flex items-center space-x-4 p-4
                    text-white text-xl font-medium rounded-xl
                    bg-white/10 hover:bg-white/20
                    transform transition-all duration-200
                    ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                  style={{ transitionDelay: `${75 + index * 50}ms` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            {/* CTA Button - Faster animation */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full bg-gradient-to-r from-purple-600 to-blue-600
                text-white p-4 rounded-xl text-xl font-medium mb-12
                hover:opacity-90 transition-all duration-200
                transform ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: "250ms" }}
            >
              Join Waiting List
            </button>

            {/* Social Links - Faster animation */}
            <div
              className={`mt-auto transform transition-all duration-200 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-gray-300 text-sm font-medium mb-6 uppercase tracking-wider text-center">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-300 hover:text-white
                      hover:bg-white/20 rounded-full
                      transition-all duration-200"
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} TickeTech. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
