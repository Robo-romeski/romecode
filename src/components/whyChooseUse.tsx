import { WhyChooseUsData } from '../constant/WhyChooseUsData'

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="flex justify-center mt-14 max-w-[1300px] mx-auto w-[95%] lg:w-[60%]"
    >
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-titleBlack">
          Why Choose Romcode_
        </h1>
        <p className="w-full sm:w-4/5 md:w-3/5 text-center text-desgray p-2 mt-5">
          RomeCode delivers tailored cloud, web, and app solutions with
          precision and innovation. We ensure every project is on time, on
          budget, and built for long-term succes
        </p>

        <main className="grid grid-cols-1 md:grid-cols-2 mt-14 p-2 place-items-center gap-5 w-full">
          {WhyChooseUsData.map((data) => {
            return (
              <div
                key={data.title}
                className="w-full p-3 flex flex-col rounded-[10px] border-[1px] border-[#E8ECF9]"
                style={{
                  boxShadow: '0px 4px 40px rgba(61, 84, 165, 0.14)',
                }}
              >
                <div className="flex flex-row h-full items-center">
                  <img src={data.icon} />
                  <h2 className="text-titleBlack text-base lg:text-xl font-bold w-[60%]">
                    {data.title}
                  </h2>
                </div>
                <p className="text-desgray p-2 text-sm md:text-base tracking-normal md:tracking-wide leading-6">
                  {data.description}
                </p>
              </div>
            )
          })}
        </main>
      </div>
    </section>
  )
}

export default WhyChooseUs