import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import StickyAppointmentBar from "@/components/StickyAppointmentBar";
import { doctorData } from "@/data/doctor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://drsanatansatapathy.com"),
  title: {
    default: "Dr. Sanatan Satapathy | Senior Neurosurgeon & Spine Surgeon in Bhubaneswar",
    template: "%s | Dr. Sanatan Satapathy – Neurosurgeon Bhubaneswar"
  },
  description: "Advanced brain and spine care in Bhubaneswar, Odisha by Dr. Sanatan Satapathy (MBBS, MS, MCh Neurosurgery). Specializing in endoscopic spine surgery, minimally invasive spine procedures, brain tumors, and slipped disc care.",
  keywords: [
    "Dr Sanatan Satapathy",
    "Neurosurgeon Bhubaneswar",
    "Spine Surgeon Bhubaneswar",
    "Endoscopic Spine Surgery Odisha",
    "Brain Tumor Surgery Bhubaneswar",
    "Slipped Disc Treatment Bhubaneswar",
    "Minimally Invasive Spine Surgery",
    "Sparsh Hospital Neurosurgeon",
    "Best Neurosurgeon in Odisha"
  ],
  authors: [{ name: "Dr. Sanatan Satapathy" }],
  creator: "Dr. Sanatan Satapathy",
  publisher: "Dr. Sanatan Satapathy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drsanatansatapathy.com",
    title: "Dr. Sanatan Satapathy | Senior Neurosurgeon & Spine Surgeon, Bhubaneswar",
    description: "Advanced Brain & Spine Care with Precision, Experience and Compassion. Endoscopic spine surgery, brain tumor surgery, and minimally invasive neurosurgery.",
    siteName: "Dr. Sanatan Satapathy - Neurosurgeon & Spine Specialist",
    images: [
      {
        url: "/images/dr-sanatan-satapathy.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Sanatan Satapathy - Neurosurgeon & Spine Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sanatan Satapathy | Neurosurgeon & Spine Surgeon",
    description: "Advanced Brain & Spine Care with Precision, Experience and Compassion in Bhubaneswar, Odisha.",
    images: ["/images/dr-sanatan-satapathy.jpg"],
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
};

export default function RootLayout({ children }) {
  // Schema.org Physician Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctorData.name,
    "legalName": doctorData.formalName,
    "description": doctorData.tagline,
    "image": "https://drsanatansatapathy.com/images/dr-sanatan-satapathy.jpg",
    "logo": "https://drsanatansatapathy.com/images/logo.png",
    "medicalSpecialty": [
      "https://schema.org/Neurosurgery"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. A/62, Saheed Nagar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751007",
      "addressCountry": "IN"
    },
    "telephone": doctorData.contact.phone,
    "email": doctorData.contact.email,
    "url": "https://drsanatansatapathy.com",
    "priceRange": "$$",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "SCB Medical College & Hospital, Cuttack"
      },
      {
        "@type": "EducationalOrganization",
        "name": "All India Institute of Medical Sciences (AIIMS), New Delhi"
      }
    ],
    "hospitalAffiliation": [
      {
        "@type": "Hospital",
        "name": "Sparsh Hospitals & Critical Care, Bhubaneswar"
      },
      {
        "@type": "Hospital",
        "name": "Kalinga Institute of Medical Sciences (KIMS), Bhubaneswar"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col text-neutral-body bg-white selection:bg-teal selection:text-white">
        <EmergencyBanner />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <StickyAppointmentBar />
        <Footer />
      </body>
    </html>
  );
}

