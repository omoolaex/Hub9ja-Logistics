'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Adaobi N.',
    feedback:
      'Using Hub9ja Logistics has transformed my business. Fast dispatch service in Lagos, seamless rider pickup, and consistent delivery times – exactly what every vendor needs!',
    title: 'Fashion Vendor – Lekki',
  },
  {
    name: 'Chuka I.',
    feedback:
      'Hub9ja’s customer support and live rider tracking give my buyers confidence. As an e-commerce seller, logistics reliability is key – and they deliver!',
    title: 'Gadget Store – Ikeja',
  },
  {
    name: 'Blessing T.',
    feedback:
      'Affordable delivery service in Lagos with friendly riders. My customers now receive orders on time, and I’ve reduced delivery complaints by 80%.',
    title: 'Beauty Products Vendor – Yaba',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 bg-gradient-to-b from-white via-green-50 to-green-100 overflow-hidden"
    >
      {/* Decorative Blobs for Continuity */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full opacity-20 blur-3xl z-0" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl z-0" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-green-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Local Vendors Across Lagos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg border border-green-100 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-800 mb-4 leading-relaxed">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-semibold text-green-900">{testimonial.name}</h4>
              <span className="text-sm text-gray-600">{testimonial.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
