'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Same-Day Delivery in Lagos",
    description:
      "Fast and reliable same-day delivery service for individuals and vendors across Lagos. Ideal for time-sensitive packages and urgent local deliveries.",
    route: "/services/express-delivery",
    lottie: "/animations/Delivery Scooter.lottie",
  },
  {
    title: "Bulk & Interstate Logistics",
    description:
      "Affordable interstate delivery for SMEs and large-volume shipments. Ensure your packages reach across Nigeria securely and on time.",
    route: "/services/interstate-logistics",
    lottie: "/animations/interstate.lottie",
  },
  {
    title: "Scheduled Pickup & Last-Mile",
    description:
      "Plan ahead with flexible pickup scheduling and smooth last-mile delivery to customers in Lagos. Perfect for recurring vendor needs.",
    route: "/services/scheduled-pickup",
    lottie: "/animations/Delivery concept.lottie",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-gradient-to-br from-[#f9fafb] to-[#f1f5f9] overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full opacity-30 blur-3xl pointer-events-none z-0" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Affordable Logistics in Lagos Tailored for You
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-14 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore our logistics services built for Lagos-based vendors and businesses — combining affordability, speed, and peace of mind. Trusted by ecommerce sellers and everyday senders alike.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={service.route}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group cursor-pointer h-full flex flex-col hover:border-yellow-400 hover:scale-[1.02]">
                  {/* Lottie Animation */}
                  <div className="w-full h-48 flex items-center justify-center mb-4">
                    <DotLottieReact
                      src={service.lottie}
                      autoplay
                      loop
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-green-700 group-hover:text-yellow-500 transition duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <span className="mt-4 text-sm font-medium text-yellow-500 group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
