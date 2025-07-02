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
    console.log('Signup Data:', formData);
  };

  return (
    <div className="min-h-screen w-screen flex bg-gray-900">
      <div className="flex justify-end items-center w-full px-4">
        <div className="w-full max-w-md bg-gray-800 p-6 md:p-8 rounded-l-lg shadow-md">
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

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-700" />
            <span className="mx-4 text-gray-400 text-sm">or sign up with</span>
            <hr className="flex-grow border-t border-gray-700" />
          </div>

          <div className="flex flex-row justify-between gap-4 mt-4">
            <button className="flex items-center justify-center w-1/2 py-2 bg-blue-600 text-white font-semibold border border-blue-600 rounded text-sm hover:bg-blue-700 transition">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M43.6 20.5H42V20.5H24V27.5H35.1C33.7 31.1 30.2 33.5 26 33.5C20.2 33.5 15.5 28.8 15.5 23C15.5 17.2 20.2 12.5 26 12.5C28.6 12.5 31 13.5 32.8 15.2L37.2 10.8C34.2 8.1 30.3 6.5 26 6.5C16.8 6.5 9 14.3 9 23.5C9 32.7 16.8 40.5 26 40.5C34.2 40.5 41 33.7 41 25.5C41 24.5 40.9 23.5 40.7 22.5H26V20.5H43.6Z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 py-2 bg-blue-600 text-white font-semibold border border-blue-600 rounded text-sm hover:bg-blue-700 transition">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 27H22.8V21.1C22.8 19.7 22.8 17.9 20.9 17.9C19 17.9 18.7 19.3 18.7 21V27H14.5V13H18.5V14.7H18.6C19.1 13.8 20.2 13 21.7 13C25.1 13 27 15.1 27 18.3V27ZM10.2 11.3C8.9 11.3 8 10.4 8 9.3C8 8.2 8.9 7.3 10.2 7.3C11.5 7.3 12.4 8.2 12.4 9.3C12.4 10.4 11.5 11.3 10.2 11.3ZM12.1 27H8.3V13H12.1V27Z" fill="white"/>
              </svg>
              LinkedIn
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <a href="#" className="text-blue-400 underline ml-1">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
