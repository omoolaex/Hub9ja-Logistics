// components/Hero.js
export default function Hero() {
  return (
    <section className="bg-[#E8F0FE] text-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Delivering Growth for <span className="text-[#0052CC]">Local Vendors</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Hub9ja Logistics helps local vendors scale with seamless delivery, improved buyer trust, and nationwide reach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0052CC] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#services"
              className="text-[#0052CC] font-semibold hover:underline"
            >
              Explore Our Services →
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src="/images/logistics-hero.png" // Replace with actual image path
            alt="Local vendor logistics"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}