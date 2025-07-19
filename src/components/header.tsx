import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Email from '../assets/topbar/email.svg'
import Phone from '../assets/topbar/phone.svg'
import MobileEmail from '../assets/topbar/mobileEmail.svg'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="max-h-[10%] w-full fixed left-0 top-0 z-50">
      {/* Top bar - hidden on mobile */}
      <div className="bg-primary w-full py-2 text-white hidden lg:block">
        <div className="flex lg:flex-row justify-between items-center mx-auto max-w-[1300px] w-[60%]">
          <a href="mailto:info@romecode.com">
            <div className="flex gap-2 items-center">
              <img src={Email} alt="email" width={21} height={21} />
              <p className="text-base font-semibold tracking-wide">
                info@romecode.com
              </p>
            </div>
          </a>
          <div className="flex lg:flex-row justify-around gap-5 h-full items-center">
            <a
              href="/pdfs/RomeCodeCapabilityStatement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 rounded-md border font-bold text-base tracking-wide cursor-pointer border-white bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
            >
              Capability Statement
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white flex justify-center py-4 px-4 lg:px-0">
        <div className="flex lg:flex-row justify-between w-full lg:w-[60%] h-full items-center max-w-[1300px]">
          <div className="flex h-full items-center lg:gap-10">
            <picture>
              <source srcSet="/romcode.png" media="(min-width: 1024px)" />
              <source srcSet="/romcode2.png" media="(min-width: 640px)" />
              <img src="/romcode.png" className="h-8" alt="Romcode" />
            </picture>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row gap-8 xl:gap-10 text-[#080A11] font-normal tracking-tight">
              <a href="#why-choose-us">Why Choose Us</a>
              <a href="#our-services">Our Services</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>

          {/* Desktop Phone Button */}
          <a
            href="tel:13477888436"
            className="hidden lg:flex gap-1 px-4 py-2 rounded-md items-center bg-[#FFD639] cursor-pointer"
          >
            <img src={Phone} width={21} height={21} />
            <span className="text-[#080A11] text-base font-bold">
              (347) 788-8436
            </span>
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#080A11] hover:bg-gray-100 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/70 bg-opacity-50"
          onClick={toggleMobileMenu}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Mobile Top Info */}
              <div className="mb-6 pb-4 border-b border-gray-200">
                <a
                  href="mailto:info@romecode.com"
                  className="flex items-center gap-2 text-sm text-gray-600 mb-3"
                >
                  <img src={MobileEmail} alt="email" width={16} height={16} />
                  <span className="text-gray-900 font-medium">
                    info@romecode.com
                  </span>
                </a>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4 mb-6">
                <a
                  href="/"
                  className="text-[#080A11] text-base font-medium py-2 hover:text-[#3d54a5] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
                <a
                  href="#why-choose-us"
                  className="text-[#080A11] text-base font-medium py-2 hover:text-[#3d54a5] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Why Choose Us
                </a>
                <a
                  href="#our-services"
                  className="text-[#080A11] text-base font-medium py-2 hover:text-[#3d54a5] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="text-[#080A11] text-base font-medium py-2 hover:text-[#3d54a5] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </a>
              </nav>

              {/* Mobile Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-3 rounded-md border font-bold text-base tracking-wide cursor-pointer border-[#3d54a5] text-[#3d54a5] hover:bg-[#3d54a5] hover:text-white transition-colors">
                  Free Quote
                </button>
                <a
                  href="tel:13477888436"
                  className="flex gap-2 px-4 py-3 justify-center rounded-md items-center bg-[#FFD639] cursor-pointer"
                >
                  <img src={Phone} width={18} height={18} />
                  <span className="text-[#080A11] text-sm font-bold">
                    (347) 788-8436
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
