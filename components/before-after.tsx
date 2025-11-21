"use client"

import { useState } from "react"
import Image from "next/image"

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e) => {
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section id="transformations" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-foreground">Transformations</h2>
          <p className="text-lg text-muted-foreground">Slide to reveal the magic of our work</p>
        </div>

        {/* Before/After Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Slider */}
          <div
            className="relative w-full aspect-square rounded-lg overflow-hidden cursor-ew-resize bg-card"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              const container = e.currentTarget
              const rect = container.getBoundingClientRect()
              const x = e.touches[0].clientX - rect.left
              const percentage = (x / rect.width) * 100
              setSliderPosition(Math.max(0, Math.min(100, percentage)))
            }}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image src="/before-beauty-transformation.jpg" alt="Before transformation" fill className="object-cover" />
              {/* PLACEHOLDER: Replace with /images/before-after-1.jpg */}
            </div>

            {/* After Image */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <Image src="/after-beauty-transformation.jpg" alt="After transformation" fill className="object-cover" />
              {/* PLACEHOLDER: Replace with /images/after-1.jpg */}
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary transition-all"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg">
                <svg className="w-5 h-5 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                  <path d="M6 19l7-7-7-7" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 px-4 py-2 rounded text-primary font-semibold text-sm">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded text-secondary font-semibold text-sm">
              After
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">See the Difference</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Every transformation at SBR Studio Suites is a testament to Ronda Wallace's expertise and dedication to
              bringing out your best self. From beauty enhancements to complete creative transformations, we deliver
              exceptional results.
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Expert Beauty Services
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Creative Direction
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Personalized Styling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Luxury Experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
