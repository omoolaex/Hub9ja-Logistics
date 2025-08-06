'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#207A4B] mb-4">
            Contact Hub9ja Logistics
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Need help with deliveries, logistics partnerships or general enquiries? We're just a message away.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-[#F7FFF6] border border-[#C9F0A8] rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold text-[#207A4B] mb-4">Reach Our Team</h3>

            <div className="mb-4">
              <p className="font-medium text-[#207A4B]">Business Enquiries</p>
              <p className="text-gray-800">info@hub9jalogistics.com</p>
            </div>

            <div className="mb-4">
              <p className="font-medium text-[#207A4B]">Customer Support</p>
              <p className="text-gray-800">support@hub9jalogistics.com</p>
            </div>

            <div>
              <p className="font-medium text-[#207A4B]">WhatsApp Support</p>
              <p className="text-gray-800">+234 XXX XXX XXXX</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formsubmit.co/YOUR_EMAIL@domain.com"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B]"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B]"
            />
            <textarea
              name="message"
              required
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B] h-32"
            />
            <button
              type="submit"
              className="w-full bg-[#F5C842] text-gray-900 font-semibold py-3 rounded-md hover:bg-[#e5b935] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
