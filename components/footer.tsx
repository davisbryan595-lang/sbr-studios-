"use client"

import Image from "next/image"

const instaPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/images/insta-${i + 1}.jpg`,
}))

export default function Footer() {
  return (
    <footer className="bg-card text-foreground">
      {/* Footer Bottom */}
      <div className="border-t border-border px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
              <div className="w-20 h-20 relative mb-4">
                <Image src="/images/sbrlogo.jpg" alt="SBR Logo" width={80} height={80} className="object-contain" />
              </div>
              <p className="text-sm text-muted-foreground">SBR Studio Suites</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Beauty Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Creative Direction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Styling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Consultations
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SBR Studio Suites by Ronda Wallace. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
