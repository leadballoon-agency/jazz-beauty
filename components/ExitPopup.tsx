'use client'

import { useState, useEffect } from 'react'

interface ExitPopupProps {
  onBookingClick?: () => void
}

export default function ExitPopup({ onBookingClick }: ExitPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to top of page (exit intent)
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Add delay before enabling exit intent (don't show immediately)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Here you would typically send to your CRM/webhook
    console.log('Exit popup lead:', { email, interest: 'Skin Analysis - Endolift/Morpheus8' })

    setSubmitted(true)

    // Close after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scale-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 p-6 sm:p-8 text-white text-center">
          <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-medium mb-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
            WAIT! Before You Go...
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Free Skin Analysis
          </h2>
          <p className="text-white/90 text-sm sm:text-base">
            Discover which advanced treatment is right for you
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              {/* Treatment Options */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl mb-2">✨</div>
                  <h3 className="font-bold text-sm sm:text-base text-primary-700">Endolift</h3>
                  <p className="text-xs text-neutral-600 mt-1">Non-surgical face lifting</p>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl mb-2">💫</div>
                  <h3 className="font-bold text-sm sm:text-base text-primary-700">Morpheus8</h3>
                  <p className="text-xs text-neutral-600 mt-1">RF microneedling</p>
                </div>
              </div>

              <p className="text-sm text-neutral-600 text-center mb-5">
                Jazz also offers <strong>Endolift</strong> and <strong>Morpheus8</strong> treatments.
                Get a free skin analysis to find your perfect treatment plan!
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for a free analysis"
                    className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 text-sm sm:text-base transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Get My Free Skin Analysis
                </button>
              </form>

              <p className="text-xs text-neutral-500 text-center mt-4">
                We'll send you a personalised treatment recommendation
              </p>

              {/* Alternative CTA */}
              <div className="mt-5 pt-5 border-t border-gray-100 text-center">
                <button
                  onClick={() => {
                    handleClose()
                    onBookingClick?.()
                  }}
                  className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                >
                  Or book a consultation now →
                </button>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
              <p className="text-neutral-600 text-sm">
                Check your inbox for your personalised skin analysis. Jazz will be in touch soon!
              </p>
            </div>
          )}
        </div>

        {/* Footer badges */}
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-500">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            15+ Years Experience
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Award-Winning
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
