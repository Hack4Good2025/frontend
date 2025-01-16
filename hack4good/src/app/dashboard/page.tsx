"use client"

import Sidebar from '../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
  img: string
}

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

const userName = "Tester"
const voucherCount = 100
const products: Product[] = [
  { id: 1, name: 'Sponge', price: 30, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDNs2kL35Pq1sOfsrsKEoWCauclc1Z6DVpg&s` },
  { id: 2, name: 'Plastic Cup', price: 4, img: `https://m.media-amazon.com/images/I/617UaV14bVL.jpg` } ,
  { id: 3, name: 'Product 3', price: 2, img: `https://via.placeholder.com/200` },
  { id: 4, name: 'Product 4', price: 15, img: `https://via.placeholder.com/200` },
  { id: 5, name: 'Product 5', price: 22, img: `https://via.placeholder.com/200` },
  { id: 6, name: 'Product 6', price: 6, img: `https://via.placeholder.com/200` },
]

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
          <h1 className="text-4xl text-teal-700"><span className="font-bold">Welcome</span> {userName}! You have <span className="font-bold">{voucherCount} </span>vouchers left.</h1>
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Logout
            </button>
          </div>
        </header>
        <div className="bg-teal-150 text-teal-700 p-4 mt-2 mb-4">
      	</div>
          <h1 className="text-3xl font-bold text-teal-700">Voucher System</h1>
        <div className="mb-16 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300">
        <div className="flex space-x-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
              <img
                src={task.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.name}</h3>
              <p className="text-teal-500">{task.reward.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700">
                Mark as complete
              </button>
            </div>
          ))}
        </div>
    </div>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Minimart</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">{product.price.toFixed(0)} Vouchers</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
		<div>
		  <input
		    type="text"
		    id={product.id}
		    name={product.name}
		    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
		    placeholder="Enter quantity"
		    value={reqFormData.quantity}
		    onChange={handleChange}
		    required
		  />
		</div>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Request for this
              </button>
		</form>
              
           </div>
          ))}
                    <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
              <img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{"Enter product naame"}</h3>
		<form onSubmit={handleSubmit} className="space-y-4">
		<div>
		  <input
		    type="text"
		    id="999"
		    name="preorder"
		    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
		    placeholder="Enter quantity"
		    value={reqFormData.quantity}
		    onChange={handleChange}
		    required
		  />
		</div>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Pre-order
              </button>
		</form>
            </div>
        </section>
      </main>
    </div>
  )
}


