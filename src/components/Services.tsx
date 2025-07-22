import { SERVICES_ITEMS, SECTION_CONTENT } from '@/constants/content'

const Services = () => {
  return (
    <section id="our-services" className="py-20 bg-gray-50">
      <div className="max-w-[1300px] mx-auto w-[90%] lg:w-[60%] px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-titleBlack mb-4">
            {SECTION_CONTENT.services.title}
          </h2>
          <p className="text-lg text-desgray max-w-2xl mx-auto">
            {SECTION_CONTENT.services.subtitle}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_ITEMS.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              {...(service.details && { details: service.details })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Service Card Sub-component
interface ServiceCardProps {
  title: string
  description: string
  icon: string
  details?: string | undefined
}

const ServiceCard = ({ title, description, icon, details }: ServiceCardProps) => {
  // Parse details string into list items
  const detailsList = details?.split('\n').filter(item => item.trim()) || []

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <span className="text-primary text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-titleBlack mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </div>
      
      <p className="text-desgray mb-4 leading-relaxed">
        {description}
      </p>
      
      {detailsList.length > 0 && (
        <ul className="text-sm text-desgray space-y-2">
          {detailsList.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 flex-shrink-0">•</span>
              <span>{detail.replace('• ', '')}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Services 