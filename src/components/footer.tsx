'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '@/constants/navigation'

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false)
  
  return (
    <footer className="bg-white text-[#5C5E6E] py-10 px-4 md:px-6 lg:px-6 max-w-[1300px] mx-auto w-[95%] md:w-[85%] lg:w-[60%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
        
        {/* Logo */}
        <div className="text-center sm:text-left">
          <Link href="/">
            <picture>
              <source srcSet="/romcode.png" media="(min-width: 1024px)" />
              <source srcSet="/romcode2.png" media="(min-width: 640px)" />
              <Image 
                src="/romcode.png" 
                alt="RomeCode" 
                width={120}
                height={32}
                className="h-8 mx-auto sm:mx-0" 
              />
            </picture>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="https://calendly.com/romecode-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:text-primary transition-colors"
              >
                Book A Call
              </Link>
            </li>
            <li>
              <Link 
                href="/privacy" 
                className="hover:underline hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <button 
                onClick={() => setOpenTerms(true)} 
                className="hover:underline hover:text-primary transition-colors text-left w-full"
              >
                Terms
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-sm">
            <Image 
              src="/assets/footer/phone.svg" 
              alt="phone" 
              width={24} 
              height={24} 
            />
            <Link 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              className="hover:underline hover:text-primary transition-colors"
            >
              {CONTACT_INFO.phone}
            </Link>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-sm">
            <Image 
              src="/assets/footer/msg.svg" 
              alt="email" 
              width={24} 
              height={24} 
            />
            <Link 
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:underline hover:text-primary transition-colors"
            >
              {CONTACT_INFO.email}
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3">Join Us</h3>
          <div className="flex gap-3 text-primary text-lg justify-center sm:justify-start">
            <Link 
              href="https://www.facebook.com/romecode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Image 
                src="/assets/footer/facebook.svg" 
                alt="facebook" 
                width={24} 
                height={24} 
              />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/romecode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Image 
                src="/assets/footer/linkdin.svg" 
                alt="linkedin" 
                width={24} 
                height={24} 
              />
            </Link>
            <Link 
              href="https://www.instagram.com/romecode_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Image 
                src="/assets/footer/instagram.svg" 
                alt="instagram" 
                width={24} 
                height={24} 
              />
            </Link>
            <Link 
              href="https://twitter.com/romecode" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <Image 
                src="/assets/footer/twitter.svg" 
                alt="twitter" 
                width={24} 
                height={24} 
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-10 w-full max-w-3xl shadow-2xl relative border border-gray-200">
            <button 
              onClick={() => setOpenTerms(false)} 
              className="absolute top-4 right-6 text-gray-500 hover:text-black text-3xl font-bold"
              aria-label="Close terms modal"
            >
              &times;
            </button>
            <div className="max-w-3xl mx-auto px-2 py-2 overflow-y-auto max-h-[80vh]">
              <h1 className="text-3xl font-extrabold mb-4 text-center text-titleBlack">Terms of Service</h1>
              <p className="text-base text-gray-500 mb-8 text-center">Effective Date: July 16, 2023</p>
              <section className="space-y-10">
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">1. Acceptance of Terms</h2>
                  <p className="text-base text-gray-700">By using this website or engaging with RomeCode, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, please do not use our site or services.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">2. Services</h2>
                  <p className="text-base text-gray-700">RomeCode offers professional services including, but not limited to: cloud infrastructure consulting, on-premises systems support, application and website development, cybersecurity and data protection, and backup & disaster recovery planning. All services are subject to separate agreements or contracts where scope and pricing are defined.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">3. Intellectual Property</h2>
                  <p className="text-base text-gray-700">All content, branding, code, and design on this website are the property of RomeCode unless otherwise stated. You may not reproduce or use any materials without explicit written permission.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">4. Third-Party Links</h2>
                  <p className="text-base text-gray-700">This website may include links to external websites or tools. RomeCode is not responsible for the content or privacy practices of those third-party sites.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">5. Confidentiality</h2>
                  <p className="text-base text-gray-700">Any project information, credentials, code, or business details exchanged between RomeCode and clients are considered confidential unless agreed otherwise in writing.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">6. Disclaimers</h2>
                  <p className="text-base text-gray-700">RomeCode provides services and content on an "as-is" basis. While we strive for reliability, we make no guarantees regarding website uptime, service performance, or fitness for any particular purpose.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">7. Limitation of Liability</h2>
                  <p className="text-base text-gray-700">RomeCode shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our site or services, to the extent permitted by law.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">8. Changes to Terms</h2>
                  <p className="text-base text-gray-700">RomeCode reserves the right to modify these Terms at any time. Continued use of our site or services indicates acceptance of any updated terms.</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-titleBlack">9. Contact</h2>
                  <p className="text-base text-gray-700">If you have questions about these Terms, reach out to us:</p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Email: <Link href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline">{CONTACT_INFO.email}</Link></li>
                    <li>Website: <Link href="https://www.romecode.com" className="text-blue-600 hover:underline">www.romecode.com</Link></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Line */}
      <div className="mt-10 flex flex-col gap-4">
        <div className="h-[1px] w-full bg-[#F5ECEC]"></div>
        <div className="text-center text-sm text-[#3C4566]">
          © 2021 RomeCode. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
