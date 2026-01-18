'use client'

import { useEffect } from 'react'
import { trackBookingModalOpen } from './FacebookPixel'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  assessmentData?: any
}

export default function BookingModal({ isOpen, onClose, assessmentData }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      trackBookingModalOpen()

      // Load GHL calendar script
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://link.leadballoon.co.uk/js/form_embed.js'
      document.body.appendChild(script)

      return () => {
        try {
          document.body.removeChild(script)
        } catch (e) {
          // Script already removed
        }
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Mobile slides up from bottom, desktop centered */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-5 sm:p-6 lg:p-8 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur rounded-full mb-2 sm:mb-3 lg:mb-4">
              <span className="text-2xl sm:text-3xl">✨</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Book Your Treatment</h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Select your preferred date and time
            </p>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {/* GHL Calendar */}
            <div className="space-y-4 animate-fade-in">
              <iframe
                src="https://link.leadballoon.co.uk/widget/booking/TJOFTSvGpU6iWzf8staO"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                scrolling="no"
                id="TJOFTSvGpU6iWzf8staO_1766591746692"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
