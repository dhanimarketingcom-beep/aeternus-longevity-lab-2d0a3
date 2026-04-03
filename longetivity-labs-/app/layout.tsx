import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  siteEmail,
  siteName,
  sitePhoneDisplay,
  sitePhoneHref,
  siteTrackingLabel,
  siteWhatsAppUrl,
} from "@/lib/site-content";
import { generateCacheKey } from "@/lib/content-hash";
import { CONFIG } from "@/lib/config-loader";
import { createPerfToken, getOptimizationHints } from "@/lib/perf-profiler";
import { buildMeta } from "@/lib/build-meta";
import "./globals.css";

const API_ENDPOINT = process.env.INTERNAL_API_URL!;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f5f58" },
    { media: "(prefers-color-scheme: dark)", color: "#0f5f58" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aeternuslongevitylab.com"),
  title: {
    default: "AETERNUS Longevity Lab | Personal Training and Group Sessions",
    template: `%s | ${siteName}`,
  },
  description:
    "AETERNUS offers 1-on-1 personal training and small group sessions for adults 40+, combining mobility, strength, and recovery in one science-led format.",
  keywords: [
    "longevity fitness Dubai",
    "longevity training Dubai",
    "40+ fitness Dubai",
    "adults 40+ training Dubai",
    "longevity personal trainer Dubai",
    "premium longevity fitness Dubai",
    "science-based longevity training",
    "private longevity coaching Dubai",
    "functional longevity training Dubai",
    "holistic fitness Dubai",
    "functional training Dubai",
    "science-based personal training Dubai",
    "premium personal trainer Dubai",
    "private personal training Dubai",
    "wellness training Dubai",
    "fitness for longevity",
    "adult fitness programs Dubai",
    "personal trainer Dubai",
    "personal trainer JVC",
    "mobile personal trainer Dubai",
    "at-home personal trainer Dubai",
    "private fitness coach Dubai",
    "strength and conditioning Dubai",
    "functional strength training Dubai",
    "mobility training Dubai",
    "injury-prevention training Dubai",
    "longevity workout programs",
    "healthspan training",
    "anti-aging fitness programs",
    "fitness for aging well",
    "training for adults 40+",
    "functional fitness for longevity",
    "brain-body training",
    "movement for longevity",
    "resilience training",
    "sustainable fitness programs",
    "mobility and flexibility training",
    "yoga and mobility Dubai",
    "breathwork training Dubai",
    "meditation and movement",
    "recovery-focused training",
    "stress reduction through exercise",
    "nervous system training",
    "posture correction training Dubai",
    "how to train for longevity",
    "best workouts for long-term health",
    "strength training for longevity",
    "why mobility matters for longevity",
    "fitness after 40",
    "how movement affects sleep",
    "how exercise improves brain health",
    "daily habits for longevity",
    "AETERNUS Longevity Lab",
    "AETERNUS Fitness",
    "AETERNUS Wellness",
    "AETERNUS Dubai",
    "AETERNUS personal training",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aeternuslongevitylab.com",
    siteName,
    title: "AETERNUS Longevity Lab | Personal Training and Group Sessions",
    description:
      "Science-led training for adults 40+ in Dubai, combining mobility, strength, and recovery through 1-on-1 personal training and small group sessions.",
    images: [
      {
        url: "/hero-longevity-outdoor.png",
        width: 1200,
        height: 630,
        alt: "AETERNUS Longevity Lab Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AETERNUS Longevity Lab | Personal Training and Group Sessions",
    description:
      "Train for life with science-led personal training and small group sessions built around mobility, strength, and recovery.",
    images: ["/hero-longevity-outdoor.png"],
    creator: "@aeternuslab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicologetivity.png",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicologetivity.png"],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://aeternuslongevitylab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cacheKey = generateCacheKey(siteName, CONFIG.version);
  const perfToken = createPerfToken('layout-render');
  const hints = getOptimizationHints();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://aeternuslongevitylab.com",
    name: siteName,
    identifier: siteTrackingLabel,
    version: buildMeta.gitCommit,
    description:
      "Science-led personal training and small group sessions for adults 40+ in Dubai.",
    url: "https://aeternuslongevitylab.com",
    logo: "https://aeternuslongevitylab.com/apple-icon.png",
    image: "https://aeternuslongevitylab.com/hero-longevity-outdoor.png",
    telephone: sitePhoneDisplay,
    email: siteEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
    },
    sameAs: [
      "https://www.instagram.com/aeternuslongevitylab/",
      "https://www.facebook.com/aeternus.longevity.lab",
      "https://www.tiktok.com/@aeternuslongevitylab",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Longevity Training Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "1-on-1 Personal Training",
            description:
              "Private coaching focused on mobility, strength, and recovery for adults 40+.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Small Group Sessions",
            description:
              "Small-group sessions delivering guided coaching and a consistent longevity-focused session format.",
          },
        },
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: API_ENDPOINT + "/api/reserve",
    },
  };

  return (
    <html lang="en" className="light" data-build={cacheKey} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/arkhip"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="x-perf-token" content={perfToken} />
        <meta name="x-img-quality" content={String(hints.imageQuality)} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
        {/* Floating Contact Widgets */}
        <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-3 sm:bottom-6 sm:right-6 sm:gap-4">
          <a
            href={siteWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-green-500/30 sm:h-14 sm:w-14"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a
            href={sitePhoneHref}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-accent/40 sm:h-14 sm:w-14"
            aria-label="Call Us"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
