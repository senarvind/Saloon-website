import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://saloon-website-fawn.vercel.app'),
  title: {
    default: "Lucky Men's Parlour | Arun Sen | Best Hair Salon in Prayagraj",
    template: "%s | Lucky Men's Parlour"
  },
  description: "Experience premium grooming with Arun Sen at Lucky Men's Parlour. Best hair salon in Prayagraj for traditional cuts, beard grooming, facials, and relaxation.",
  keywords: ["Lucky Men's Parlour", "Arun Sen", "Salon in Prayagraj", "Best Haircut Prayagraj", "Men's Grooming", "Barber Shop Prayagraj", "Traditional Salon"],
  authors: [{ name: "Arun Sen" }],
  creator: "Arun Sen",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saloon-website-fawn.vercel.app/",
    title: "Lucky Men's Parlour | Arun Sen | Best Hair Salon in Prayagraj",
    description: "Premium grooming experience by Arun Sen. Traditional cuts and modern styles.",
    siteName: "Lucky Men's Parlour",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Men's Parlour | Arun Sen",
    description: "Best hair salon in Prayagraj for traditional and modern grooming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { BookingProvider } from '@/context/BookingContext';
import BookingModal from '@/components/BookingModal';

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Lucky Men's Parlour",
    "image": "https://saloon-website-fawn.vercel.app/arun.png",
    "@id": "https://saloon-website-fawn.vercel.app",
    "url": "https://saloon-website-fawn.vercel.app",
    "telephone": "+91 62640 67910",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Civil Lines",
      "addressLocality": "Prayagraj",
      "addressRegion": "UP",
      "postalCode": "211001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lucky Men's Parlour - Best Hair Salon in Prayagraj. Expert grooming by Arun Sen." />
        <meta name="keywords" content="Lucky Men's Parlour, Arun Sen, Salon Prayagraj, Haircut, Grooming" />
        <meta name="author" content="Arun Sen" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://saloon-website-fawn.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saloon-website-fawn.vercel.app/" />
        <meta property="og:title" content="Lucky Men's Parlour | Best Hair Salon in Prayagraj" />
        <meta property="og:description" content="Premium grooming experience by Arun Sen. Traditional cuts and modern styles." />
        <meta property="og:image" content="https://saloon-website-fawn.vercel.app/arun.png" />
        <meta name="google-site-verification" content="luLL7kB4tzv9cUSslFRinRFD0AHsCHSL-3Qbz3IX3t0" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BookingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
