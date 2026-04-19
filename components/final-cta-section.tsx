'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'
import { GlassButton } from './glass-button'
import { FadeInOnScroll } from './fade-in-on-scroll'
import { ArrowRight } from 'lucide-react'

export const FinalCTASection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <GlassCard className="p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                  Ready to Transform Your Travel Management?
                </h2>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                  Access your corporate travel portal now and experience seamless travel management.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton
                  variant="primary"
                  onClick={() => window.location.href = 'https://[domain].force.com/traveleasy/s/'}
                  className="flex items-center justify-center gap-2 group px-8"
                >
                  Login with Company Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </GlassButton>
                <GlassButton
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:support@traveleasy.com'}
                  className="px-8"
                >
                  Contact Support
                </GlassButton>
              </div>
            </motion.div>
          </GlassCard>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
