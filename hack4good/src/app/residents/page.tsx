"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import Transactions from '../transactions/page'

type Resident = {
  userId: string
  name: string
  voucherBalance: number
  img: string
}

interface FormData {
  quantity: number
  item: string
}

const residents: Resident[] = [
    { userId: "a1", name: 'Adam', voucherBalance: 10, img: `https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/24544933-ca76-403b-b102-56b18c235d74/ba8e5245-deaf-4acb-af8d-0ab1ba2d42a8.png` },
    { userId: "a2", name: 'Ahmad', voucherBalance: 8, img: `https://via.placeholder.com/200` } ,
    { userId: "a3", name: 'Ben', voucherBalance: 2, img: `https://via.placeholder.com/200` },
    { userId: "a4", name: 'Resident 4', voucherBalance: 0, img: `https://via.placeholder.com/200` },
    { userId: "a5", name: 'Resident 5', voucherBalance: 0, img: `https://via.placeholder.com/200` },
    { userId: "a6", name: 'Resident 6', voucherBalance: 0, img: `https://via.placeholder.com/200` },
    { userId: "a7", name: 'Resident 7', voucherBalance: 0, img: `https://via.placeholder.com/200` },
  ]

export default function Home() {

  const [reqFormData, setReqFormData] = useState({
    1: { id:'', quantity: '' },
    2: { id:'', quantity: '' },
    3: { id:'', quantity: '' },
    4: { id:'', quantity: '' },
    5: { id:'', quantity: '' },
    6: { id:'', quantity: '' },
    7: { id:'', quantity: '' },
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
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Residents</h1>
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
        className="w-full h-48 object-cover rounded-md mb-4"
        />
        <form onSubmit={handleSubmit} className="space-y-4">
            <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
            Add new resident
            </button>
        </form>
        </div>
          {residents.map((resident) => (
            <div key={resident.userId} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={resident.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{resident.name}</h3>
              <p className="text-teal-500">User ID: {resident.userId}</p>
              <p className="text-teal-500">Voucher Balance: {resident.voucherBalance.toFixed(0)}</p>
              
              <form onSubmit=   {handleSubmit} className="space-y-4">
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Edit description
              </button>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                View {resident.name}'s pre-orders
              </button>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                View {resident.name}'s transaction history
              </button>
              </form>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

