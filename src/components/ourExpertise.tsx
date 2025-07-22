import { useState } from 'react'
import cloudconsulting from '../assets/expertise/cloudconsulting.png'
import server from '../assets/server.png'
import cloud from '../assets/cloud.png'
import mobileandweb from '../assets/laptop.png'
import HardwareFullfullment from '../assets/hardware.png'
import storage from '../assets/storage_small.png'
import security from '../assets/scan.png'
import blade from '../assets/blade.png'
import backgroundImg from '../assets/03-Section.png'
import Previous from '../assets/expertise/left.svg'
import Next from '../assets/expertise/right.svg'

const OurExpertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const expertiseItems = [
    {
      title: 'Infrastructure Consulting',
      description:
        'Expert guides for scaling your business smoothly and cost-efficiently. Design, deploy, and optimize infrastructure across public cloud, hybrid cloud, and on-prem environments.',
      image: cloud,
    },
    {
      title: 'App & Web Development',
      description:
        'Craft a digital footprint that reflects your brand and prioritizes user experience for a strong online presence. engineered for scale, performance, and clean UX',
      image: mobileandweb,
    },
    {
      title: 'Security',
      description:
        'Security-first engineering across all layers — Source, configure, install, maintain, and deliver the security solutions you need',
      image: security,
    },
    {
      title: 'Hardware Fulfillment',
      description:
        'Source, configure, install, maintain, and even deliver the hardware you need, streamlining your IT equipment needs.',
      image: HardwareFullfullment,
    },
    {
      title: 'Data Management',
      description:
        'Redundant, automated, and resilient data strategies that support growth and withstand failure.',
      image: storage,
    },
    {
      title: 'Project Planning & Delivery',
      description:
        'Agile, outcome-focused delivery with clear milestones, communication, and full transparency.',
      image: blade,
    }

  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === expertiseItems.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? expertiseItems.length - 1 : prevIndex - 1
    )
  }

  // const getOrderedItems = () => {
  //   const items = []
  //   for (let i = 0; i < 3; i++) {
  //     const index = (currentIndex + i) % expertiseItems.length
  //     items.push(expertiseItems[index])
  //   }
  //   return items
  // }

  return (
    <section id="our-services" className="flex justify-center relative mt-14 md:mt-10 w-full px-4 py-10 lg:px-0">
      <img
        src={backgroundImg}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        alt="Background"
      />
      <div className="z-10 w-full md:w-[60%] max-w-[1300px] flex-col flex justify-center py-8 lg:py-0">
        <h1 className="text-center text-2xl lg:text-[46px] font-bold text-titleBlack mb-8 lg:mb-0">
          Our Expertise
        </h1>

        {/* Desktop View: 3 Cards */}
        <div className="hidden lg:block mt-10 w-full px-2 lg:px-0 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {/* Render all items in sequence for smooth sliding */}
              {[...expertiseItems, ...expertiseItems].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="shadow-sm bg-[#3D54A5]/16 rounded-xl items-center p-4 sm:p-5 overflow-hidden flex flex-col gap-2 mb-4 lg:mb-0 flex-shrink-0 mx-2.5"
                  style={{ width: 'calc(33.333% - 20px)' }}
                >
                  <h2 className="text-titleBlack text-lg sm:text-xl lg:text-[22px] font-semibold text-center mt-2 sm:mt-4">
                    {item.title}
                  </h2>
                  <p className="text-desgray text-base sm:text-lg lg:text-[18px] p-2 sm:p-2 text-center">
                    {item.description}
                  </p>
                  <img
                    src={item.image}
                    className="w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] h-auto object-contain mt-auto"
                    alt={item.title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
          >
            <img src={Previous} alt="Previous" className="w-10 h-10" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
          >
            <img src={Next} alt="Next" className="w-10 h-10" />
          </button>
        </div>

        {/* Mobile View: Single Card */}
        <div className="lg:hidden mt-10 w-full relative px-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex *100}%)` }}
            >
              {/* Render all items for smooth mobile sliding */}
              {[...expertiseItems, ...expertiseItems].map((item, index) => (
                <div
                  key={`mobile-${item.title}-${index}`}
                  className="shadow-sm bg-[#3D54A5]/16 rounded-xl items-center p-4 sm:p-5 overflow-hidden flex flex-col gap-2 mb-4 flex-shrink-0 w-full"
                >
                  <h2 className="text-titleBlack text-lg sm:text-xl font-semibold text-center mt-2 sm:mt-4">
                    {item.title}
                  </h2>
                  <p className="text-desgray text-base sm:text-lg p-2 text-center">
                    {item.description}
                  </p>
                  <img
                    src={item.image}
                    className="w-full max-w-[140px] h-auto object-contain mt-auto mx-auto"
                    alt={item.title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
          >
            <img src={Previous} alt="Previous" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
          >
            <img src={Next} alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurExpertise