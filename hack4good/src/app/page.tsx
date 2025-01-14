import Sidebar from '../components/sidebar'
import Link from 'next/link'

type Product = {
  id: number
  name: string
  price: number
  img: string
}

const products: Product[] = [
  { id: 1, name: 'Sponge', price: 30, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDNs2kL35Pq1sOfsrsKEoWCauclc1Z6DVpg&s` },
  { id: 2, name: 'Plastic Cup', price: 4, img: `https://m.media-amazon.com/images/I/617UaV14bVL.jpg` } ,
  { id: 3, name: 'Product 3', price: 2, img: `https://via.placeholder.com/200` },
  { id: 4, name: 'Product 4', price: 15, img: `https://via.placeholder.com/200` },
  { id: 5, name: 'Product 5', price: 22, img: `https://via.placeholder.com/200` },
  { id: 6, name: 'Product 6', price: 6, img: `https://via.placeholder.com/200` },
]

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Minimart and Voucher System</h1>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Logout
            </button>
          </div>
        </header>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">{product.price.toFixed(0)} Vouchers</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700">
                Request for this
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

