"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card -z-10">
        {/* PLACEHOLDER: Replace /placeholder.svg with your hero background image/video */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "/sbr hero.jpg",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/sbrlogo.jpg"
            alt="SBR Studio Suites Logo"
            width={200}
            height={200}
            className="w-32 sm:w-40 h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Tagline */}
        <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4 text-foreground">
          Elevate Your
          <span className="block text-primary">Beauty & Creativity</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
          Experience transformative beauty services and creative direction by Ronda Wallace at SBR Studio Suites.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-gold">Book Appointment</button>
          <button className="btn-red">Explore Services</button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
