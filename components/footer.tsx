"use client"

import Image from "next/image"

const instaPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/images/insta-${i + 1}.jpg`,
}))

export default function Footer() {
  return (
    <footer className="bg-card text-foreground">
      {/* Instagram Grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-center mb-12">Follow Our Latest Work on Instagram</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {instaPosts.map((post) => (
              <div key={post.id} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={`/instagram-beauty-post-.jpg?height=300&width=300&query=instagram%20beauty%20post%20${post.id}`}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* PLACEHOLDER: Replace with /images/insta-${post.id}.jpg */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                  <a href="#" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
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
