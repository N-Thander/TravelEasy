"use client";

import React, { useState, useEffect } from "react";
import { GlassButton } from "./glass-button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI Assistant", href: "#packing-widget" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-glass-bg backdrop-blur-md border-b border-glass-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-accent">
              TravelEasy
            </a>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground-secondary hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <GlassButton
              variant="primary"
              className="hidden sm:inline-block"
              onClick={() =>
                (window.location.href =
                  "https://orgfarm-a764ecc9fe-dev-ed.develop.my.site.com/traveleasyHome/login")
              }
            >
              Employee Login
            </GlassButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
