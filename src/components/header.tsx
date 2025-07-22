'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'
import { MAIN_NAVIGATION, CONTACT_INFO } from '@/constants/navigation'

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
          <Link href={`mailto:${CONTACT_INFO.email}`}>
            <div className="flex gap-2 items-center">
              <Image 
                src="/assets/topbar/email.svg" 
                alt="email" 
                width={21} 
                height={21} 
              />
              <p className="text-base font-semibold tracking-wide">
                {CONTACT_INFO.email}
              </p>
            </div>
          </Link>
          <div className="flex lg:flex-row justify-around gap-5 h-full items-center">
            <Link
              href="/pdfs/RomeCodeCapabilityStatement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 rounded-md border font-bold text-base tracking-wide cursor-pointer border-white bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
            >
              Capability Statement
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white flex justify-center py-4 px-4 lg:px-0">
        <div className="flex lg:flex-row justify-between w-full lg:w-[60%] h-full items-center max-w-[1300px]">
          <div className="flex h-full items-center lg:gap-10">
            <Link href="/">
              <picture>
                <source srcSet="/romcode.png" media="(min-width: 1024px)" />
                <source srcSet="/romcode2.png" media="(min-width: 640px)" />
                <Image 
                  src="/romcode.png" 
                  alt="RomeCode" 
                  width={120}
                  height={32}
                  className="h-8 w-auto" 
                  priority
                />
              </picture>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row gap-8 xl:gap-10 text-[#080A11] font-normal tracking-tight">
              {MAIN_NAVIGATION.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Phone Button */}
          <Link
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
            className="hidden lg:flex gap-1 px-4 py-2 rounded-md items-center bg-[#FFD639] cursor-pointer hover:bg-[#FFD639]/90 transition-colors"
          >
            <Image 
              src="/assets/topbar/phone.svg" 
              alt="phone" 
              width={21} 
              height={21} 
            />
            <span className="text-[#080A11] text-base font-bold">
              {CONTACT_INFO.phone}
            </span>
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#080A11] hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
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
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 mb-3"
                >
                  <Image 
                    src="/assets/topbar/mobileEmail.svg" 
                    alt="email" 
                    width={16} 
                    height={16} 
                  />
                  <span className="text-gray-900 font-medium">
                    {CONTACT_INFO.email}
                  </span>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4 mb-6">
                {MAIN_NAVIGATION.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[#080A11] text-base font-medium py-2 hover:text-[#3d54a5] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Buttons */}
              <div className="space-y-3">
                <Link
                  href="/pdfs/RomeCodeCapabilityStatement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 rounded-md border font-bold text-base tracking-wide text-center cursor-pointer border-[#3d54a5] text-[#3d54a5] hover:bg-[#3d54a5] hover:text-white transition-colors"
                >
                  Capability Statement
                </Link>
                <Link
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                  className="flex gap-2 px-4 py-3 justify-center rounded-md items-center bg-[#FFD639] cursor-pointer hover:bg-[#FFD639]/90 transition-colors"
                >
                  <Image 
                    src="/assets/topbar/phone.svg" 
                    alt="phone" 
                    width={18} 
                    height={18} 
                  />
                  <span className="text-[#080A11] text-sm font-bold">
                    {CONTACT_INFO.phone}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
