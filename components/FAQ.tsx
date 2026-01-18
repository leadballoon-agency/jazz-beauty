'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is CO2 Laser skin resurfacing?',
    answer: 'CO2 Laser skin resurfacing is an advanced treatment that uses fractional carbon dioxide laser technology to precisely remove damaged outer skin layers while stimulating collagen production in the deeper layers. It\'s highly effective for treating wrinkles, acne scars, sun damage, pigmentation, and improving overall skin texture and tone.'
  },
  {
    question: 'Is CO2 Laser treatment painful?',
    answer: 'Before your treatment, we apply a topical numbing cream to ensure your comfort. During the procedure, you may feel a warm sensation and some mild discomfort, often described as a rubber band snapping against the skin. Most patients find the treatment very tolerable, and any discomfort subsides quickly after the session.'
  },
  {
    question: 'How long do CO2 Laser results last?',
    answer: 'CO2 Laser results are long-lasting, typically 1-3 years or more depending on your skin condition and lifestyle. The treatment stimulates natural collagen production which continues for 3-6 months after your session. With proper skincare and sun protection, you can maintain your results even longer.'
  },
  {
    question: 'What is the downtime for CO2 Laser?',
    answer: 'CO2 Laser does require some downtime for healing. Expect redness and swelling for 3-7 days, with skin peeling and flaking as it renews over 5-10 days. Most patients can return to normal activities within 7-10 days. Full results are visible at 3-6 months as collagen continues to build.'
  },
  {
    question: 'How many treatments will I need?',
    answer: 'Many patients see significant improvement from just one CO2 Laser treatment. However, for deeper concerns like severe acne scarring or significant sun damage, 2-3 sessions spaced several months apart may be recommended. Jazz will create a personalised treatment plan during your consultation.'
  },
  {
    question: 'Who is an ideal candidate for CO2 Laser?',
    answer: 'CO2 Laser is ideal for those wanting to address wrinkles, fine lines, acne scars, sun damage, age spots, uneven skin texture, enlarged pores, or general skin laxity. It\'s suitable for most skin types, though we assess each patient individually during consultation to ensure the best results.'
  },
  {
    question: 'What areas can be treated?',
    answer: 'CO2 Laser can treat the full face, neck, décolletage (chest), and hands. It\'s also excellent for targeting specific problem areas like around the eyes (crow\'s feet), mouth (smoker\'s lines), and forehead. We can customise the treatment to focus on your areas of concern.'
  }
]

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">FAQ</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 sm:mt-3">
            Your Questions
            <span className="block gradient-text">Answered</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base pr-3 sm:pr-4">{faq.question}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
            Still have questions? Jazz is here to help.
          </p>
          <button
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
