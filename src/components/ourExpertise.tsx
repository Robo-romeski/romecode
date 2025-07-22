'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ExpertiseItem {
  id: number
  title: string
  description: string
  image: string
  features: string[]
  caseStudy?: string
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 1,
    title: 'Cloud Architecture & Migration',
    description: 'Seamless cloud transformation with zero downtime and optimized costs.',
    image: '/images/cloud-architecture.jpg',
    features: [
      'AWS, Azure, GCP expertise',
      'Multi-cloud strategies',
      'Cost optimization',
      'Security compliance',
      'Performance monitoring'
    ],
    caseStudy: 'Migrated enterprise systems saving 40% on infrastructure costs'
  },
  {
    id: 2,
    title: 'Custom Application Development',
    description: 'Modern web and mobile applications built for scale and performance.',
    image: '/images/app-development.jpg',
    features: [
      'React, Next.js, React Native',
      'Node.js, Python, .NET',
      'Database design',
      'API development',
      'Real-time features'
    ],
    caseStudy: 'Built scalable e-commerce platform handling 10M+ transactions'
  },
  {
    id: 3,
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions protecting your digital assets.',
    image: '/images/cybersecurity.jpg',
    features: [
      'Security audits',
      'Penetration testing',
      'SOC 2, HIPAA compliance',
      'Incident response',
      'Security training'
    ],
    caseStudy: 'Achieved SOC 2 Type II compliance for healthcare startup'
  },
  {
    id: 4,
    title: 'DevOps & Infrastructure',
    description: 'Automated CI/CD pipelines and infrastructure as code solutions.',
    image: '/images/devops.jpg',
    features: [
      'Docker & Kubernetes',
      'CI/CD automation',
      'Infrastructure as Code',
      'Monitoring & alerting',
      'Backup & disaster recovery'
    ],
    caseStudy: 'Reduced deployment time from hours to minutes with 99.9% uptime'
  }
]

const OurExpertise = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % EXPERTISE_ITEMS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % EXPERTISE_ITEMS.length)
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + EXPERTISE_ITEMS.length) % EXPERTISE_ITEMS.length)
    setIsAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoplay(false)
  }

  const currentItem = EXPERTISE_ITEMS[currentSlide]

  return (
    <section id="our-expertise" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1300px] mx-auto w-[90%] lg:w-[60%] px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-titleBlack mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-desgray max-w-2xl mx-auto">
            Deep technical knowledge combined with proven methodologies to deliver exceptional results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Carousel Content */}
          <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-titleBlack mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-lg text-desgray mb-6 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-titleBlack mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {currentItem.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-desgray">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study */}
              {currentItem.caseStudy && (
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="font-medium text-titleBlack mb-1">Success Story:</p>
                  <p className="text-desgray text-sm italic">"{currentItem.caseStudy}"</p>
                </div>
              )}
            </div>

            {/* Image Side */}
            <div className="relative bg-gray-100 lg:min-h-[500px] order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">
                      {currentSlide === 0 && '☁️'}
                      {currentSlide === 1 && '💻'}
                      {currentSlide === 2 && '🔒'}
                      {currentSlide === 3 && '⚙️'}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-titleBlack">
                    {currentItem.title.split(' ')[0]} {currentItem.title.split(' ')[1]}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous expertise"
          >
            <ChevronLeftIcon className="w-5 h-5 text-titleBlack" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next expertise"
          >
            <ChevronRightIcon className="w-5 h-5 text-titleBlack" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {EXPERTISE_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-primary scale-110'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className="absolute top-4 right-4 text-sm text-desgray hover:text-titleBlack transition-colors"
            aria-label={isAutoplay ? 'Pause autoplay' : 'Resume autoplay'}
          >
            {isAutoplay ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-primary h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / EXPERTISE_ITEMS.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}

export default OurExpertise