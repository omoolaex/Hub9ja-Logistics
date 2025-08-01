// components/Services.js
export default function Services() {
  const services = [
    {
      title: "Pick-up & Delivery",
      description: "We pick up your orders and deliver to your customers — fast, safe, and affordable.",
    },
    {
      title: "Same-Day & Next-Day Options",
      description: "Flexible delivery speeds to suit your buyers and product category.",
    },
    {
      title: "Nationwide Coverage",
      description: "No matter where your buyer is, we help you reach them — within and outside your city.",
    },
    {
      title: "Real-time Tracking",
      description: "Easily track packages and get regular delivery updates.",
    },
    {
      title: "Logistics Support",
      description: "Dedicated support to handle logistics issues and build buyer trust.",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0052CC]">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Logistics made simple for e-commerce sellers and growing vendors.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F4F7FE] p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#0052CC]">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}