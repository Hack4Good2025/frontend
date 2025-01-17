"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  
  const [loginFormData, setLoginFormData] = useState([{
      userID: '',
      password: ''
    }]);
    
  const login = async ( userID: string, password: string ) => {
      try {

      const response = await fetch('https://hack4good2025-backend-1.onrender.com/api/residents/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
       },
        body: JSON.stringify({"userId": userID, "password": password}),
      })
    
      if (!response.ok) {
        throw new Error('Login failed')
      }

      const result = await response.json()
      console.log(result)
      if(result.isAdmin == true){
      	router.push(`/pending_claims?userId=${result.userId}`)
      } else {
      	router.push(`/dashboard?userId=${result.userId}`)
      }
      
    } catch (error) {
      console.error('Error submitting login form:', error)
    }
  }


  const handleLogin = async (e: React.FormEvent, userID: string, password: string) => {
    e.preventDefault();
    await login(userID, password)
  };
  
  /* Functions for managing the form status for login request*/
  const handleUserIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value  } = e.target
    setLoginFormData({userID: value, password: loginFormData.password})
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value  } = e.target
    setLoginFormData({userID: loginFormData.userID, password: value})
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
                value={loginFormData.userID}
                onChange={(e) => handleUserIDChange(e)}
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
                value={loginFormData.password}
                onChange={(e) => handlePasswordChange(e)}
                required
                className="w-full px-4 py-2 border border-teal-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={(e) => handleLogin(e, loginFormData.userID, loginFormData.password)}
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

