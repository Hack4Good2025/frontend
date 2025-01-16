"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Product = {
  id: number
  name: string
  price: number
  img: string
  stocked: boolean
}

type Task = {
  id: number
  name: string
  reward: number
  img: string
  claimed: boolean
  distributed: boolean
}

const userName = "Tester"
const voucherCount = 100
const products: Product[] = [
  { id: 1, name: 'Sponge', price: 30, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDNs2kL35Pq1sOfsrsKEoWCauclc1Z6DVpg&s`, stocked: true },
  { id: 2, name: 'Plastic Cup', price: 4, img: `https://m.media-amazon.com/images/I/617UaV14bVL.jpg`, stocked: true } ,
  { id: 3, name: 'Product 3', price: 2, img: `https://via.placeholder.com/200`, stocked: true },
  { id: 4, name: 'Product 4', price: 15, img: `https://via.placeholder.com/200`, stocked: false},
  { id: 5, name: 'Product 5', price: 22, img: `https://via.placeholder.com/200`, stocked: false },
  { id: 6, name: 'Product 6', price: 6, img: `https://via.placeholder.com/200`, stocked: true },
]

const tasks: Task[] = [
  { id: 1, name: 'Hallway cleaning', reward: 30, claimed: false, distributed: false, img: `https://cdn-icons-png.flaticon.com/512/9818/9818876.png` },
  { id: 2, name: 'Event organisation', reward: 15, claimed: false, distributed: false, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNhe3i33SVxcmc8VeO8HhH3wJ0imFZB_PiQ&s` } ,
  { id: 3, name: 'Task 3', reward: 2, claimed: false, distributed: false, img: `https://via.placeholder.com/200` },
  { id: 4, name: 'Task 4', reward: 15, claimed: true, distributed: false, img: `https://via.placeholder.com/200` },
  { id: 5, name: 'Task 5', reward: 22, claimed: true, distributed: false, img: `https://via.placeholder.com/200` },
  { id: 6, name: 'Task 6', reward: 6, claimed: false, distributed: false, img: `https://via.placeholder.com/200` },
  { id: 7, name: 'Task 7', reward: 12, claimed: false, distributed: false, img: `https://via.placeholder.com/200` },
]

export default function Home() {

  const router = useRouter()
  const { userId } = router.query
  
  const getTasks = async ( userID: string, password: string ) => {
      try {

      const response = await fetch('https://0f2e-137-132-26-153.ngrok-free.app/api/vouchers/viewtasks', {
        method: 'POST'
      })
    
      if (!response.ok) {
        throw new Error('Get tasks failed')
      }

      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.error('Error getting tasks:', error)
    }
  }
  
  const [reqFormData, setReqFormData] = useState(products.map((product) => ({
      id: product.id,
      product: '',
      quantity: ''
    })));

  /* Functions for managing the status for voucher claims*/
  const handleTaskSubmit = (index: number) => {
    alert(`Request submitted!`)
  };

  /* Functions for managing the form status for product request*/
  const handleReqChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, product: string, quantity: number) => {
    const { name, value  } = e.target
    const updatedReqFormData = [...reqFormData]
    updatedReqFormData[index] = { ...updatedReqFormData[index], product: product, quantity: value }
    setReqFormData(updatedReqFormData)
  };

  const handleReqSubmit = ( e: React.FormEvent, index: number) => {
    e.preventDefault()
    const reqToSubmit = reqFormData[index]  
    alert("Request submitted!")
    const updatedReqFormData = [...reqFormData]
    updatedReqFormData[index] = { ...updatedReqFormData[index], product: '', quantity: '' }
    setReqFormData(updatedReqFormData)
  };
  
  /* Functions for managing the form status for preorder request*/
  const handlePreorderSubmit = ( e: React.FormEvent, index: number ) => {
    e.preventDefault()
    const reqToSubmit = reqFormData[index]  
    alert("Preorder submitted!")
    const updatedReqFormData = [...reqFormData]
    updatedReqFormData[index] = { ...updatedReqFormData[index], product: '', quantity: '' }
    setReqFormData(updatedReqFormData)
  };
  
  
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/')
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-4">
        <div className="flex">
          <h1 className="text-4xl text-teal-700"><span className="font-bold">Welcome</span> {userName}! You have <span className="font-bold">{voucherCount} </span>vouchers left.</h1>
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>
        <div className="bg-teal-150 text-teal-700 p-4 mt-2 mb-4">
      	</div>
          <h1 className="text-3xl font-bold text-teal-700">Voucher System</h1>
        <div className="mb-16 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-300">
        <div className="flex space-x-4">
          {tasks.map((task) => task.claimed? (
            <div key={task.id} className="flex-shrink-0 bg-green-200 p-4 rounded-lg shadow-md">
              <img
                src={task.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.name}</h3>
              <p className="text-teal-500">Reward: {task.reward.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700 cursor-not-allowed disabled">
                Claimed: Processing
              </button>
            </div>
          ):(
            <div key={task.id} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
              <img
                src={task.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.name}</h3>
              <p className="text-teal-500">Reward: {task.reward.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700"
              onClick={() => handleTaskSubmit(task.id)}>
                Mark as complete
              </button>
            </div>
          ))}
        </div>
    </div>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Minimart</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => product.stocked?(
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">Price: {product.price.toFixed(0)} Vouchers</p>
              
              <form onSubmit={(e) => handleReqSubmit(e, index)} className="space-y-4">
		<div>
		  <input
		    type="text"
		    id={product.id}
		    name={product.name}
		    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
		    placeholder="Enter quantity"
		    value={reqFormData[index].quantity}
		    onChange={(e) => handleReqChange(e, index, index)}
		    required
		  />
		</div>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Request for this
              </button>
		</form>
              
           </div>
          ):(
          <div key={product.id} className="bg-gray-200 opacity-70 p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                className="w-full h-48 object-cover rounded-md mb-4 opacity-70"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">Price: {product.price.toFixed(0)} Vouchers</p>
              
              <form onSubmit={(e) => handlePreorderSubmit(e, index)} className="space-y-4">
		<div>
		  <input
		    type="text"
		    id={product.id}
		    name={product.name}
		    className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
		    placeholder="Enter quantity"
		    value={reqFormData[index].quantity}
		    onChange={(e) => handleReqChange(e, index, index)}
		    required
		  />
		</div>
              <button className="w-full bg-red-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                Preorder for this
              </button>
		</form>
              
           </div>
          ))}
        </section>
      </main>
    </div>
  )
}


