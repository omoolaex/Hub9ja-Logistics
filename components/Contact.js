'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/formhandler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        console.error('Error submitting:', result.error);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network or server error:', error);
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
              <p className="text-gray-800">hub9jalogistics@markethub9ja.com</p>
            </div>

            <div className="mb-4">
              <p className="font-medium text-[#207A4B]">Customer Support</p>
              <p className="text-gray-800">support@markethub9ja.com</p>
            </div>

            <div>
              <p className="font-medium text-[#207A4B]">WhatsApp Support</p>
              <p className="text-gray-800">+234 915 354 4043</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4"
          >
            {submitted ? (
              <p className="text-green-700 font-medium text-center">Message sent successfully!</p>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B]"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B]"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B]"
                />
                <textarea
                  name="message"
                  required
                  placeholder="Write your message here..."
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#207A4B] h-32"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F5C842] text-gray-900 font-semibold py-3 rounded-md hover:bg-[#e5b935] transition"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
