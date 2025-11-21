"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-card">
            <Image src="/ronda-wallace-headshot-professional.jpg" alt="Ronda Wallace" fill className="object-cover" />
            {/* PLACEHOLDER: Replace with /images/ronda-headshot.jpg */}
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-foreground">Meet Ronda Wallace</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ronda Wallace is the visionary behind SBR Studio Suites, a luxury beauty and creative studio dedicated to
              transforming lives through exceptional service and expert craftsmanship.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in beauty, styling, and creative direction, Ronda has built a reputation for
              delivering outstanding results and creating unforgettable experiences for every client who walks through
              her studio doors.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary mb-2">15+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>

            <button className="btn-gold">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
