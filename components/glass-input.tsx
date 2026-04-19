import React from 'react'

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`glass-input ${className}`}
      {...props}
    />
  )
)

GlassInput.displayName = 'GlassInput'
