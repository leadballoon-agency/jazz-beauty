export default function StructuredData() {
  const baseUrl = "https://co2lasertorquay.co.uk"
  const jazzImage = "https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg"

  // Main Organization/LocalBusiness Schema (consolidated)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "MedicalBusiness", "LocalBusiness"],
    "@id": `${baseUrl}/#business`,
    "name": "Jazz Beauty Clinic",
    "alternateName": ["CO2 Laser Torquay", "Jazz Beauty Clinic Torquay", "Jazz Kaur Aesthetics", "Jazz Hair and Beauty"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/images/logo.png`,
      "width": 512,
      "height": 512
    },
    "image": [
      {
        "@type": "ImageObject",
        "url": jazzImage,
        "width": 1131,
        "height": 1517,
        "caption": "Jazz Kaur - Award-Winning Aesthetic Practitioner at Jazz Beauty Clinic Torquay"
      },
      {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/co2laser-skin-rejeuvenation.jpeg`,
        "width": 1200,
        "height": 630,
        "caption": "CO2 Laser Skin Rejuvenation Before and After Results"
      }
    ],
    "description": "Expert CO2 Laser skin resurfacing treatments in Torquay, Devon. Specialising in advanced fractional CO2 laser for wrinkles, acne scars, sun damage and skin rejuvenation. Level 7 qualified practitioner with 15+ years experience. Award-winning clinic.",
    "slogan": "Transform Your Skin with Advanced CO2 Laser Technology",
    "telephone": "+441803269859",
    "email": "jazzhairandbeauty@gmail.com",
    "sameAs": [
      "https://www.instagram.com/jazzhairandbeautytorquay",
      "https://www.facebook.com/jazzhairandbeautytorquay"
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
    "hasMap": "https://maps.google.com/?q=4+Union+Street,+Torquay,+Devon+TQ2+5PL",
    "priceRange": "££-£££",
    "isAccessibleForFree": false,
    "publicAccess": true,
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
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
      { "@type": "City", "name": "Torquay", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Paignton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Newton Abbot", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Exeter", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Teignmouth", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Dawlish", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Totnes", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Plymouth", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "City", "name": "Brixham", "containedInPlace": { "@type": "AdministrativeArea", "name": "Devon" } },
      { "@type": "AdministrativeArea", "name": "South Devon" },
      { "@type": "AdministrativeArea", "name": "English Riviera" }
    ],
    "founder": { "@id": `${baseUrl}/#jazzkaur` },
    "employee": { "@id": `${baseUrl}/#jazzkaur` },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "datePublished": "2025-01-10",
        "reviewBody": "Jazz was absolutely fantastic from start to finish. She explained the CO2 laser treatment thoroughly and made me feel completely at ease. My skin texture has improved dramatically - the acne scars I've had for years are finally fading!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jennifer K." },
        "datePublished": "2025-01-05",
        "reviewBody": "I was nervous about having CO2 laser but Jazz's professionalism and warm manner put me at ease immediately. The results have been incredible - my sun damage has reduced significantly and my skin looks 10 years younger.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michelle T." },
        "datePublished": "2024-12-20",
        "reviewBody": "Such a lovely experience at Jazz Beauty Clinic. Jazz is incredibly knowledgeable and takes the time to understand exactly what you're hoping to achieve. My fine lines around my eyes have practically disappeared!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Emma R." },
        "datePublished": "2024-12-15",
        "reviewBody": "Best decision I ever made! Jazz is a true professional and the CO2 laser treatment has transformed my skin. The pigmentation I've struggled with for years is almost completely gone. Highly recommend!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Skin Resurfacing Treatments",
      "itemListElement": [
        { "@id": `${baseUrl}/#service-fullface` },
        { "@id": `${baseUrl}/#service-targeted` },
        { "@id": `${baseUrl}/#service-acne` },
        { "@id": `${baseUrl}/#service-pigmentation` }
      ]
    },
    "knowsAbout": [
      "CO2 Laser Skin Resurfacing",
      "Fractional CO2 Laser Treatment",
      "Acne Scar Treatment",
      "Wrinkle Reduction",
      "Sun Damage Treatment",
      "Pigmentation Correction",
      "Skin Rejuvenation",
      "Collagen Stimulation",
      "Anti-Aging Treatments",
      "Skin Tightening"
    ],
    "award": [
      "Best Beauty Clinic South West 2025",
      "Award-Winning Aesthetics Practitioner"
    ]
  }

  // Person Schema for Jazz Kaur
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#jazzkaur`,
    "name": "Jazz Kaur",
    "givenName": "Jazz",
    "familyName": "Kaur",
    "jobTitle": "Award-Winning Aesthetic Practitioner & Clinic Owner",
    "description": "Level 7 qualified aesthetic practitioner and multi-award winner specialising in CO2 Laser skin resurfacing with 15+ years experience. Founder of Jazz Beauty Clinic in Torquay, Devon. Known for exceptional patient care and outstanding results.",
    "image": {
      "@type": "ImageObject",
      "url": jazzImage,
      "width": 1131,
      "height": 1517
    },
    "url": baseUrl,
    "telephone": "+441803269859",
    "email": "jazzhairandbeauty@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4 Union Street",
      "addressLocality": "Torquay",
      "addressRegion": "Devon",
      "postalCode": "TQ2 5PL",
      "addressCountry": "GB"
    },
    "worksFor": { "@id": `${baseUrl}/#business` },
    "knowsAbout": [
      "CO2 Laser Treatment",
      "Skin Resurfacing",
      "Fractional Laser Technology",
      "Anti-Aging Treatments",
      "Aesthetic Medicine",
      "Acne Scar Treatment",
      "Pigmentation Treatment",
      "Sun Damage Correction"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Level 7 Aesthetic Practitioner Qualification",
        "credentialCategory": "Professional Certification"
      }
    ],
    "award": [
      "Best Beauty Clinic South West 2025",
      "Award-Winning Aesthetics Practitioner"
    ],
    "sameAs": [
      "https://www.instagram.com/jazzhairandbeautytorquay"
    ]
  }

  // Service Schema - Full Face CO2 Laser
  const fullFaceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${baseUrl}/#service-fullface`,
    "name": "Full Face CO2 Laser Skin Resurfacing",
    "alternateName": ["Full Face Laser Resurfacing", "Complete Facial CO2 Treatment"],
    "description": "Complete facial skin resurfacing with advanced fractional CO2 laser technology. Comprehensive 45-60 minute treatment targeting wrinkles, fine lines, acne scars, sun damage, and uneven skin texture. Stimulates natural collagen production for long-lasting results.",
    "procedureType": "Cosmetic",
    "bodyLocation": "Face",
    "preparation": "Consultation required. Avoid sun exposure and retinoids before treatment. Topical numbing cream applied.",
    "followup": "Results visible in 7-10 days, optimal results at 3-6 months. Sun protection essential during healing.",
    "howPerformed": "Fractional CO2 laser creates micro-channels in the skin, triggering the body's natural healing response and collagen production.",
    "status": "Available",
    "image": `${baseUrl}/images/co2laser-skin-rejeuvenation.jpeg`,
    "provider": { "@id": `${baseUrl}/#business` },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31",
      "url": baseUrl
    }
  }

  // Service Schema - Targeted CO2 Laser
  const targetedServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${baseUrl}/#service-targeted`,
    "name": "Targeted CO2 Laser Treatment",
    "alternateName": ["Eye Area Laser", "Mouth Area Laser", "Forehead Laser Treatment"],
    "description": "Focused CO2 laser treatment for specific problem areas including crow's feet, upper lip lines, forehead wrinkles, and neck. 20-30 minute precision treatment with excellent results for targeted concerns.",
    "procedureType": "Cosmetic",
    "bodyLocation": ["Eye area", "Mouth area", "Forehead", "Neck"],
    "preparation": "Consultation required. Topical numbing cream applied to treatment area.",
    "followup": "Shorter recovery time than full face. Results visible within 2 weeks.",
    "howPerformed": "Precision fractional CO2 laser targets specific areas of concern with controlled depth and intensity.",
    "status": "Available",
    "provider": { "@id": `${baseUrl}/#business` },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": baseUrl
    }
  }

  // Service Schema - Acne Scar Treatment
  const acneScarServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${baseUrl}/#service-acne`,
    "name": "CO2 Laser Acne Scar Treatment",
    "alternateName": ["Acne Scar Resurfacing", "Laser Scar Removal"],
    "description": "Advanced CO2 laser treatment specifically designed to dramatically reduce the appearance of acne scarring. Stimulates collagen remodeling to smooth pitted scars, ice pick scars, and rolling scars.",
    "procedureType": "Cosmetic",
    "bodyLocation": "Face",
    "indication": "Acne scarring, pitted scars, ice pick scars, rolling scars, boxcar scars",
    "preparation": "Consultation to assess scar type and depth. Treatment plan customised to your specific scarring.",
    "followup": "Multiple sessions may be recommended for severe scarring. Results continue to improve for 6 months.",
    "status": "Available",
    "image": `${baseUrl}/images/Acne Scarring Before and After.jpeg`,
    "provider": { "@id": `${baseUrl}/#business` },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": baseUrl
    }
  }

  // Service Schema - Pigmentation Treatment
  const pigmentationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${baseUrl}/#service-pigmentation`,
    "name": "CO2 Laser Pigmentation Treatment",
    "alternateName": ["Sun Damage Treatment", "Age Spot Removal", "Hyperpigmentation Treatment"],
    "description": "Effective CO2 laser treatment for pigmentation concerns including sun damage, age spots, melasma, and uneven skin tone. Removes damaged surface skin while stimulating new, healthy skin cell production.",
    "procedureType": "Cosmetic",
    "bodyLocation": ["Face", "Hands", "Chest", "Neck"],
    "indication": "Sun damage, age spots, liver spots, melasma, hyperpigmentation, uneven skin tone",
    "preparation": "Consultation required. Avoid sun exposure before treatment.",
    "followup": "Sun protection essential. Pigmented areas flake off during healing to reveal clearer skin.",
    "status": "Available",
    "image": `${baseUrl}/images/pigmentation.png`,
    "provider": { "@id": `${baseUrl}/#business` },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": baseUrl
    }
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "Jazz Beauty Clinic - CO2 Laser Torquay",
    "alternateName": ["CO2 Laser Torquay", "Jazz Beauty Clinic"],
    "url": baseUrl,
    "description": "Expert CO2 Laser skin resurfacing treatments in Torquay, Devon. Transform your skin with advanced fractional CO2 laser technology at our award-winning clinic.",
    "publisher": { "@id": `${baseUrl}/#business` },
    "inLanguage": "en-GB",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "CO2 Laser Torquay | Skin Resurfacing | Jazz Beauty Clinic Devon",
    "description": "Experience CO2 Laser skin resurfacing at Jazz Beauty Clinic in Torquay, Devon. Advanced fractional laser technology for wrinkles, acne scars, sun damage. 15+ years experience. Award-winning practitioner.",
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "about": { "@id": `${baseUrl}/#business` },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": jazzImage,
      "width": 1131,
      "height": 1517
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-GB",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".hero-description"]
    },
    "mainEntity": { "@id": `${baseUrl}/#business` }
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
          "text": "CO2 Laser skin resurfacing is an advanced treatment that uses fractional carbon dioxide laser technology to precisely remove damaged outer skin layers while stimulating collagen production in the deeper layers. It's highly effective for treating wrinkles, acne scars, sun damage, pigmentation, and improving overall skin texture and tone. At Jazz Beauty Clinic in Torquay, we use state-of-the-art CO2 laser technology for optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "Is CO2 Laser treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Before your treatment at Jazz Beauty Clinic, we apply a topical numbing cream to ensure your comfort. During the procedure, you may feel a warm sensation and some mild discomfort, often described as a rubber band snapping against the skin. Most patients find the treatment very tolerable, and any discomfort subsides quickly after the session."
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
          "text": "Many patients see significant improvement from just one CO2 Laser treatment. However, for deeper concerns like severe acne scarring or significant sun damage, 2-3 sessions spaced several months apart may be recommended. Jazz will create a personalised treatment plan during your consultation at our Torquay clinic."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see results from CO2 Laser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial improvements are visible once the skin has healed (7-10 days), but the best results develop over 3-6 months as new collagen forms. Your skin will continue to improve and tighten during this time, with peak results around 3-6 months post-treatment."
        }
      },
      {
        "@type": "Question",
        "name": "What can CO2 Laser treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CO2 Laser is highly versatile and can effectively treat: fine lines and wrinkles, acne scars (ice pick, boxcar, rolling), sun damage and age spots, uneven skin tone and texture, pigmentation and melasma, enlarged pores, skin laxity, and stretch marks. Jazz will assess your specific concerns during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Jazz Beauty Clinic located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazz Beauty Clinic is located at 4 Union Street, Torquay, Devon TQ2 5PL. We serve clients from across Devon including Paignton, Newton Abbot, Exeter, Teignmouth, and Plymouth. The clinic is easily accessible with parking available nearby."
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
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "CO2 Laser Treatments",
        "item": `${baseUrl}/#treatments`
      }
    ]
  }

  // ItemList Schema for Services
  const servicesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "CO2 Laser Treatments at Jazz Beauty Clinic",
    "description": "Complete range of CO2 laser skin resurfacing treatments available at Jazz Beauty Clinic in Torquay",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@id": `${baseUrl}/#service-fullface` }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@id": `${baseUrl}/#service-targeted` }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": { "@id": `${baseUrl}/#service-acne` }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": { "@id": `${baseUrl}/#service-pigmentation` }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullFaceServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(targetedServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acneScarServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pigmentationServiceSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
    </>
  )
}
