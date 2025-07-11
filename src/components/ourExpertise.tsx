import { useState } from 'react'
import cloudconsulting from '../assets/expertise/cloudconsulting.png'
import mobileandweb from '../assets/Layer_1.png'
import HardwareFullfullment from '../assets/Layer_2.png'
import backgroundImg from '../assets/03-Section.png'
import Previous from '../assets/expertise/left.svg'
import Next from '../assets/expertise/right.svg'

const OurExpertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const expertiseItems = [
    {
      title: 'Cloud Consulting',
      description:
        'Experts guide your business transition to cloud storage and services, ensuring security, cost-efficiency, and a smooth migration.',
      image: cloudconsulting,
    },
    {
      title: 'Web/Mobile Dev',
      description:
        'Craft custom websites and mobile apps that reflect your brand and prioritize user experience for a strong online presence.',
      image: mobileandweb,
    },
    {
      title: 'Hardware Fulfillment',
      description:
        'Source, configure, install, maintain, and even deliver the hardware you need, streamlining your IT equipment needs.',
      image: HardwareFullfullment,
    },
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
    <section className="flex justify-center relative mt-14 md:mt-10 w-full px-4 py-10 lg:px-0">
      <img
        src={backgroundImg}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        alt="Background"
      />
      <div className="z-10 w-full md:w-[60%] max-w-[1300px] flex-col flex justify-center py-8 lg:py-0">
        <h1 className="text-center text-2xl lg:text-[46px] font-bold text-titleBlack mb-8 lg:mb-0">
          Our Expertise_
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
                    className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-none mt-auto"
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
                    className="w-full max-w-[200px] mt-auto"
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