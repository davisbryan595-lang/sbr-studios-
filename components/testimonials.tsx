"use client"

import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Client",
    text: "Ronda transformed not just my look, but my confidence. An absolutely stellar experience!",
    image: "/images/client-1.jpg",
  },
  {
    id: 2,
    name: "Jessica L.",
    role: "Client",
    text: "The level of detail and care at SBR Studio is unmatched. I felt like royalty.",
    image: "/images/client-2.jpg",
  },
  {
    id: 3,
    name: "Amanda T.",
    role: "Client",
    text: "An investment in yourself that pays dividends. Highly recommend to everyone!",
    image: "/images/client-3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-foreground">Loved by Our Clients</h2>
          <p className="text-lg text-muted-foreground">Hear from those who have experienced the SBR difference</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-lg p-8 hover:shadow-xl transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

              {/* Avatar & Name */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={`/.jpg?height=48&width=48&query=${testimonial.name}%20portrait`}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  {/* PLACEHOLDER: Replace with /images/client-${testimonial.id}.jpg */}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
