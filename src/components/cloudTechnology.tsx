import cloudimage from '../assets/cloud/cloud.png'
import cloudicon1 from '../assets/cloudicon.png'
import cloudicon2 from '../assets/cloudicon2.png'
import cloudicon3 from '../assets/cloudicon3.png'
const CloudTechnology = () => {
  return (
    <section className="py-10 lg:py-20 px-4 lg:px-0 mt-0 lg:mt-10">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-titleBlack">
        Cloud Technology That Works for You__
      </h1>
      <div className="flex w-full md:w-[60%] mx-auto max-w-[1300px]">
        <div className="flex w-full flex-col lg:flex-row mt-10 justify-between lg:mt-18 gap-5">
          <div className="w-full md:w-1/2 flex justify-center lg:justify-start">
            <img
              className="w-full max-w-[400px] lg:max-w-none"
              src={cloudimage}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div className="flex flex-col items-center lg:flex-row max-w-full border border-[#E8ECF9] p-4 lg:p-2 rounded-lg">
              <div className="w-full lg:w-[200px] flex justify-center lg:justify-start mb-3 lg:mb-0">
                <img
                  className="w-32 h-32 lg:w-full lg:h-auto object-contain"
                  src={cloudicon1}
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-titleBlack text-base lg:text-lg font-semibold">
                  Cloud Storage & Backup
                </h2>
                <p className="text-desgray text-sm">
                  Secure, encrypted cloud storage with automated backups. Access
                  your data anytime, from anywhere.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row max-w-full border border-[#E8ECF9] p-4 lg:p-2 rounded-lg items-center">
              <div className="w-full lg:w-[200px] flex justify-center lg:justify-start mb-3 lg:mb-0">
                <img
                  className="w-32 h-32 lg:w-full lg:h-auto object-contain"
                  src={cloudicon2}
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-titleBlack text-base lg:text-lg font-semibold">
                  Cloud Migration Services
                </h2>
                <p className="text-desgray text-sm">
                  Seamless migration of apps and data to the cloud. Minimize
                  downtime and optimize performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row max-w-full border border-[#E8ECF9] p-4 lg:p-2 rounded-lg items-center">
              <div className="w-full lg:w-[200px] flex justify-center lg:justify-start mb-3 lg:mb-0">
                <img
                  className="w-32 h-32 lg:w-full lg:h-auto object-contain"
                  src={cloudicon3}
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-titleBlack text-base lg:text-lg font-semibold">
                  Cloud Security Services
                </h2>
                <p className="text-desgray text-sm">
                  Protect your cloud with firewalls, threat detection, and
                  compliance tools. Security tailored for peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CloudTechnology
