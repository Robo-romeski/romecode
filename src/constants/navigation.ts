import type { NavItem } from '@/types';

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Why Choose Us',
    href: '#why-choose-us',
  },
  {
    label: 'Our Services',
    href: '#our-services',
  },
  {
    label: 'Contact Us',
    href: '#contact',
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Cloud Consulting', href: '/services/cloud' },
    { label: 'App Development', href: '/services/development' },
    { label: 'Data Protection', href: '/services/security' },
    { label: 'System Architecture', href: '/services/architecture' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/gdpr' },
  ],
};

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/romecode',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/romecode',
    icon: 'twitter',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/romecode',
    icon: 'facebook',
  },
];

export const CONTACT_INFO = {
  phone: '(347) 788-8436',
  email: 'info@romecode.com',
  address: {
    street: '123 Business Ave',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
  },
}; 