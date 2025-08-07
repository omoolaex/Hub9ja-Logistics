'use client';

import { useState } from 'react';

export default function BusinessForm({ setActiveForm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    phone: '',
    address: '',
    businessType: '',
    pickupFrequency: '',
    estimatedVolume: '',
    notes: '',
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
      const response = await fetch('/api/formhandler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'business',
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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-h-[75vh] overflow-y-auto px-1 pb-2"
    >
      {submitted ? (
        <div className="text-green-600 font-medium text-center">
          Your business request has been received!
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-green-700 mb-1">
            Business Delivery Request
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Kindly fill in the form to request a business delivery service tailored to your needs.
          </p>

          {[
            { label: 'Full Name', name: 'fullName', type: 'text' },
            { label: 'Email Address', name: 'email', type: 'email' },
            { label: 'Phone Number', name: 'phone', type: 'tel' },
            { label: 'Business Name', name: 'businessName', type: 'text' },
            { label: 'Business Address', name: 'address', isTextarea: true },
            { label: 'Type of Business', name: 'businessType', type: 'text', placeholder: 'e.g. Fashion, Food Delivery' },
            { label: 'Pickup Frequency', name: 'pickupFrequency', type: 'text', placeholder: 'e.g. Daily, Weekly' },
            { label: 'Estimated Monthly Delivery Volume', name: 'estimatedVolume', type: 'text', placeholder: 'e.g. 100+ deliveries' },
            { label: 'Additional Notes', name: 'notes', isTextarea: true, placeholder: 'Optional instructions or expectations' },
          ].map(({ label, name, type = 'text', isTextarea, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              {isTextarea ? (
                <textarea
                  name={name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder={placeholder}
                  required={name !== 'notes'}
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder={placeholder}
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>

          <p
            onClick={() => setActiveForm('individual')}
            className="text-sm text-green-700 text-center underline cursor-pointer mt-2"
          >
            Need Individual Delivery Instead? Switch to Individual Form
          </p>
        </>
      )}
    </form>
  );
}
