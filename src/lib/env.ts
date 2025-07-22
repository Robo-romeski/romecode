import type { EnvironmentConfig } from '@/types';

// Environment variable validation and parsing
function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value || defaultValue || '';
}

function getBooleanEnvVar(key: string, defaultValue = false): boolean {
  const value = process.env[key];
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true';
}

// Environment configuration
export const env: EnvironmentConfig = {
  APP_NAME: getEnvVar('NEXT_PUBLIC_APP_NAME', 'RomeCode'),
  APP_URL: getEnvVar('NEXT_PUBLIC_APP_URL', 'https://www.romecode.com'),
  APP_DESCRIPTION: getEnvVar(
    'NEXT_PUBLIC_APP_DESCRIPTION', 
    'Your Consulting Partner for Digital Solutions'
  ),
  API_URL: getEnvVar('NEXT_PUBLIC_API_URL', 'https://api.romecode.com'),
  ENABLE_ANALYTICS: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_ANALYTICS', false),
  ENABLE_PWA: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_PWA', true),
  ENABLE_MAINTENANCE_MODE: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_MAINTENANCE_MODE', false),
};

// Server-side environment variables (sensitive)
export const serverEnv = {
  SENDGRID_API_KEY: process.env['SENDGRID_API_KEY'],
  RESEND_API_KEY: process.env['RESEND_API_KEY'],
  SMTP_HOST: process.env['SMTP_HOST'],
  SMTP_PORT: process.env['SMTP_PORT'],
  SMTP_USER: process.env['SMTP_USER'],
  SMTP_PASSWORD: process.env['SMTP_PASSWORD'],
  AWS_ACCESS_KEY_ID: process.env['AWS_ACCESS_KEY_ID'],
  AWS_SECRET_ACCESS_KEY: process.env['AWS_SECRET_ACCESS_KEY'],
  AWS_REGION: process.env['AWS_REGION'] || 'us-east-1',
  AWS_S3_BUCKET: process.env['AWS_S3_BUCKET'],
  AWS_CLOUDFRONT_DISTRIBUTION_ID: process.env['AWS_CLOUDFRONT_DISTRIBUTION_ID'],
  SENTRY_DSN: process.env['SENTRY_DSN'],
  GA_MEASUREMENT_ID: process.env['NEXT_PUBLIC_GA_MEASUREMENT_ID'],
};

// Utility functions
export const isDevelopment = process.env['NODE_ENV'] === 'development';
export const isProduction = process.env['NODE_ENV'] === 'production';
export const isTest = process.env['NODE_ENV'] === 'test';

// Validate required environment variables
export function validateEnvironment(): void {
  const requiredVars = ['NEXT_PUBLIC_APP_NAME', 'NEXT_PUBLIC_APP_URL'];
  
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Required environment variable ${varName} is not set`);
    }
  }
} 