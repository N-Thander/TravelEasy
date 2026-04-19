'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'
import { FadeInOnScroll } from './fade-in-on-scroll'
import { FileText, Zap, Plane as PlaneIcon, Receipt, DollarSign } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Submit Request',
    description: 'Create a travel request with all necessary details',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Approval Process',
    description: 'Route through appropriate approval chains',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Travel Execution',
    description: 'Execute your approved travel plans',
    icon: PlaneIcon,
  },
  {
    id: 4,
    title: 'Expense Submission',
    description: 'Submit and track travel expenses',
    icon: Receipt,
  },
  {
    id: 5,
    title: 'Reimbursement',
    description: 'Receive reimbursement automatically',
    icon: DollarSign,
  },
]

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            A simple five-step process from request to reimbursement
          </p>
        </FadeInOnScroll>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection line (visible on desktop) */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-glass-border to-transparent transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <FadeInOnScroll key={step.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlassCard className="p-6 flex flex-col items-center text-center gap-4">
                      {/* Step Number Badge */}
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-foreground-secondary font-bold text-lg">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary">
                        {step.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                </FadeInOnScroll>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
