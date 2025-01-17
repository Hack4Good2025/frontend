"use client"

import AdminSidebar from '../../components/admin_sidebar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams  } from 'next/navigation'

type Product = {
  createdAt: object
  description: string
  id: string
  imageUrl: string
  name: string
  price: number
  productId: string
  stock: number
  updatedAt: object
  img: string
}

type Task = {
  claimStatus: boolean
  createdAt: object
  distributedStatus: boolean
  taskName: string
  updatedAt: Object
  userId: string
  value: number
  voucherTaskId: string
  imageUrl: string
}

const userName = "Tester"
const voucherCount = 100

export default function Home() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const userID = searchParams.get("userId")
  
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  
  const [products, setProducts] = useState<Product[]>([]) // 
  const [tasks, setTasks] = useState<Task[]>([]) 

  const getTasks = async () => {
      try {

      const response = await fetch('https://hack4good2025-backend-1.onrender.com/api/vouchers/viewtasks/all', {
        method: 'GET'
      })
    
      if (!response.ok) {
        throw new Error('Get tasks failed')
      }

      const result = await response.json()
      console.log(result)
      setTasks(result)
      console.log(products)
    } catch (error) {
      console.error('Error getting tasks:', error)
    }
  }
  
  const getProducts = async () => {
      try {

      const response = await fetch('https://hack4good2025-backend-1.onrender.com/api/adminTransactions/products/view/all', {
        method: 'GET'
      })
    
      if (!response.ok) {
        throw new Error('Get products failed')
      }
      const result = await response.json()
      console.log(result)
      setProducts(result)
      console.log(products)
    } catch (error) {
      console.error('Error getting products:', error)
    }
  }
  
  const [reqFormData, setReqFormData] = useState(products.map((product) => ({
      id: product.id,
      product: '',
      quantity: ''
    })));

  /* Functions for managing the status for voucher claims*/
  const handleTaskSubmit = (taskId: string) => {
    alert(`Request submitted!`)
  };

  /* Functions for managing the form status for product request*/
  const handleReqChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, productName: string) => {
    const { name, value  } = e.target
    const updatedReqFormData = [...reqFormData]
    updatedReqFormData[index] = { ...updatedReqFormData[index], product: productName, quantity: value }
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
  
  useEffect(() => {
  	getTasks()
  	getProducts()
  }, [])

  return (
    <div className="flex">
      <AdminSidebar />
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
          {tasks.map((task) => task.claimStatus? (
            <div key={task.voucherTaskId} className="flex-shrink-0 bg-green-200 p-4 rounded-lg shadow-md">
              <img
                src={task.imageUrl}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.taskName}</h3>
              <p className="text-teal-500">Reward: {task.value.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700 cursor-not-allowed disabled">
                Claimed: Processing
              </button>
            </div>
          ):(
            <div key={task.voucherTaskId} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
              <img
                src={task.imageUrl}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{task.taskName}</h3>
              <p className="text-teal-500">Reward: {task.value.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700"
              onClick={() => handleTaskSubmit(task.voucherTaskId)}>
                Mark as complete
              </button>
            </div>
          ))}
        </div>
    </div>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Minimart</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => product.stock>0?(
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
		    onChange={(e) => handleReqChange(e, index, product.name)}
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
		    onChange={(e) => handleReqChange(e, index, product.name)}
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


