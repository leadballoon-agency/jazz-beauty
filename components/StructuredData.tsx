export default function StructuredData() {
  // Main Organization/LocalBusiness Schema (consolidated)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://co2lasertorquay.co.uk/#business",
    "name": "Jazz Beauty Clinic",
    "alternateName": ["CO2 Laser Torquay", "Jazz Beauty Clinic Torquay", "Jazz Kaur Aesthetics"],
    "url": "https://co2lasertorquay.co.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://co2lasertorquay.co.uk/images/jazz-logo.avif",
      "width": 512,
      "height": 512
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg",
      "width": 1080,
      "height": 1350,
      "caption": "Jazz Kaur - Award-Winning Aesthetic Practitioner at Jazz Beauty Clinic Torquay"
    },
    "description": "Expert CO2 Laser skin resurfacing treatments in Torquay, Devon. Specialising in advanced fractional CO2 laser for wrinkles, acne scars, sun damage and skin rejuvenation. Level 7 qualified practitioner with 15+ years experience. Award-winning clinic.",
    "telephone": "+441803269859",
    "email": "jazzhairandbeauty@gmail.com",
    "sameAs": [
      "https://www.instagram.com/jazzhairandbeautytorquay"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Union Street",
      "addressLocality": "Torquay",
      "addressRegion": "Devon",
      "postalCode": "TQ2 5PL",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.4619,
      "longitude": -3.5253
    },
    "priceRange": "££",
    "isAccessibleForFree": false,
    "publicAccess": true,
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Torquay" },
      { "@type": "City", "name": "Paignton" },
      { "@type": "City", "name": "Newton Abbot" },
      { "@type": "City", "name": "Exeter" },
      { "@type": "City", "name": "Teignmouth" },
      { "@type": "City", "name": "Dawlish" },
      { "@type": "City", "name": "Totnes" },
      { "@type": "City", "name": "Plymouth" }
    ],
    "founder": {
      "@type": "Person",
      "@id": "https://co2lasertorquay.co.uk/#jazzkaur",
      "name": "Jazz Kaur",
      "jobTitle": "Award-Winning Aesthetic Practitioner",
      "description": "Level 7 qualified aesthetic practitioner and multi-award winner specialising in CO2 Laser skin resurfacing with 15+ years experience. Best Beauty Clinic South West 2025.",
      "image": "https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg",
      "knowsAbout": ["CO2 Laser Treatment", "Skin Resurfacing", "Fractional Laser", "Anti-Aging Treatment", "Aesthetic Medicine"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah" },
        "datePublished": "2025-01-10",
        "reviewBody": "Jazz was absolutely fantastic from start to finish. She explained the CO2 laser treatment thoroughly and made me feel completely at ease. My skin texture has improved dramatically!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jennifer" },
        "datePublished": "2025-01-05",
        "reviewBody": "I was nervous about having CO2 laser but Jazz's professionalism and warm manner put me at ease immediately. The results have been incredible - my sun damage has reduced significantly.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michelle" },
        "datePublished": "2024-12-20",
        "reviewBody": "Such a lovely experience at Jazz Beauty Clinic. Jazz is incredibly knowledgeable and takes the time to understand exactly what you're hoping to achieve. My skin looks years younger!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Skin Resurfacing Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://co2lasertorquay.co.uk/#targeted-co2",
            "name": "Targeted CO2 Laser",
            "description": "Focused CO2 laser treatment for specific areas like eyes, mouth or forehead. 20-30 minute session with excellent results.",
            "provider": { "@id": "https://co2lasertorquay.co.uk/#business" }
          },
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": "https://co2lasertorquay.co.uk/#full-face-co2",
            "name": "Full Face CO2 Laser",
            "description": "Complete facial skin resurfacing with fractional CO2 laser. 45-60 minute comprehensive treatment for wrinkles, acne scars and sun damage.",
            "provider": { "@id": "https://co2lasertorquay.co.uk/#business" }
          },
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://co2lasertorquay.co.uk/#website",
    "name": "Jazz Beauty Clinic - CO2 Laser Torquay",
    "alternateName": "CO2 Laser Torquay",
    "url": "https://co2lasertorquay.co.uk",
    "description": "Expert CO2 Laser skin resurfacing treatments in Torquay, Devon. Transform your skin with advanced fractional CO2 laser technology at our award-winning clinic.",
    "publisher": { "@id": "https://co2lasertorquay.co.uk/#business" },
    "inLanguage": "en-GB"
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://co2lasertorquay.co.uk/#webpage",
    "url": "https://co2lasertorquay.co.uk",
    "name": "CO2 Laser Torquay | Skin Resurfacing | Jazz Beauty Clinic Devon",
    "description": "Experience CO2 Laser skin resurfacing at Jazz Beauty Clinic in Torquay, Devon. Advanced fractional laser technology for wrinkles, acne scars, sun damage. 15+ years experience. Award-winning practitioner.",
    "isPartOf": { "@id": "https://co2lasertorquay.co.uk/#website" },
    "about": { "@id": "https://co2lasertorquay.co.uk/#business" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg"
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-GB"
  }

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CO2 Laser skin resurfacing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CO2 Laser skin resurfacing is an advanced treatment that uses fractional carbon dioxide laser technology to precisely remove damaged outer skin layers while stimulating collagen production in the deeper layers. It's highly effective for treating wrinkles, acne scars, sun damage, pigmentation, and improving overall skin texture and tone."
        }
      },
      {
        "@type": "Question",
        "name": "Is CO2 Laser treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Before your treatment, we apply a topical numbing cream to ensure your comfort. During the procedure, you may feel a warm sensation and some mild discomfort, often described as a rubber band snapping against the skin. Most patients find the treatment very tolerable, and any discomfort subsides quickly after the session."
        }
      },
      {
        "@type": "Question",
        "name": "How long do CO2 Laser results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CO2 Laser results are long-lasting, typically 1-3 years or more depending on your skin condition and lifestyle. The treatment stimulates natural collagen production which continues for 3-6 months after your session. With proper skincare and sun protection, you can maintain your results even longer."
        }
      },
      {
        "@type": "Question",
        "name": "What is the downtime for CO2 Laser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CO2 Laser does require some downtime for healing. Expect redness and swelling for 3-7 days, with skin peeling and flaking as it renews over 5-10 days. Most patients can return to normal activities within 7-10 days. Full results are visible at 3-6 months as collagen continues to build."
        }
      },
      {
        "@type": "Question",
        "name": "How many CO2 Laser treatments will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many patients see significant improvement from just one CO2 Laser treatment. However, for deeper concerns like severe acne scarring or significant sun damage, 2-3 sessions spaced several months apart may be recommended. Jazz will create a personalised treatment plan during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see results from CO2 Laser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial improvements are visible once the skin has healed (7-10 days), but the best results develop over 3-6 months as new collagen forms. Your skin will continue to improve and tighten during this time, with peak results around 3-6 months post-treatment."
        }
      }
    ]
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://co2lasertorquay.co.uk"
      }
    ]
  }

  // Video Schema for testimonial
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "CO2 Laser Skin Resurfacing - Jazz Beauty Clinic Torquay",
    "description": "Jazz Kaur discusses CO2 Laser skin resurfacing treatments at Jazz Beauty Clinic in Torquay, Devon",
    "thumbnailUrl": "https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg",
    "uploadDate": "2025-01-14",
    "duration": "PT2M",
    "publisher": { "@id": "https://co2lasertorquay.co.uk/#business" }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
    </>
  )
}
