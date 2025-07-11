import facebook from '../assets/footer/facebook.svg'
import linkedin from '../assets/footer/linkdin.svg'
import instagram from '../assets/footer/instagram.svg'
import twitter from '../assets/footer/twitter.svg'
import phone from '../assets/footer/phone.svg'
import email from '../assets/footer/msg.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-[#5C5E6E] py-10 px-4 lg:px-6 max-w-[1300px] mx-auto w-[95%] md:w-[60%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        <div className="text-center sm:text-left">
          <picture>
            <source srcSet={'/romcode.png'} media="(min-width: 1024px)" />
            <source srcSet={'/romcode2.png'} media="(min-width: 640px)" />
            <img src={'/romcode.png'} className="h-8 mx-auto sm:mx-0" />
          </picture>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Book A Call
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-sm">
            <img src={phone} alt="phone" className="w-6 h-6" />
            <span>+987 654 3210</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-sm">
            <img src={email} alt="email" className="w-6 h-6" />
            <a href="mailto:info@romecode.com" className="hover:underline">
              info@romecode.com
            </a>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3">Join Us</h3>
          <div className="flex gap-3 text-primary text-lg justify-center sm:justify-start">
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={facebook} alt="facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={linkedin} alt="linkedin" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={instagram} alt="instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={twitter} alt="twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 flex flex-col gap-4">
        <div className="h-[1px] w-full bg-[#F5ECEC]"></div>
        <div className="text-center text-sm text-[#3C4566]">
          © 2025 Romecode. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
