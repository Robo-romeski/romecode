import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import OurExpertise from '@/components/OurExpertise'
import PWAInstallPrompt from '@/components/PWAInstallPrompt'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <OurExpertise />
        <Services />
        <Contact />
      </main>

      <Footer />
      <PWAInstallPrompt />
    </>
  )
} 