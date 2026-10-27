import type { Metadata, Viewport } from "next";
import "./globals.css";
import { businessInfo, patientReviews, medicalServices } from "@/data/centerData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1D33",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sashreekgastro.com"),
  title: "Sashreek Gastro & Liver Center | Gastroenterologist & Liver Hospital in Warangal",
  description: "Specialized gastroenterology clinic, liver disease care, diagnostic endoscopy, and colonoscopy center located in Balasamudram, Warangal. Rated 5.0/5 on Justdial. Expert care for acid reflux (GERD), fatty liver, pancreatitis, and hepatitis.",
  keywords: [
    "Sashreek Gastro & Liver Center Warangal",
    "Gastroenterologist in Warangal",
    "Best Gastroenterologist near me in Warangal",
    "Gastroenterology Hospital Balasamudram",
    "Gastroenterology services in Warangal",
    "Liver care specialist in Warangal",
    "Liver Hospital Warangal",
    "FibroScan services in Warangal",
    "Transient Elastography Warangal",
    "Endoscopy clinic in Warangal",
    "Upper GI Endoscopy Warangal",
    "Colonoscopy doctor Warangal",
    "Acid reflux GERD treatment Warangal",
    "Fatty liver disease treatment Warangal",
    "Acute pancreatitis doctor Warangal",
    "Gallbladder stone doctor Warangal",
    "Capsule endoscopy Warangal",
    "Ascites treatment Warangal",
    "Abdominal tuberculosis doctor Warangal",
    "Gastroenterologist Balasamudram Road",
    "Dr Sashreek Gastroenterologist",
    "Mr Gottumukkala Sashreek",
    "Gastro clinic Hanamkonda Warangal",
    "Digestive health specialist Telangana"
  ],
  authors: [{ name: "Sashreek Gastro & Liver Center" }, { name: "Mr. Gottumukkala Sashreek" }],
  creator: "Sashreek Gastro & Liver Center",
  publisher: "Sashreek Gastro & Liver Center",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/sashreek_logo.svg", type: "image/svg+xml" },
      { url: "/images/sashreek_logo.png", type: "image/png" },
    ],
    shortcut: "/images/sashreek_logo.svg",
    apple: "/images/sashreek_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Sashreek Gastro & Liver Center",
    title: "Sashreek Gastro & Liver Center | Gastroenterologist & Liver Care in Warangal",
    description: "Dedicated digestive and liver care hospital located in Balasamudram, Warangal. Rated 5.0/5 based on 15 verified reviews on Justdial. High hygiene standards, short wait times, and comprehensive clinical consultations.",
    images: [
      {
        url: "/images/clinic_front_main.jpg",
        width: 1200,
        height: 630,
        alt: "Sashreek Gastro & Liver Center Clinic Entrance, Balasamudram, Warangal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sashreek Gastro & Liver Center — Warangal",
    description: "Expert gastroenterology and liver healthcare center in Balasamudram, Warangal. Rated 5.0/5 on Justdial.",
    images: ["/images/clinic_front_main.jpg"],
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
  category: "Health & Medical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced Schema.org Graph for Heavy SEO & Google Knowledge Graph
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://sashreekgastro.com/#clinic",
        "name": businessInfo.name,
        "alternateName": "Sashreek Gastro and Liver Clinic",
        "url": "https://sashreekgastro.com",
        "logo": "https://sashreekgastro.com/images/sashreek_logo.svg",
        "image": "https://content.jdmagicbox.com/v2/comp/warangal/w6/9999px870.x870.260902104955.e1w6/catalogue/de2vnfbcrfepbin-vqyui0kcn2.jpg",
        "telephone": [businessInfo.phone, businessInfo.secondaryPhone],
        "email": businessInfo.email,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H.No. 1-8-622, Sree Laxmi Test Tube Baby Center, Beside LIC Building, Balasamudram Road",
          "addressLocality": "Balasamudram",
          "addressRegion": "Warangal",
          "postalCode": "506001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": businessInfo.geo.latitude,
          "longitude": businessInfo.geo.longitude
        },
        "hasMap": `https://maps.google.com/maps?q=${businessInfo.geo.latitude},${businessInfo.geo.longitude}`,
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Warangal" },
          { "@type": "AdministrativeArea", "name": "Hanamkonda" },
          { "@type": "AdministrativeArea", "name": "Kazipet" },
          { "@type": "AdministrativeArea", "name": "Telangana" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "15",
          "bestRating": "5",
          "worstRating": "1"
        },
        "medicalSpecialty": [
          "Gastroenterology",
          "Hepatology",
          "Diagnostic Endoscopy",
          "Colonoscopy",
          "Digestive Health",
          "Liver Disease"
        ],
        "availableService": medicalServices.map((service) => ({
          "@type": service.type === "diagnostic" ? "MedicalTest" : "MedicalProcedure",
          "name": service.title,
          "description": service.shortDesc
        })),
        "review": patientReviews.map((rev) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": rev.author
          },
          "datePublished": rev.date,
          "reviewBody": rev.text,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": rev.rating,
            "bestRating": 5,
            "worstRating": 1
          }
        })),
        "paymentAccepted": businessInfo.paymentMethods
      },
      {
        "@type": "WebSite",
        "@id": "https://sashreekgastro.com/#website",
        "url": "https://sashreekgastro.com",
        "name": "Sashreek Gastro & Liver Center",
        "description": "Specialized Gastroenterology, Endoscopy & Liver Care Hospital in Warangal",
        "publisher": {
          "@id": "https://sashreekgastro.com/#clinic"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
