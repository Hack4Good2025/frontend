"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import Transactions from '../transactions/page'

type Task = {
  id: number
  name: string
  reward: number
  img: string
}

interface FormData {
  quantity: number
  item: string
}

const tasks: Task[] = [
    { id: 1, name: 'Hallway cleaning', reward: 30, img: `https://cdn-icons-png.flaticon.com/512/9818/9818876.png` },
    { id: 2, name: 'Event organisation', reward: 15, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNhe3i33SVxcmc8VeO8HhH3wJ0imFZB_PiQ&s` } ,
    { id: 3, name: 'Task 3', reward: 2, img: `https://via.placeholder.com/200` },
    { id: 4, name: 'Task 4', reward: 15, img: `https://via.placeholder.com/200` },
    { id: 5, name: 'Task 5', reward: 22, img: `https://via.placeholder.com/200` },
    { id: 6, name: 'Task 6', reward: 6, img: `https://via.placeholder.com/200` },
    { id: 7, name: 'Task 7', reward: 12, img: `https://via.placeholder.com/200` },
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
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Voucher Tasks</h1>
    <div className="mb-16 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300">
        <div className="flex space-x-4">
        <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
        className="w-full h-48 object-cover rounded-md mb-4"
        />
        <form onSubmit={handleSubmit} className="space-y-4">
            <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
            Add new task
            </button>
        </form>
        </div>
          {tasks.map((task) => (
            <div key={task.id} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
              <img
                src={task.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.name}</h3>
              <p className="text-teal-500">{task.reward.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700">
                Edit task
              </button>
            </div>
          ))}
        </div>
    </div>
      </main>
    </div>
  )
}

