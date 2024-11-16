import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/home'); // Redirect to the home page after login
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
      {/* Background Overlay */}
      <div className="inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Breaking+Bad+Lab')] opacity-10 fixed"></div>

      {/* Logo */}
      <div className="mb-8 relative">
        <h1 className="text-6xl font-bold text-center mb-2">
          <span className="text-green-500">B</span>
          <span className="text-yellow-500">B</span>
        </h1>
        <div className="text-center text-gray-400">
          <div className="text-xl">Breaking</div>
          <div className="text-xl -mt-1">Bad</div>
        </div>
      </div>

      {/* Login Form */}
      <div
        className="relative bg-black bg-opacity-70 p-8 rounded-lg shadow-2xl border-2 border-green-500 
                      hover:border-yellow-500 transition-all duration-500 w-full max-w-md"
      >
        <form onSubmit={handleOnSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-green-500 font-semibold text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-gray-900 border-2 border-gray-800 rounded-md px-4 py-2 text-white
                           focus:outline-none focus:border-green-500 transition-colors duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-green-500 font-semibold text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-gray-900 border-2 border-gray-800 rounded-md px-4 py-2 text-white
                           focus:outline-none focus:border-green-500 transition-colors duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-green-500 font-semibold text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full bg-gray-900 border-2 border-gray-800 rounded-md px-4 py-2 text-white
                           focus:outline-none focus:border-green-500 transition-colors duration-300"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-md
                           transition-all duration-300 transform hover:scale-105 hover:rotate-1
                           border-2 border-transparent hover:border-white"
            >
              Enter the Lab
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="relative mt-8 text-gray-500 text-sm">
        © 2023 Breaking Bad Fan Site. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
