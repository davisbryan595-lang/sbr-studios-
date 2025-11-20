"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "./lightbox"

const galleryItems = [
  { id: 1, type: "image", src: "/images/fb-1.jpg", alt: "Transformation 1" },
  { id: 2, type: "image", src: "/images/fb-2.jpg", alt: "Transformation 2" },
  { id: 3, type: "video", src: "/images/fb-3.mp4", alt: "Reel 3" },
  { id: 4, type: "image", src: "/images/fb-4.jpg", alt: "Before & After 4" },
  { id: 5, type: "image", src: "/images/fb-5.jpg", alt: "Transformation 5" },
  { id: 6, type: "video", src: "/images/fb-6.mp4", alt: "Reel 6" },
  { id: 7, type: "image", src: "/images/fb-7.jpg", alt: "Transformation 7" },
  { id: 8, type: "image", src: "/images/fb-8.jpg", alt: "Transformation 8" },
  { id: 9, type: "video", src: "/images/fb-9.mp4", alt: "Reel 9" },
  { id: 10, type: "image", src: "/images/fb-10.jpg", alt: "Transformation 10" },
  { id: 11, type: "image", src: "/images/fb-11.jpg", alt: "Transformation 11" },
  { id: 12, type: "image", src: "/images/fb-12.jpg", alt: "Transformation 12" },
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stunning transformations and creative expressions by Ronda Wallace
          </p>
        </div>

        {/* Gallery Grid - 4 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <>
                  <Image
                    src={`/beauty-transformation-.jpg?height=400&width=400&query=beauty%20transformation%20${item.id}`}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  {/* PLACEHOLDER: Replace /images/fb-${item.id}.jpg with actual Facebook image */}
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {/* PLACEHOLDER: Replace /images/fb-${item.id}.mp4 with actual Facebook reel video */}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </section>
  )
}
