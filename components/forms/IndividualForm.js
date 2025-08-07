'use client';

import { useState } from 'react';

export default function IndividualForm({ setActiveForm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    deliveryDate: '',
    packageDescription: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/formhandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'individual',
          ...formData,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        console.error(result.error);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('An error occurred while submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-h-[75vh] overflow-y-auto px-1 pb-2"
    >
      {!submitted && (
        <div className="text-left mb-4">
          <h3 className="text-xl font-semibold text-green-700 mb-1">
            Individual Delivery Request
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Kindly fill in the form to request a delivery. We'll handle the rest.
          </p>
        </div>
      )}

      {submitted ? (
        <div className="text-green-600 font-medium text-center">
          Your delivery request has been received!
        </div>
      ) : (
        <>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pickup Location</label>
            <input
              name="pickupLocation"
              type="text"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Drop-off Location</label>
            <input
              name="dropoffLocation"
              type="text"
              value={formData.dropoffLocation}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred Delivery Date</label>
            <input
              name="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Package Description</label>
            <textarea
              name="packageDescription"
              value={formData.packageDescription}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>

          <p
            onClick={() => setActiveForm('business')}
            className="text-sm text-green-700 text-center underline cursor-pointer mt-2"
          >
            Need Business Delivery Instead? Switch to Business Form
          </p>
        </>
      )}
    </form>
  );
}
