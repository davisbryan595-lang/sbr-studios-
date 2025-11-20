import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import BeforeAfter from "@/components/before-after"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}
