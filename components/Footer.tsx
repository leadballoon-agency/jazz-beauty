export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-primary-300">
              Jazz Beauty Clinic
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              CO2 Laser skin resurfacing in Torquay, Devon
            </p>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              Award-winning clinic with 15+ years experience
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-800">
              <a
                href="https://www.instagram.com/jazzhairandbeautytorquay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-300 hover:text-primary-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @jazzhairandbeautytorquay
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-400">
              <li>
                <span className="text-neutral-500">Phone: </span>
                <a href="tel:+441803269859" className="text-neutral-300 hover:text-white transition-colors">01803 269859</a>
              </li>
              <li>
                <span className="text-neutral-500">Email: </span>
                <a href="mailto:jazzhairandbeauty@gmail.com" className="text-neutral-300 hover:text-white transition-colors">jazzhairandbeauty@gmail.com</a>
              </li>
              <li className="mt-3 pt-3 border-t border-neutral-800 leading-relaxed">4 Union Street</li>
              <li>Torquay</li>
              <li>TQ2 5PL</li>
              <li className="mt-2 text-xs text-neutral-500">Devon</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Jazz</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://www.instagram.com/jazzhairandbeautytorquay" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p className="text-sm sm:text-base mb-2">&copy; 2025 Jazz Beauty Clinic & Training Academy. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-neutral-500 mb-3">
            <a href="/privacy-policy" className="hover:text-white underline transition-colors">Privacy Policy</a>
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            This site may use Meta tracking technologies to improve user experience and analyze site performance.
          </p>
        </div>
      </div>
    </footer>
  )
}
