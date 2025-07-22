import { WHY_CHOOSE_US_ITEMS, SECTION_CONTENT } from '@/constants/content'

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto w-[90%] lg:w-[60%] px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-titleBlack mb-4">
            {SECTION_CONTENT.whyChooseUs.title}
          </h2>
          <p className="text-lg text-desgray max-w-2xl mx-auto">
            {SECTION_CONTENT.whyChooseUs.subtitle}
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Feature Card Sub-component
interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="text-center p-6 group hover:transform hover:scale-105 transition-transform duration-200">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <span className="text-primary text-2xl" role="img" aria-label={title}>
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-titleBlack mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-desgray leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default WhyChooseUs 