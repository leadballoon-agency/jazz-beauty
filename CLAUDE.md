# CO2 Laser Torquay - Jazz Beauty Clinic

## Project Overview
Landing page for Jazz Beauty Clinic & Training Academy, featuring CO2 Laser skin resurfacing treatments in Torquay, Devon. The site is built with Next.js 15 and Tailwind CSS.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Inter (body), Playfair Display (headings)

## Key URLs
- **Production:** https://co2lasertorquay.co.uk (TBC)
- **Main Website:** https://www.jazzbeautyclinicandtrainingacademy.co.uk
- **Repository:** TBD

## Project Structure
```
app/
├── layout.tsx          # Root layout with metadata, fonts, tracking
├── page.tsx            # Home page (renders PageWrapper)
├── globals.css         # Global styles, Tailwind imports
├── privacy-policy/     # Privacy policy page
├── sitemap.ts          # Dynamic sitemap
└── robots.ts           # Robots.txt configuration

components/
├── PageWrapper.tsx     # Main page orchestrator with modal state
├── PremiumHero.tsx     # Hero section with video
├── Navigation.tsx      # Sticky nav with mobile menu
├── AssessmentTool.tsx  # Interactive treatment quiz
├── AboutSection.tsx    # Jazz's bio and qualifications
├── PremiumTreatments.tsx # Treatment cards with pricing
├── ResultsGallery.tsx  # Before/after gallery
├── Reviews.tsx         # Customer testimonials
├── ProcessSection.tsx  # Treatment process steps
├── FinanceSection.tsx  # Payment options (Klarna, PayPal Pay in 3)
├── FAQ.tsx             # Accordion FAQ
├── CTASection.tsx      # Final call-to-action
├── Footer.tsx          # Site footer
├── BookingModal.tsx    # Booking embed
├── VideoModal.tsx      # Video player
├── StructuredData.tsx  # SEO JSON-LD schemas
└── FacebookPixel.tsx   # Meta Pixel tracking
```

## Brand Information
- **Business:** Jazz Beauty Clinic & Training Academy
- **Practitioner:** Jazz Kaur
- **Qualifications:**
  - Level 7 Degree qualified
  - Teacher training qualification
  - CPD Group Accredited
  - 15+ years experience
- **Awards:**
  - Best Beauty Clinic & Training Academy - South West 2025
  - International Award Winner 2020 (India - Best Practitioner & Training)
  - Nominated for Education Excellence
- **Address:** 4 Union Street, Torquay, Devon TQ2 5PL
- **Phone:** 01803 269859
- **Email:** jazzhairandbeauty@gmail.com
- **Social Media:**
  - Instagram: @jazzhairandbeautytorquay
  - Facebook: JazzHairandBeautyinTorquay
  - TikTok: @jazzkauruk
  - Twitter: @JazzBeautyHairS

## CO2 Laser Technology
- **Treatment:** CO2 Fractional Laser Skin Resurfacing
- **Key Features:**
  - Precision laser technology targeting specific skin concerns
  - Stimulates natural collagen production
  - Removes damaged outer skin layers
  - Promotes new, healthy skin growth
  - Treats multiple concerns in one session
  - Results improve over 3-6 months as collagen rebuilds

## CO2 Laser Treatment Benefits
1. **Improves Acne Scars & Spots** - Reduces appearance of scarring
2. **Removes Wrinkles** - Smooths fine lines and deep wrinkles
3. **Uniform Skin Tone** - Evens out pigmentation
4. **Repairs Sun Damage** - Treats photodamage and age spots
5. **Skin Tightening** - Firms and tightens lax skin
6. **Reduces Pore Size** - Refines skin texture
7. **Treats Rosacea** - Reduces redness and visible blood vessels
8. **Long-Lasting Results** - Effects last 1+ years
9. **Collagen Stimulation** - Continues improving for 3 months post-treatment
10. **Targets Specific Areas** - Precision treatment of problem zones

## Ideal Candidates
- Acne scarring
- Fine lines and wrinkles
- Sun-damaged skin
- Age spots and pigmentation
- Uneven skin texture
- Enlarged pores
- Skin laxity
- Rosacea and redness

## Treatment Areas
- Full face
- Neck
- Décolletage
- Hands
- Specific problem areas (around eyes, mouth, etc.)

## Treatment Process
1. **Consultation** - Skin assessment and treatment planning
2. **Preparation** - Skin cleansing, numbing cream applied
3. **Treatment** - CO2 laser precisely targets skin (30-60 mins)
4. **Aftercare** - Healing instructions, skincare regimen
5. **Results** - Initial healing 7-10 days, continued improvement 3-6 months

## Downtime & Recovery
- Redness and swelling for 3-7 days
- Peeling/flaking as skin renews (5-10 days)
- Return to normal activities: 7-10 days
- Full results visible: 3-6 months
- Sun protection essential during healing

## Treatment Pricing
- TBD - Confirm with Jazz
- Current special offer mentioned on main site until 31st January 2026

## Opening Hours
- Monday: CLOSED
- Tuesday - Saturday: 9:30am - 5:30pm
- Sunday: CLOSED
(Later appointments available on request)

## Booking Integration
Contact via phone or social media - specific booking system TBD

## Finance Options Available
- Klarna
- PayPal Pay in 3
- Pay It Monthly

## Design Guidelines
- **Primary Color:** Adapt for CO2 Laser aesthetic (consider warm tones for skin/beauty)
- **Accent Color:** Gold/amber for highlights
- **Typography:** Mobile-first with responsive scaling
- **Touch Targets:** Minimum 44px for accessibility
- **Line Heights:** Body 1.6-1.7, Headings 1.2

## SEO Schemas to Implement
1. HealthAndBeautyBusiness (LocalBusiness)
2. WebSite
3. WebPage
4. FAQPage
5. VideoObject
6. BreadcrumbList
7. Person (Jazz Kaur)
8. Service + Offer (treatments with prices)
9. AggregateRating + Reviews

## Development Commands
```bash
npm install  # Install dependencies
npm run dev  # Start development server
npm run build # Production build
npm run start # Start production server
npm run lint  # Run ESLint
```

## Important Notes
- Always use mobile-first approach (base styles for mobile, sm/md/lg for larger)
- Keep `leading-relaxed` on body text for readability
- Use `section-padding` utility class for consistent horizontal padding
- All booking CTAs should trigger the BookingModal or link to contact
- Track key events with FacebookPixel functions

## Media Assets Needed
- Jazz Kaur professional photo (from main website)
- Before/after CO2 Laser results photos
- Treatment/clinic video content
- Award badges/logos

## Image URLs from Jazz's Website
- Award image: https://static.wixstatic.com/media/c38579_7d13f91ffbd14d2aade6abc1341a4937~mv2.png
- Jazz photo: https://static.wixstatic.com/media/83d91b_ab40a730c96d469ab44a0700f62c7662~mv2.jpg
- Awards badge: https://static.wixstatic.com/media/c38579_8f02b6cca491429e8f250c3dcb6888fc~mv2.png
- Logo: https://static.wixstatic.com/media/83d91b_d8bf5777233f4a47a9d20d7aa2e9b2e9~mv2.png

## Other Landing Pages (Future)
Jazz also needs landing pages for:
- Endolift
- Morpheus8
