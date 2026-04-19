'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'
import { FadeInOnScroll } from './fade-in-on-scroll'
import { Plane, CheckCircle, CreditCard, Sparkles } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Travel Requests',
    description: 'Submit travel requests with destination, dates, and purpose. Get instant validation and next-step guidance.',
    icon: Plane,
  },
  {
    id: 2,
    title: 'Approval Workflow',
    description: 'Streamlined approval chains with manager and finance teams. Real-time status updates and notifications.',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Expense Management',
    description: 'Track and manage travel expenses. Automatic categorization and reconciliation with company policies.',
    icon: CreditCard,
  },
  {
    id: 4,
    title: 'AI Travel Assistant',
    description: 'Smart recommendations for flights, hotels, and itineraries. Personalized packing lists and travel tips.',
    icon: Sparkles,
  },
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Everything you need to manage corporate travel seamlessly
          </p>
        </FadeInOnScroll>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <FadeInOnScroll key={feature.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="h-full p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-secondary flex-grow">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </FadeInOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
