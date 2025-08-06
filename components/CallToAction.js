// components/CallToAction.js
'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <motion.section
      className="bg-green-700 text-white py-16 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Reliable Delivery Services for Lagos Vendors
        </h2>
        <p className="mb-8 text-lg md:text-xl text-yellow-200">
          Fast pickups, same-day deliveries, and trusted dispatch solutions that keep your business moving forward.
        </p>
        <a
          href="https://wa.me/2348012345678"
          className="inline-block bg-yellow-400 text-green-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Book a Pickup Now on WhatsApp
        </a>
      </div>
    </motion.section>
  );
}
