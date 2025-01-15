"use client"
import { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
    // You can perform your authentication API call here
    alert('Login Attempted!');
  };

  return (
    <div className="flex h-screen">
      {/* Left side: Image */}
      <div className="w-1/2 bg-teal-900">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side: Login Form */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-4/5 max-w-md space-y-8">
          <h2 className="text-center text-3xl font-semibold text-teal-900">
            Welcome Back!
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-teal-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-teal-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-teal-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-teal-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

