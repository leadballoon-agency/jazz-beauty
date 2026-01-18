'use client'

import { useEffect, useRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      // Explicitly play video on mobile (user-initiated action)
      if (videoRef.current) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log('Video autoplay prevented:', error)
          })
        }
      }
    } else {
      document.body.style.overflow = 'unset'
    }

    // Close on ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Video Container - Landscape orientation */}
      <div className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:w-[90vw] bg-black sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
          aria-label="Close video"
        >
          <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Player - PLACEHOLDER: Replace with Jazz's video URL */}
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          {/* TODO: Replace VIDEO_URL_PLACEHOLDER with Jazz's actual video */}
          {/* Example: https://storage.googleapis.com/your-bucket/jazz-co2-laser-video.mp4 */}

          {/* Placeholder State - Shows when no video URL is set */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <div className="w-24 h-24 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">Video Coming Soon</h3>
            <p className="text-white/70 text-sm sm:text-base text-center max-w-md">
              Jazz will be adding a video introduction about CO2 Laser treatments at Jazz Beauty Clinic.
            </p>
            <p className="text-primary-400 text-xs mt-4 font-mono">
              [PLACEHOLDER - Add video URL in VideoModal.tsx]
            </p>
          </div>

          {/* Uncomment below and add Jazz's video URL when ready */}
          {/*
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            playsInline
          >
            <source src="VIDEO_URL_PLACEHOLDER" type="video/mp4" />
            <p className="text-white text-center p-4">
              Your browser doesn't support video playback.
            </p>
          </video>
          */}
        </div>
      </div>
    </div>
  )
}
