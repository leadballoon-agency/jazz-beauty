import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'
import ConvertBox from '@/components/ConvertBox'

const inter = Inter({ subsets: ['latin'] })

// Jazz Kaur's professional photo for social sharing
const jazzOgImage = 'https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg'

export const metadata: Metadata = {
  title: 'CO2 Laser Torquay | Skin Resurfacing | Jazz Beauty Clinic Devon',
  description: 'Advanced CO2 Laser skin resurfacing at Jazz Beauty Clinic in Torquay, Devon. Treat wrinkles, acne scars, sun damage & pigmentation. Award-winning clinic with 15+ years experience. Level 7 qualified practitioner.',
  keywords: 'CO2 laser Torquay, CO2 laser Devon, skin resurfacing Torquay, laser treatment Devon, acne scar treatment, wrinkle removal Torquay, sun damage treatment, Jazz Beauty Clinic, laser skin rejuvenation, fractional CO2 laser, skin tightening Devon, pigmentation treatment, age spots removal, collagen stimulation, Jazz Kaur, aesthetic practitioner Torquay, CO2 laser English Riviera, skin clinic Paignton, laser treatment Newton Abbot',
  authors: [{ name: 'Jazz Kaur - Jazz Beauty Clinic' }],
  creator: 'Jazz Beauty Clinic',
  publisher: 'Jazz Beauty Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://co2lasertorquay.co.uk'),
  alternates: {
    canonical: 'https://co2lasertorquay.co.uk',
  },
  openGraph: {
    title: 'CO2 Laser Torquay | Award-Winning Skin Resurfacing | Jazz Beauty Clinic',
    description: 'Transform your skin with advanced CO2 Laser at Jazz Beauty Clinic, Torquay. Treat wrinkles, acne scars, sun damage & pigmentation. 15+ years experience. Level 7 qualified. Book your consultation today!',
    url: 'https://co2lasertorquay.co.uk',
    siteName: 'Jazz Beauty Clinic - CO2 Laser Torquay',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: jazzOgImage,
        width: 1131,
        height: 1517,
        alt: 'Jazz Kaur - Award-Winning Aesthetic Practitioner specialising in CO2 Laser Skin Resurfacing at Jazz Beauty Clinic Torquay, Devon',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO2 Laser Torquay | Jazz Beauty Clinic',
    description: 'Advanced CO2 Laser skin resurfacing at Jazz Beauty Clinic, Torquay. Treat wrinkles, acne scars, sun damage. Award-winning clinic, 15+ years experience. Book now!',
    images: [jazzOgImage],
    creator: '@jazzhairandbeautytorquay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YmpmBBiZS28x8KuDagK4INoc8VVsRiyGDCaJmZPDnxQ',
  },
  category: 'Health & Beauty',
  other: {
    'geo.region': 'GB-DEV',
    'geo.placename': 'Torquay, Devon',
    'geo.position': '50.4619;-3.5253',
    'ICBM': '50.4619, -3.5253',
    'og:locale:alternate': 'en_GB',
    'business:contact_data:street_address': '4 Union Street',
    'business:contact_data:locality': 'Torquay',
    'business:contact_data:region': 'Devon',
    'business:contact_data:postal_code': 'TQ2 5PL',
    'business:contact_data:country_name': 'United Kingdom',
    'business:contact_data:phone_number': '+441803269859',
    'business:contact_data:email': 'jazzhairandbeauty@gmail.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
          <ConvertBox />
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
