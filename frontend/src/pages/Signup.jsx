import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Add further validation or API call here
    console.log('Signup Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-900 px-4">
      <div className="ml-auto w-full max-w-md bg-gray-800 p-6 md:p-8 rounded-lg shadow-md" style={{ marginRight: 0 }}>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign up for your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex">
            <span className="flex items-center px-3 rounded-l border border-r-0 bg-gray-700 text-gray-300 text-sm">+91</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-r bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        {/* Divider with text */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-700" />
          <span className="mx-4 text-gray-400 text-sm">or sign up with</span>
          <hr className="flex-grow border-t border-gray-700" />
        </div>
        {/* OAuth Buttons Side-by-Side */}
        <div className="flex flex-row justify-between gap-4 mt-4">
          <button className="flex items-center justify-center w-1/2 py-2 border border-gray-700 rounded text-sm text-white hover:bg-gray-700 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center w-1/2 py-2 border border-gray-700 rounded text-sm text-white hover:bg-gray-700 transition">
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
            LinkedIn
          </button>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{' '}
          <a href="#" className="text-blue-400 underline ml-1">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
