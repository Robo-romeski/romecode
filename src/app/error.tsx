'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <Image
            src="/romcode.png"
            alt="RomeCode"
            width={120}
            height={40}
            className="mx-auto"
            priority
          />
        </div>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-titleBlack mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-desgray">
            We encountered an unexpected error. Please try again or contact us if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 border border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="mailto:info@romecode.com"
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {process.env['NODE_ENV'] === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-4 rounded overflow-auto text-red-600">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
} 