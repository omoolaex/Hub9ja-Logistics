// components/Partner.js
export default function Partner() {
  return (
    <section id="partner" className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0052CC]">Partner With Us</h2>
        <p className="text-gray-600 mb-6 md:text-lg">
          Are you a business owner, vendor, or e-commerce brand looking for reliable delivery?
          Partner with Hub9ja Logistics for fast, affordable, and trustworthy solutions.
        </p>
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0052CC] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#003D99] transition"
        >
          Chat With Us on WhatsApp
        </a>
      </div>
    </section>
  );
}