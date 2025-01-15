import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 relative overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Testimonials />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

