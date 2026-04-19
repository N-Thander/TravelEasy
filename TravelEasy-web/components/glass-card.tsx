import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className = '', onClick }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      className={`glass-card ${className}`}
    >
      {children}
    </div>
  )
)

GlassCard.displayName = 'GlassCard'
