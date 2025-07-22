import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="mx-auto md:mt-14 lg:mt-28 relative max-w-full w-full h-[93vh] md:h-[80vh] lg:h-[70vh]">
      {/* Mobile background image */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/assets/hero/mobile-hero.png"
          alt="RomeCode Mobile Hero Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          sizes="(max-width: 640px) 100vw, 0px"
          quality={85}
        />
      </div>

      {/* Desktop background image - shows on tablets and desktop */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/assets/hero/background.png"
          alt="RomeCode Desktop Hero Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'left center',
          }}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          sizes="(min-width: 640px) 100vw, 0px"
          quality={85}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute h-full w-full mt-18 lg:mt-0 z-10">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-[75%] h-full max-w-[1300px] mx-auto px-4 lg:px-0">
          <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-6 text-center mt-10 md:mt-16 lg:mt-0 lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-[44px] font-bold leading-tight md:leading-snug lg:leading-[54px] text-white w-full max-w-2xl tracking-wide lg:tracking-normal mx-auto lg:mx-0">
              Transform Your Business with Our Computing Services
            </h1>
            
            {/* Subtitle */}
            <h2 className="font-medium text-[#CCD0DF] text-lg md:text-xl lg:text-[22px] max-w-xl mx-auto lg:mx-0">
              Your Consulting Partner for Digital Solutions
            </h2>
            
            {/* Description */}
            <p className="w-full max-w-lg font-normal text-sm md:text-base lg:text-base text-[#CCD0DF] tracking-wide mx-auto lg:mx-0 px-4 md:px-8 lg:px-0">
              We help businesses architect, deploy, and manage full-stack systems with speed, 
              resilience, and security at the core — from cloud to on-prem, app development to data protection.
            </p>
            
            {/* Call to Action Button */}
            <div className="mt-5 md:mt-6 lg:mt-0 flex justify-center lg:justify-start">
              <Link
                href="https://calendly.com/romecode-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 px-6 lg:px-7 py-3 rounded-md items-center bg-[#FFD639] cursor-pointer hover:bg-[#FFD639]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD639] focus:ring-offset-2"
              >
                <span className="tracking-wide text-[#080A11] text-sm lg:text-base font-bold">
                  Get Free Consultation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
