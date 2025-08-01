// components/TrackPackage.js
export default function TrackPackage() {
  return (
    <section id="track" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0052CC]">Track a Package</h2>
        <p className="text-gray-600 mb-6 md:text-lg">
          Enter your tracking number and our team will get back to you with updates via WhatsApp or email.
        </p>
        <form
          action="https://formsubmit.co/YOUR_EMAIL@domain.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="tracking_number" required placeholder="Enter tracking number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" />
          <input type="text" name="full_name" required placeholder="Your full name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" />
          <input type="text" name="contact_info" required placeholder="Phone number or email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]" />
          <button type="submit"
            className="w-full bg-[#0052CC] text-white py-3 rounded-md hover:bg-[#003D99] transition">
            Submit Tracking Request
          </button>
        </form>
      </div>
    </section>
  );
}