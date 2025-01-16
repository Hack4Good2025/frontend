"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import Transactions from '../transactions/page'

type Product = {
  id: number
  name: string
  price: number
  img: string
}

interface FormData {
  quantity: number
  item: string
}

const userName = "Admin"
const products: Product[] = [
  { id: 1, name: 'Sponge', price: 30, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDNs2kL35Pq1sOfsrsKEoWCauclc1Z6DVpg&s` },
  { id: 2, name: 'Plastic Cup', price: 4, img: `https://m.media-amazon.com/images/I/617UaV14bVL.jpg` } ,
  { id: 3, name: 'Product 3', price: 2, img: `https://via.placeholder.com/200` },
  { id: 4, name: 'Product 4', price: 15, img: `https://via.placeholder.com/200` },
  { id: 5, name: 'Product 5', price: 22, img: `https://via.placeholder.com/200` },
  { id: 6, name: 'Product 6', price: 6, img: `https://via.placeholder.com/200` },
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
          <h1 className="text-4xl text-teal-700"><span className="font-bold">Welcome</span> {userName}!</h1>
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Logout
            </button>
        </div>
        </header>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Inventory</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
        className="w-full h-48 object-cover rounded-md mb-4"
        />
        <form onSubmit={handleSubmit} className="space-y-4">
            <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
            Add new product
            </button>
        </form>
        </div>
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">Price: {product.price.toFixed(0)} Vouchers</p>
              <p className="text-teal-500">Stock: {}</p>
              
              <form onSubmit=   {handleSubmit} className="space-y-4">
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Edit description
              </button>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Edit stock
              </button>
              </form>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

