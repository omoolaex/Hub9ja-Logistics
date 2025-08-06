import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  const meta = {
    title: 'Hub9ja Logistics | Delivering Growth for Local Vendors',
    description:
      'Hub9ja Logistics provides affordable, reliable, and secure delivery for vendors and buyers across Nigeria. Fast dispatch, vendor support, and customer satisfaction guaranteed.',
    keywords:
      'Hub9ja Logistics, delivery, delivery service in Lagos, dispatch, local vendors, ecommerce shipping Nigeria, track package, logistics services Nigeria, vendor delivery support, dispatch in Lagos, affordable logistics Nigeria',
    url: 'https://hub9jalogistics.markethub9ja.com',
    image: "'https://hub9jalogistics.markethub9ja.com/icon.png'",
    twitterHandle: '@Hub9jaLogistics', // Replace with actual if available
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hub9ja Logistics",
    "image": meta.image,
    "url": meta.url,
    "telephone": "+2349053544043", // Replace with real number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18, RTS Apena Close, Oriyomi Street, Olowu",
      "addressLocality": "Lagos",
      "addressRegion": "LA",
      "postalCode": "100001",
      "addressCountry": "NG"
    },
    "description": meta.description,
    "openingHours": "Mo-Sa 08:00-18:00",
    "sameAs": [
      "https://www.facebook.com/Hub9jaLogistics",
      "https://www.instagram.com/Hub9jaLogistics"
    ]
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.url} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:site" content={meta.twitterHandle} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data for LocalBusiness SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

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