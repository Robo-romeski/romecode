import backgroundImg from '../assets/04-Section.png'
const Getfreeconsultation = () => {
  return (
    <section className="mt-14 px-4 lg:px-0 mx-auto md:mt-10 lg:mt-28 relative max-w-full w-full h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-left md:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
      <div className="flex max-w-[1300px] mx-auto w-full md:w-[60%] h-full items-center">
        <div className="z-10 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl w-full lg:w-5/6 font-bold leading-tight lg:leading-9 text-white">
            Let's Build Something Exceptional Together
          </h1>
          <h4 className="font-bold mt-2 text-textgray w-full lg:w-5/6 text-sm lg:text-base">
            Get in touch today and take the first step toward smarter digital
            transformation.
          </h4>
          <p className="text-sm mt-5 text-textgray w-full lg:w-5/6">
            Whether you need scalable cloud solutions, a high-performing app, or
            a powerful website—RomeCode is ready to make it happen.
          </p>
          <button className="py-3 lg:py-2 px-6 lg:px-3 bg-[#FFD639] text-[#080A11] rounded mt-5 font-bold hover:bg-[#FFD639]/90 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Getfreeconsultation
