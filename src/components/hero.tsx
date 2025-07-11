import backgroundImage from '../assets/hero/background.png'
import mobileHeroImage from '../assets/hero/mobile-hero.png'

const Hero = () => {
  return (
    <section className="mx-auto md:mt-10 lg:mt-28 relative max-w-full w-full h-[93vh] md:h-[70vh]">
      {/* Mobile background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${mobileHeroImage})`,
        }}
      ></div>
      {/* Desktop background image */}
      <div
        className="absolute inset-0 bg-cover bg-left lg:bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="absolute h-full w-full mt-18 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-[60%] h-full max-w-[1300px] mx-auto px-4 lg:px-0">
          <div className="w-full lg:w-[75%] flex flex-col gap-3 lg:gap-5 text-center mt-10 lg:mt-0 lg:text-left">
            <h1 className="text-2xl lg:text-[50px] font-bold leading-tight lg:leading-[60px] text-white w-full lg:w-[95%] tracking-wide lg:tracking-normal">
              Transform Your Business with Our Cloud Computing Services_
            </h1>
            <h4 className="font-medium text-[#CCD0DF] text-lg lg:text-[22px]">
              Your Cloud Consulting Partner for Web & App Solutions
            </h4>
            <p className="w-full lg:w-[85%] font-normal text-sm lg:text-base text-[#CCD0DF] tracking-wide">
              RomeCode helps businesses grow with expert cloud services and
              modern web and app development—backed by industry-leading tech and
              experience.
            </p>
            <div className="mt-5 lg:mt-0 flex justify-center lg:justify-start">
              <button className="flex gap-1 px-6 lg:px-7 py-3 rounded-md items-center bg-[#FFD639] cursor-pointer hover:bg-[#FFD639]/90 transition-colors">
                <span className="tracking-wide text-[#080A11] text-sm lg:text-base font-bold">
                  Get Free Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
