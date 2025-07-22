import { useState } from 'react'
import fitlife from '../assets/fitLifeMobileApp.png'
import shopEase from '../assets/Shopeease.png'
import Glowup from '../assets/glowup.png'
import Previous from '../assets/expertise/left.svg'
import Next from '../assets/expertise/right.svg'

const TrackRecord = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      image: fitlife,
      title: 'FitLife Mobile App',
    },
    {
      image: shopEase,
      title: 'ShopEase E-Commerce Website',
    },
    {
      image: Glowup,
      title: 'GlowUp - Skincare Routine App',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="px-4 lg:px-0 relative">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center text-2xl lg:text-[46px] font-bold text-titleBlack">
          Our Track Record_
        </h1>
        <p className="w-full lg:w-[69%] text-center text-desgray p-2 mt-2 text-sm lg:text-[18px]">
          Some of the apps and websites we've successfully delivered.
        </p>

        {/* Desktop View - Show All 3 Images with Cycling */}
        <div className="hidden lg:block mt-10 relative max-w-[1300px] w-[60%] mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {/* Render projects twice for smooth infinite scrolling */}
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className="flex-shrink-0 px-3" style={{ width: 'calc(33.333% - 0px)' }}>
                  <div className="bg-white p-0.5 rounded-xl border border-[#E8ECF9] shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img
                      src={project.image}
                      className="w-full h-auto rounded-xl"
                      alt={project.title}
                    />
                  </div>
                  <h2 className="text-titleBlack text-center text-base lg:text-[14px] mt-4 font-semibold">
                    {project.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-[35%] transform -translate-y-1/2 z-10 transition-all duration-300"
          >
            <img src={Previous} alt="Previous" className="w-10 h-10" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-[35%] transform -translate-y-1/2 z-10 transition-all duration-300"
          >
            <img src={Next} alt="Next" className="w-10 h-10" />
          </button>
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden w-full mt-10 relative">
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Render projects twice for smooth infinite scrolling */}
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white p-0.5 rounded-xl border border-[#E8ECF9] shadow-sm max-w-[250px] mx-auto">
                    <img
                      src={project.image}
                      className="w-full h-auto rounded-xl"
                      alt={project.title}
                    />
                  </div>
                  <h2 className="text-titleBlack text-center text-base mt-4 font-semibold max-w-[320px] mx-auto">
                    {project.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
          >
            <img
              src={Previous}
              alt="Previous"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110"
          >
            <img src={Next} alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrackRecord