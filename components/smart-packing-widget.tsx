'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'
import { GlassButton } from './glass-button'
import { GlassInput } from './glass-input'
import { FadeInOnScroll } from './fade-in-on-scroll'
import { Sparkles, Loader2 } from 'lucide-react'

const samplePackingList = `Essential Documents:
• Passport or ID
• Travel Insurance
• Booking confirmations
• Company travel card

Clothing:
• Business casual attire
• Comfortable walking shoes
• Weather-appropriate jacket

Toiletries & Personal Care:
• Medications
• Toiletries kit
• Phone charger

Technology:
• Laptop and charger
• Mobile phone
• Portable power bank

Business Essentials:
• Laptop
• Business cards
• Notepad`

export const SmartPackingWidget = () => {
  const [destination, setDestination] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [packingList, setPackingList] = useState('')
  const [displayedText, setDisplayedText] = useState('')

  const generatePackingList = async () => {
    if (!destination.trim()) {
      return
    }

    setIsLoading(true)
    setPackingList('')
    setDisplayedText('')

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    setPackingList(samplePackingList)
    setIsLoading(false)

    // Streaming text effect
    let index = 0
    const interval = setInterval(() => {
      if (index < samplePackingList.length) {
        setDisplayedText(samplePackingList.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 20)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && destination.trim()) {
      generatePackingList()
    }
  }

  return (
    <section id="packing-widget" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance flex items-center gap-2">
                  <Sparkles className="w-8 h-8 text-accent" />
                  AI Packing Assistant
                </h2>
                <p className="text-foreground-secondary mb-8">
                  Enter your destination and let our AI generate a personalized packing list for your trip.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Destination
                    </label>
                    <GlassInput
                      type="text"
                      placeholder="e.g., Tokyo, Paris, New York..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isLoading}
                    />
                  </div>

                  <GlassButton
                    variant="primary"
                    onClick={generatePackingList}
                    disabled={isLoading || !destination.trim()}
                    className="w-full justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Generating...
                      </>
                    ) : (
                      'Generate Packing List'
                    )}
                  </GlassButton>
                </div>
              </div>

              {/* Output Section */}
              <div>
                <div className="bg-glass-bg border border-glass-border rounded-lg p-6 h-96 overflow-y-auto">
                  {!packingList && !isLoading && (
                    <p className="text-foreground-secondary text-center pt-20">
                      Enter a destination to generate your personalized packing list
                    </p>
                  )}

                  {isLoading && (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="w-8 h-8 text-accent animate-spin" />
                    </div>
                  )}

                  {displayedText && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-3"
                    >
                      <p className="text-foreground whitespace-pre-line text-sm leading-relaxed font-mono">
                        {displayedText}
                      </p>
                      {displayedText === packingList && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block text-accent"
                        >
                          ▌
                        </motion.span>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
