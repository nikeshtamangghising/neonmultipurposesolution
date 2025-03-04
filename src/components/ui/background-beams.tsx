"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

interface BackgroundBeamsProps extends React.HTMLAttributes<HTMLDivElement> {
  disableAnimation?: boolean
  strokeWidth?: number
  beamOpacity?: number
  beamColor?: string
}

export function BackgroundBeams({
  className,
  disableAnimation = false,
  strokeWidth = 1,
  beamOpacity = 0.3,
  beamColor = "white",
  ...props
}: BackgroundBeamsProps) {
  const [opacity, setOpacity] = useState(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOpacity(1)
        }
      })
    })

    if (divRef.current) {
      observer.observe(divRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={divRef}
      className={cn(
        "absolute inset-0 overflow-hidden",
        "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
      {...props}
    >
      <svg
        className={cn(
          "absolute inset-0 h-full w-full",
          disableAnimation ? "" : "[animation:beam_10s_ease-in-out_infinite]"
        )}
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: beamColor, stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: beamColor, stopOpacity: beamOpacity }} />
            <stop offset="100%" style={{ stopColor: beamColor, stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <g 
          style={{ 
            transform: disableAnimation ? "" : "rotate(45deg) translate(-5%, -25%)",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="-100%"
              y1={`${i * 25}%`}
              x2="200%"
              y2={`${i * 25}%`}
              stroke="url(#beam-gradient)"
              strokeWidth={strokeWidth}
            />
          ))}
        </g>
      </svg>
    </div>
  )
} 