"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-primary hover:text-secondary transition-colors"
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        {item.type === "image" ? (
          <Image
            src={`/.jpg?key=eip0u&height=800&width=800&query=${item.alt}`}
            alt={item.alt}
            width={800}
            height={800}
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <div className="bg-black rounded-lg flex items-center justify-center aspect-video">
            <video src={item.src} controls autoPlay className="w-full h-full rounded-lg" />
          </div>
        )}
      </div>
    </div>
  )
}
