import CloudTechnology from '../components/cloudTechnology'
import Footer from '../components/footer'
import Getfreeconsultation from '../components/Getfreeconsultation'
import Header from '../components/header'
import Hero from '../components/hero'
import OurExpertise from '../components/ourExpertise'
// import TrackRecord from '../components/TrackRecord'
import WhyChooseUs from '../components/whyChooseUse'

const Homepage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurExpertise />
      <CloudTechnology />
      {/* <TrackRecord /> */}
      <Getfreeconsultation />
      <Footer />
    </main>
  )
}

export default Homepage
