import type { WhyChooseUsItem, ExpertiseItem } from '@/types'

// Why Choose Us Data
export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    title: 'Speed & Efficiency',
    description: 'Rapid deployment and optimization of your digital infrastructure.',
    icon: '🚀'
  },
  {
    title: 'Security First',
    description: 'Comprehensive security measures built into every solution.',
    icon: '🔒'
  },
  {
    title: 'Scalable Solutions',
    description: 'Architecture that grows with your business needs.',
    icon: '⚡'
  }
]

// Services Data
export const SERVICES_ITEMS: ExpertiseItem[] = [
  {
    title: 'Cloud Consulting',
    description: 'Strategic cloud migration, architecture design, and optimization services.',
    icon: '☁️',
    details: '• AWS, Azure, GCP expertise\n• Migration planning & execution\n• Cost optimization'
  },
  {
    title: 'App Development',
    description: 'Custom application development from concept to deployment.',
    icon: '💻',
    details: '• Web & mobile applications\n• API development\n• System integration'
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security assessment and implementation services.',
    icon: '🔐',
    details: '• Security audits\n• Compliance frameworks\n• Incident response'
  },
  {
    title: 'Data Protection',
    description: 'Backup, disaster recovery, and data governance solutions.',
    icon: '🛡️',
    details: '• Automated backups\n• Disaster recovery planning\n• Data compliance'
  }
]

// Contact Information Data
export const CONTACT_METHODS = [
  {
    icon: '📞',
    label: 'Phone',
    value: '(347) 788-8436',
    href: 'tel:13477888436'
  },
  {
    icon: '✉️',
    label: 'Email', 
    value: 'info@romecode.com',
    href: 'mailto:info@romecode.com'
  },
  {
    icon: '📅',
    label: 'Schedule a Call',
    value: 'Book a 30-minute consultation',
    href: 'https://calendly.com/romecode-info/30min'
  }
]

// Section Metadata
export const SECTION_CONTENT = {
  whyChooseUs: {
    title: 'Why Choose RomeCode?',
    subtitle: 'We combine deep technical expertise with business acumen to deliver solutions that drive results.'
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive digital solutions tailored to your business requirements.'
  },
  contact: {
    title: 'Ready to Get Started?',
    subtitle: "Let's discuss how we can help transform your digital infrastructure.",
    cta: {
      title: 'Quick Response Guarantee',
      description: 'We respond to all inquiries within 24 hours and provide free initial consultations to understand your specific needs.',
      buttonText: 'Send us a Message',
      buttonHref: 'mailto:info@romecode.com'
    }
  }
} 