"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import Transactions from '../transactions/page'

type Request = {
    requestId: number
    residentId: string
    residentName: string
    residentImg: string
}

interface FormData {
  quantity: number
  item: string
}

const requests: Request[] = [
    { requestId: 1, residentId: "a1", residentName: "Adam", residentImg: `https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/24544933-ca76-403b-b102-56b18c235d74/ba8e5245-deaf-4acb-af8d-0ab1ba2d42a8.png` },
    { requestId: 2, residentId: "a2", residentName: "", residentImg: `https://via.placeholder.com/200` } ,
    { requestId: 3, residentId: "a3", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { requestId: 4, residentId: "a4", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { requestId: 5, residentId: "a5", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { requestId: 6, residentId: "a6", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { requestId: 7, residentId: "a7", residentName: "", residentImg: `https://via.placeholder.com/200` },
  ]

export default function Home() {

  const [reqFormData, setReqFormData] = useState({
    1: { id:'', name:'', password: '' },
    2: { id:'', name:'', password: '' },
    3: { id:'', name:'', password: '' },
    4: { id:'', name:'', password: '' },
    5: { id:'', name:'', password: '' },
    6: { id:'', name:'', password: '' },
    7: { id:'', name:'', password: '' },
  });

  const handleChange = (id: number, product:string, value: string) => {
    setReqFormData((prev) => ({
      ...prev,
      [id]: { ...prev[id], id: product, quantity: value },
    }));
  };

  const handleSubmit = (id: number) => {
    // Reset form data for that item after submission
    setReqFormData((prev) => ({
      ...prev,
      [id]: { id:'', quantity: ''},
    }));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-4">
        <div className="flex">
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Logout
            </button>
        </div>
        </header>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Resident password reset requests pending approval</h1>
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {requests.map((request) => (
            <div key={request.requestId} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={request.residentImg}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-teal-500">Resident name: {request.residentName}</p>
              <p className="text-teal-500">Resident user ID: {request.residentId}</p>
              <form onSubmit=   {handleSubmit} className="space-y-4">
              <div>
                <input
                    type="text"
                    id={request.residentId}
                    name={request.residentName}
                    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter new password"
                    value={reqFormData[request.requestId].password}
                    onChange={handleChange}
                    required
                />
              </div>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Approve
              </button>
              </form>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

