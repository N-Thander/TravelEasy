"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";
import { FadeInOnScroll } from "./fade-in-on-scroll";
import { AlertCircle, TrendingUp, Globe } from "lucide-react";

const knowledgeArticles = [
  {
    id: 1,
    title: "Travel Alerts: Spring Flight Delays",
    summary:
      "Increased flight delays expected during spring travel season. Plan accordingly.",
    category: "Alert",
    icon: AlertCircle,
  },
  {
    id: 2,
    title: "Top Travel Destinations Q2 2025",
    summary:
      "Discover the most popular and cost-effective travel destinations this quarter.",
    category: "Trending",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "International Travel Policy Updates",
    summary:
      "New visa requirements and travel policies for international business travel.",
    category: "Policy",
    icon: Globe,
  },
  {
    id: 4,
    title: "Expense Report Best Practices",
    summary:
      "Tips and tricks for submitting accurate and compliant expense reports.",
    category: "Guide",
    icon: AlertCircle,
  },
];

export const KnowledgeFeed = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Travel Updates & Advisories
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Stay informed with the latest travel news and company policies
          </p>
        </FadeInOnScroll>

        {/* Knowledge Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeArticles.map((article, index) => {
            const IconComponent = article.icon;
            const categoryColors: Record<string, string> = {
              Alert: "bg-red-500/20 text-red-400",
              Trending: "bg-amber-500/20 text-amber-400",
              Policy: "bg-blue-500/20 text-blue-400",
              Guide: "bg-green-500/20 text-green-400",
            };

            return (
              <FadeInOnScroll key={article.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="h-full p-6 flex flex-col gap-4 cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${categoryColors[article.category] || "bg-primary/20 text-accent"}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[article.category] || "bg-primary/20 text-primary"}`}
                      >
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm flex-grow">
                      {article.summary}
                    </p>
                    <div className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                      {/* Read More → */}
                    </div>
                  </GlassCard>
                </motion.div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
