// app/profile/page.tsx
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'

type UserProfile = {
  name: string
  email: string
  phone: string
  address: string
}

export default function Profile() {
  const [userData, setUserData] = useState<UserProfile>({
    name: '[Name]',
    email: '[email]',
    phone: '[phone number]',
    address: '[room number]',
  })

  const reqPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { // TODO
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Profile updated!')
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">User Profile</h1>
        </header>
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
            <div className="space-y-4">
              <div><strong>Name:</strong> {userData.name}</div>
              <div><strong>Email:</strong> {userData.email}</div>
              <div><strong>Phone:</strong> {userData.phone}</div>
              <div><strong>Address:</strong> {userData.address}</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Update Profile</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg">Phone</label>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg">Address</label>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700">Save Changes</button>
          </form>
        </section>
      </main>
    </div>
  )
}

