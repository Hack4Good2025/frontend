"use client"

import Sidebar from '../../components/sidebar'
import { useState } from 'react'

type ProfileProps = {
  name: string;
  userId: string;
  imageUrl: string;
};

Profile.defaultProps = {
  name: "John Doe",
  userId: "123456",
  imageUrl: "https://www.w3schools.com/w3images/avatar2.png",
};


export default function Profile({ name, userId, imageUrl }) {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const [currentName, setCurrentName] = useState(name);

  const handleChangePassword = () => {
    alert("Change Password functionality is not implemented yet.");
  };

  const handleChangeProfilePicture = () => {
    // For simplicity, let's simulate changing the profile picture.
    const newImageUrl = prompt("Enter new profile image URL:");
    if (newImageUrl) {
      setCurrentImageUrl(newImageUrl);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">User Profile</h1>
          <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100">
      {/* Header with buttons */}
      <div className="w-full bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Profile Settings</h1>
        <div>
          <button
            onClick={handleChangePassword}
            className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4"
          >
            Change Password
          </button>
          <button
            onClick={handleChangeProfilePicture}
            className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Change Profile Picture
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-80 mt-8">
        <img
          src={currentImageUrl}
          alt="Profile Picture"
          className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500 text-sm">User ID: {userId}</p>
      </div>
    </div>
        </header>
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
            <div className="space-y-4">
              <div><strong>Name:</strong> {name}</div>
              <div><strong>UserID:</strong> {userId}</div>
              <div><strong>Image:</strong> {currentImageUrl}</div>

            </div>
          </div>

         
        </section>
      </main>
    </div>
  )
}
