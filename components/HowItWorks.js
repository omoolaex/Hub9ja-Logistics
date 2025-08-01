// components/HowItWorks.js
export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Request a Pickup",
      description: "Book a delivery via WhatsApp or website. A dispatch rider will be assigned to you.",
    },
    {
      step: "Step 2",
      title: "We Pick Up",
      description: "We arrive at your pickup location, collect the parcel, and confirm details.",
    },
    {
      step: "Step 3",
      title: "We Deliver",
      description: "We deliver to your customer and update you with proof of delivery.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F9FBFF] py-16 px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0052CC]">How It Works</h2>
        <p className="text-gray-600 mb-12">
          Seamless logistics — just 3 simple steps to get your product to your buyer.
        </p>

        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-left bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-sm text-[#0052CC] font-medium mb-2 uppercase">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}