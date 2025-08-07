import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Logistics & Dispatch Partner in Lagos | Hub9ja Logistics',
  description:
    'Affordable, reliable delivery & logistics for vendors and customers across Lagos. Trusted by ecommerce businesses and SMEs in Nigeria.',
  keywords:
    'logistics Lagos, dispatch Lagos, ecommerce shipping Nigeria, vendor delivery, Lagos courier, Hub9ja delivery, same-day dispatch Nigeria',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Logistics & Dispatch Partner in Lagos | Hub9ja Logistics',
    description:
      'Top-rated logistics partner in Lagos for fast, affordable dispatch. Supporting local vendors and ecommerce growth across Nigeria.',
    url: 'https://hub9jalogistics.markethub9ja.com',
    type: 'website',
    images: [
      {
        url: 'https://hub9jalogistics.markethub9ja.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Hub9ja Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics in Lagos | Hub9ja Logistics',
    description:
      'Secure, fast and budget-friendly delivery services for vendors and customers in Lagos.',
    images: ['https://hub9jalogistics.markethub9ja.com/logo.png'],
    site: '@Hub9jaLogistics',
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hub9ja Logistics",
    image: "https://hub9jalogistics.markethub9ja.com/logo.png",
    url: "https://hub9jalogistics.markethub9ja.com",
    telephone: "+2349053544043",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18, RTS Apena Close, Oriyomi Street, Olowu",
      addressLocality: "Lagos",
      addressRegion: "LA",
      postalCode: "100001",
      addressCountry: "NG",
    },
    description:
      "Affordable logistics services in Lagos for vendors and ecommerce businesses. Local dispatch, fast delivery, trusted courier partner.",
    openingHours: "Mo-Sa 08:00-18:00",
    sameAs: [
      "https://www.facebook.com/Hub9jaLogistics",
      "https://www.instagram.com/Hub9jaLogistics",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="bg-[#f9f9f9] text-gray-800 font-sans">
        <Header />
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
