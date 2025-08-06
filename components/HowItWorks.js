'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Book a Pickup Instantly',
      description:
        'Use WhatsApp or our online form to request affordable same-day delivery in Lagos. Your dispatch rider is assigned instantly.',
    },
    {
      step: 'Step 2',
      title: 'Fast Parcel Collection',
      description:
        'We arrive at your pickup location quickly, confirm order details, and collect the item. No delays. Ideal for Lagos online vendors.',
    },
    {
      step: 'Step 3',
      title: 'Reliable Door-to-Door Delivery',
      description:
        'Your package is safely delivered and tracked in real-time. Get delivery proof instantly. Reliable dispatch service across Lagos.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-br from-[#f1f5f9] to-white py-24 px-6 md:px-12 text-gray-900"
    >
      {/* Decorative Top Curve to Connect with Services Section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0">
        <svg
          className="relative block w-full h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            fill="#f1f5f9"
          ></path>
        </svg>
      </div>

      {/* Section Heading */}
      <div className="relative text-center max-w-3xl mx-auto mb-16 z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Hub9ja Logistics Works
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Local delivery made easy — 3 fast steps for Lagos vendors and online businesses.
        </motion.p>
      </div>

      {/* Layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center z-10">
        {/* Left: Illustration */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Seamless Dispatch for Lagos Vendors
          </h3>
          <Image
            src="/images/how-it-works-illustration.png"
            alt="Trackable Delivery Process Lagos Nigeria"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Right: Steps */}
        <div className="space-y-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* Step Number Badge */}
                <div className="bg-green-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold text-sm shrink-0">
                  {index + 1}
                </div>

                {/* Step Content */}
                <div>
                  <div className="text-sm text-yellow-600 font-semibold uppercase mb-1">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
    </section>
  );
}
