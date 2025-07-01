import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Please agree to the terms.');
      return;
    }
    console.log('Submitted:', formData);
    // Send data to backend here
  };

  return (
    <div className="min-h-screen flex justify-end items-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up for CRM</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex">
            <span className="flex items-center px-3 rounded-l border border-r-0 bg-gray-200 text-gray-600 text-sm">+91</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-sm text-gray-700">
            It looks like you’re in <strong>INDIA</strong> based on your IP.
          </div>
          <label className="flex items-start text-sm text-gray-700">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            I agree to the{' '}
            <a href="#" className="text-blue-600 underline ml-1">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 underline ml-1">
              Privacy Policy
            </a>.
          </label>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            GET STARTED
          </button>
        </form>

        {/* Divider with text */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">Or, Create a new account now</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* OAuth Buttons Side-by-Side */}
        <div className="flex flex-row justify-between gap-4 mt-4">
          <button className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded text-sm hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded text-sm hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
            Sign in with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
