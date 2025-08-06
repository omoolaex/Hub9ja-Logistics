'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '₦500 / delivery',
    features: [
      'Pickup within 60 mins',
      'Flat-rate delivery in Lagos',
      'Affordable dispatch for vendors',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '₦450 / delivery',
    features: [
      'Scheduled pickups for businesses',
      'Access to vendor dashboard',
      'Priority support & tracking',
    ],
    cta: 'Choose Plan',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    features: [
      'API & platform integrations',
      'Dedicated logistics fleet',
      'Custom white-glove solutions',
    ],
    cta: 'Talk to Us',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 px-6 bg-gradient-to-b from-green-50 via-white to-white overflow-hidden"
    >
      {/* Decorative blur shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 opacity-20 rounded-full filter blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-green-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transparent Logistics Pricing
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Simple, flexible dispatch pricing for vendors, SMEs, and enterprises across Lagos. No hidden fees.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-8 border-2 transition-transform hover:scale-[1.03] duration-300 ${
                plan.highlighted
                  ? 'border-yellow-500 bg-green-50 shadow-xl'
                  : 'border-gray-200 bg-white shadow-md'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">{plan.name}</h3>
              <p className="text-2xl font-semibold text-yellow-600 mb-6">{plan.price}</p>
              <ul className="text-sm text-left space-y-3 mb-8 text-gray-700">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-md transition">
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
