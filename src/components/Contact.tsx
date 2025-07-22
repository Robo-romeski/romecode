import Link from 'next/link'
import { CONTACT_METHODS, SECTION_CONTENT } from '@/constants/content'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto w-[90%] lg:w-[60%] px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-titleBlack mb-4">
            {SECTION_CONTENT.contact.title}
          </h2>
          <p className="text-lg text-desgray max-w-2xl mx-auto">
            {SECTION_CONTENT.contact.subtitle}
          </p>
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-titleBlack mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {CONTACT_METHODS.map((method, index) => (
                <ContactMethod
                  key={index}
                  icon={method.icon}
                  label={method.label}
                  value={method.value}
                  href={method.href}
                />
              ))}
            </div>
          </div>
          
          {/* CTA Card */}
          <CTACard />
        </div>
      </div>
    </section>
  )
}

// Contact Method Sub-component
interface ContactMethodProps {
  icon: string
  label: string
  value: string
  href: string
}

const ContactMethod = ({ icon, label, value, href }: ContactMethodProps) => {
  const isExternal = href.startsWith('http')
  
  return (
    <div className="flex items-center gap-4 group">
      <span className="text-primary text-xl flex-shrink-0" role="img" aria-label={label}>
        {icon}
      </span>
      <div>
        <p className="font-semibold text-titleBlack mb-1">{label}</p>
        <Link
          href={href}
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
          className="text-desgray hover:text-primary transition-colors"
        >
          {value}
        </Link>
      </div>
    </div>
  )
}

// CTA Card Sub-component
const CTACard = () => {
  const { cta } = SECTION_CONTENT.contact
  
  return (
    <div className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
      <h4 className="text-xl font-semibold text-titleBlack mb-4">
        {cta.title}
      </h4>
      <p className="text-desgray mb-6 leading-relaxed">
        {cta.description}
      </p>
      <Link
        href={cta.buttonHref}
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {cta.buttonText}
      </Link>
    </div>
  )
}

export default Contact 