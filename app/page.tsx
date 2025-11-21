import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import BeforeAfter from "@/components/before-after"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <BeforeAfter />
      <About />
      <Footer />
    </main>
  )
}
