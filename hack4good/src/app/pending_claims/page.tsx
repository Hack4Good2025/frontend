"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import Transactions from '../transactions/page'

type Claim = {
    voucherId: number
    residentId: number
    voucherTaskName: string
    residentName: string
    residentImg: string
}

interface FormData {
  quantity: number
  item: string
}

const claims: Claim[] = [
    { voucherId: 1, residentId: 11, voucherTaskName: "Hallway Cleaning", residentName: "Adam", residentImg: `https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/24544933-ca76-403b-b102-56b18c235d74/ba8e5245-deaf-4acb-af8d-0ab1ba2d42a8.png` },
    { voucherId: 2, residentId: 22, voucherTaskName: "Event Organisation", residentName: "", residentImg: `https://via.placeholder.com/200` } ,
    { voucherId: 3, residentId: 33, voucherTaskName: "Task A", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { voucherId: 4, residentId: 44, voucherTaskName: "Task B", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { voucherId: 5, residentId: 55, voucherTaskName: "Task C", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { voucherId: 6, residentId: 66, voucherTaskName: "Task D", residentName: "", residentImg: `https://via.placeholder.com/200` },
    { voucherId: 7, residentId: 77, voucherTaskName: "Task E", residentName: "", residentImg: `https://via.placeholder.com/200` },
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
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Resident voucher claims pending approval</h1>
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {claims.map((claim) => (
            <div key={claim.voucherId} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={claim.residentImg}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{claim.voucherTaskName}</h3>
              <p className="text-teal-500">Resident name: {claim.residentName}</p>
              <p className="text-teal-500">Resident user ID: {claim.residentId}</p>
              <form onSubmit=   {handleSubmit} className="space-y-4">
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

