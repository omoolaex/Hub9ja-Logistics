// components/Footer.js
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="bg-[#1B5E20] text-white py-10 px-6 md:px-12 lg:px-24"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="mb-2">
            <Image
              src="/logo.png"
              alt="Hub9ja Logistics Logo"
              width={150}
              height={40}
              priority
            />
          </div>
          <p className="text-sm leading-relaxed">
            Fast, secure, and affordable local delivery services tailored for Nigerian vendors and businesses.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="font-semibold text-[#FFEB3B] mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Our Logistics Services</a></li>
            <li><a href="#how-it-works" className="hover:underline">How Delivery Works</a></li>
            <li><a href="#track" className="hover:underline">Track Your Package</a></li>
            <li><a href="#contact" className="hover:underline">Contact Hub9ja</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-[#FFEB3B] mb-2">Talk to Us</h4>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:support@markethub9ja.com" className="hover:underline">support@markethub9ja.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/2349153544043" className="hover:underline">+234 915 354 4043</a></li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-200">
        © 2025 Hub9ja Logistics — Powered by <a href="https://markethub9ja.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">Markethub9ja Global Ltd</a>. Developed by <a href="https://omoolaex.com.ng" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">OmoolaEx</a>.
      </div>
    </footer>
  );
}
