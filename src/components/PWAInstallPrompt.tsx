'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show prompt after a delay (don't be too aggressive)
      setTimeout(() => {
        const hasBeenDismissed = localStorage.getItem('pwa-prompt-dismissed')
        const lastShown = localStorage.getItem('pwa-prompt-last-shown')
        const threeDaysAgo = Date.now() - (3 * 24 * 60 * 60 * 1000)
        
        if (!hasBeenDismissed && (!lastShown || parseInt(lastShown) < threeDaysAgo)) {
          setShowPrompt(true)
          localStorage.setItem('pwa-prompt-last-shown', Date.now().toString())
        }
      }, 5000) // Show after 5 seconds on page
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)
      localStorage.setItem('pwa-installed', 'true')
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        setShowPrompt(false)
        setIsInstalled(true)
        localStorage.setItem('pwa-installed', 'true')
      }
      
      setDeferredPrompt(null)
    } catch (error) {
      console.error('Error during PWA installation:', error)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-prompt-dismissed', 'true')
  }

  const handleIOSInstructions = () => {
    setShowPrompt(true)
  }

  // Don't render if already installed or no install capability
  if (isInstalled || (!deferredPrompt && !isIOS)) {
    return null
  }

  // iOS install instructions
  if (isIOS && showPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📱</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-titleBlack mb-2">
                Install RomeCode App
              </h3>
              <p className="text-sm text-desgray mb-3">
                Add to your home screen for quick access
              </p>
              <div className="text-xs text-desgray space-y-1">
                <p>1. Tap the share button <span className="inline-block w-4 h-4 text-primary">⬆️</span></p>
                <p>2. Select "Add to Home Screen"</p>
                <p>3. Tap "Add" to confirm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Standard PWA install prompt
  if (showPrompt && deferredPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-titleBlack mb-2">
                Install RomeCode App
              </h3>
              <p className="text-sm text-desgray mb-4">
                Get faster access and offline capabilities
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleInstallClick}
                  className="flex-1 bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Install
                </button>
                <button
                  onClick={handleDismiss}
                  className="px-3 py-2 text-sm text-desgray hover:text-titleBlack transition-colors"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mini floating button for iOS users (less intrusive)
  if (isIOS && !showPrompt) {
    return (
      <button
        onClick={handleIOSInstructions}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center"
        aria-label="Install app"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />
      </button>
    )
  }

  return null
}

export default PWAInstallPrompt 