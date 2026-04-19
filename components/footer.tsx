"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-glass-border bg-glass-bg/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-2">TravelEasy</h3>
            <p className="text-foreground-secondary text-sm">
              Enterprise travel management simplified.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>
                <a
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#packing-widget"
                  className="hover:text-foreground transition-colors"
                >
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <p className="text-sm text-foreground-secondary mb-2">
              Questions? We're here to help.
            </p>
            <a
              href="mailto:support@traveleasy.com"
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              support@traveleasy.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-foreground-secondary">
            <p>© 2026 TravelEasy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/nasiruddin-thander/"
                className="hover:text-foreground transition-colors"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/N-Thander"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
