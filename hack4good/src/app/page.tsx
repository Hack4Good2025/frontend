"use client"
import { useState } from 'react'

const LoginPage = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('UserID:', userID);
    console.log('Password:', password);
    // You can perform your authentication API call here
    alert('Login Attempted!');
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-teal-900">
        <img
          src="https://scontent-sin11-1.xx.fbcdn.net/v/t39.30808-6/392952483_741672298002543_5339692528703768269_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MpSqiVWEItoQ7kNvgHKijSn&_nc_zt=23&_nc_ht=scontent-sin11-1.xx&_nc_gid=AvzbOLCcsqpAxAzYoUKeyyz&oh=00_AYCe2LEycOajM9sG_sbp-ChVJDQoWkL9h9fAs6l7EEsK2g&oe=678E94A8"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-4/5 max-w-md space-y-8">
          <h2 className="text-center text-3xl font-semibold text-teal-900">
            Welcome Back!
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="userID" className="block text-sm font-medium text-teal-700">
                User ID
              </label>
              <input
                type="userID"
                id="userID"
                name="userID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
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

