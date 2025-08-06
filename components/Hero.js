'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6 sm:px-12">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-green-100 rounded-full opacity-20 blur-2xl" />
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-2xl" />
        <div className="absolute top-1/2 left-0 w-px h-48 bg-gray-200 opacity-40" />
        <div className="absolute top-1/3 right-0 w-px h-56 bg-gray-200 opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Decorative Intro Text with Line & Dot */}
          <div className="flex items-center justify-center md:justify-start mb-4 space-x-3">
            {/* Dot */}
            <div className="w-2 h-2 rounded-full bg-green-600" />
            {/* Line */}
            <div className="w-10 h-px bg-green-600" />
            {/* Text */}
            <p className="text-sm text-green-700 font-medium tracking-wide">
              Welcome to The Logistics that has you in mind
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Delivery that gives you Confidence and Peace of Mind
          </h1>

          {/* Subtext */}
          <p className="text-gray-700 text-base md:text-lg max-w-xl">
            Experience affordable, fast, and secure delivery tailored to support local vendors and growing businesses — powered by the people, for the people.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#book"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-medium shadow transition"
            >
              Book a Delivery
            </a>
            <a
              href="#pricing"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl text-sm font-medium shadow transition"
            >
              See Our Pricing
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/images/general-logistics-hero.png" // <-- Replace with appropriate image path or Lottie if set up
            alt="Hub9ja Delivery Illustration"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
