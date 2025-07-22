// RomeCode Type Definitions

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Environment Variables
export interface EnvironmentConfig {
  APP_NAME: string;
  APP_URL: string;
  APP_DESCRIPTION: string;
  API_URL: string;
  ENABLE_ANALYTICS: boolean;
  ENABLE_PWA: boolean;
  ENABLE_MAINTENANCE_MODE: boolean;
}

// PWA Types
export interface PWAInstallPrompt extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
} 