"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassButton } from "./glass-button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
                Enterprise Travel.
                <span className="text-accent"> Simplified.</span>
              </h1>
              <p className="text-lg text-foreground-secondary max-w-lg leading-relaxed">
                Plan, approve, travel, and reimburse — seamlessly. Experience
                the future of corporate travel management.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GlassButton
                variant="primary"
                onClick={() =>
                  (window.location.href =
                    "https://orgfarm-a764ecc9fe-dev-ed.develop.my.site.com/traveleasyHome/login")
                }
                className="flex items-center justify-center gap-2 group"
              >
                Login with Company Account
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </GlassButton>
              <GlassButton
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Features
              </GlassButton>
            </div>
          </motion.div>

          {/* Right: Illustration Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-glass-border backdrop-blur-sm overflow-hidden">
              {/* Geometric illustration with stacked travel cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 p-8"
              >
                <div className="w-full h-full relative">
                  {/* Background Element: Expense/Analytics Wave */}
                  <svg
                    className="absolute bottom-0 left-0 w-full h-40 opacity-40 z-0"
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,50 C100,100 200,0 400,50 L400,100 L0,100 Z"
                      fill="url(#orange-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="orange-gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--primary)"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--primary)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Card 1: Boarding Pass (Top Left) */}
                  <div className="absolute top-4 left-2 w-48 h-24 bg-glass-bg border border-glass-border rounded-xl backdrop-blur-md shadow-lg transform -rotate-6 z-10 flex flex-col justify-between p-4">
                    <div className="flex justify-between items-center text-sm font-bold text-foreground-secondary">
                      <span>SFO</span>
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                      <span>JFK</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                      <div className="w-3/4 h-full bg-primary rounded-full"></div>
                    </div>
                    <div className="text-[10px] font-medium text-foreground-secondary/70 mt-2 uppercase tracking-wider">
                      Boarding: 08:30 AM
                    </div>
                  </div>

                  {/* Card 2: Hotel Key / Accommodation (Middle Right) */}
                  <div className="absolute top-16 right-4 w-40 h-56 bg-glass-bg border border-glass-border rounded-xl backdrop-blur-md shadow-xl transform rotate-3 z-20 flex flex-col p-5">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 border border-glass-border shadow-sm">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                      </svg>
                    </div>
                    <div className="w-3/4 h-2.5 bg-muted rounded-full mb-3"></div>
                    <div className="w-1/2 h-2 bg-muted/60 rounded-full mb-6"></div>
                    <div className="mt-auto flex justify-between items-end">
                      <div className="text-xl font-bold text-foreground leading-tight">
                        Room
                        <br />
                        101
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-accent opacity-50"></div>
                    </div>
                  </div>

                  {/* Card 3: Itinerary / Schedule (Bottom Left) */}
                  <div className="absolute bottom-6 left-10 w-52 h-36 bg-primary/90 border border-primary/50 rounded-xl backdrop-blur-md shadow-2xl transform -rotate-2 z-30 p-5 text-primary-foreground flex flex-col justify-center">
                    <div className="text-sm font-bold mb-4 tracking-wide">
                      Today's Itinerary
                    </div>
                    <div className="flex items-center gap-3 mb-3 opacity-90">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                      <div className="h-2 w-24 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-3 mb-3 opacity-90">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                      <div className="h-2 w-16 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-3 opacity-90">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                      <div className="h-2 w-28 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
