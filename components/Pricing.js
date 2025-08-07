'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useModal } from './ModalContext';

const plans = [
  {
    name: 'Individual',
    price: '₦2,000',
    bestFor: 'Casual senders & small vendors',
    features: [
      'Pay-per-delivery access',
      'Pickup within 60–90 mins',
      'Simple delivery requests via WhatsApp',
      'Basic delivery tracking',
      'COD available on request',
    ],
    cta: 'Start Sending',
    linkText: 'View Individual Pricing',
    linkUrl: '/pricing/individual',
    highlighted: false,
    formId: 'individual',
  },
  {
    name: 'Business',
    price: '₦1,500',
    bestFor: 'Growing vendors & SMEs',
    features: [
      'Daily scheduled pickups',
      'Access to vendor dashboard',
      'Weekly COD remittance',
      'Branded delivery slips (optional)',
      'Priority support line',
    ],
    cta: 'Choose Business Plan',
    linkText: 'View Business Pricing',
    linkUrl: '/pricing/business',
    highlighted: true,
    formId: 'business',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    bestFor: 'Large-volume merchants & brands',
    features: [
      'Dedicated fleet and rider team',
      'API & system integrations',
      'Branded delivery experience',
      'Bulk pickup & fulfillment',
      'End-of-day settlement options',
    ],
    cta: 'Contact Enterprise Team',
    linkText: 'View Enterprise Pricing',
    linkUrl: '/pricing/enterprise',
    highlighted: false,
    formId: 'enterprise',
  },
];

export default function PricingSection() {
  const { openModal } = useModal();

  return (
    <section
      id="pricing"
      className="relative py-20 px-6 bg-gradient-to-b from-green-50 via-white to-white overflow-hidden"
    >
      {/* Decorative Circles */}
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
          Fair, flexible pricing built for individuals, vendors, and high-volume logistics needs.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-8 border-2 transition-transform hover:scale-[1.03] duration-300 shadow-md ${
                plan.highlighted
                  ? 'border-yellow-500 bg-green-50 shadow-xl'
                  : 'border-gray-200 bg-white'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-green-700 mb-4">{plan.name} Plan</h3>

              {/* Pricing */}
              <div className="relative mb-6">
                {plan.price !== 'Custom' && (
                  <span className="text-xs text-gray-400">Starting from</span>
                )}
                <p className="text-4xl font-extrabold text-yellow-600">{plan.price}</p>
                {plan.price !== 'Custom' && (
                  <span className="text-sm text-gray-500 block mt-1">per delivery</span>
                )}
              </div>

              {/* Best For */}
              <p className="text-sm font-medium text-white bg-green-600 inline-block px-3 py-1 rounded-full mb-4">
                Best for: {plan.bestFor}
              </p>

              {/* Features */}
              <ul className="text-sm text-left space-y-3 mb-6 text-gray-700">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View Pricing Link */}
              <div className="mb-5 text-center">
                <a
                  href={plan.linkUrl}
                  className="inline-flex items-center text-green-700 font-medium text-sm hover:underline"
                >
                  {plan.linkText} <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>

              {/* CTA Button */}
              {plan.name === 'Enterprise' ? (
                <button
                  onClick={() => openModal(plan.formId)}
                  className="bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-md transition text-sm font-semibold w-full"
                >
                  {plan.cta}
                </button>
              ) : (
                <button
                  onClick={() => openModal(plan.formId)}
                  className="bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-md transition text-sm font-semibold w-full"
                >
                  {plan.cta}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
