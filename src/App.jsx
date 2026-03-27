import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    if (/Android/i.test(navigator.userAgent)) {
      document.documentElement.classList.add('is-android')
    }
  }, [])

  return (
    <>
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay" />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
