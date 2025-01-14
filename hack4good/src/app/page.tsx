// app/page.tsx
import Sidebar from '../components/sidebar'

type Product = {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 2.99 },
  { id: 2, name: 'Product 2', price: 3.49 },
  { id: 3, name: 'Product 3', price: 1.99 },
  { id: 4, name: 'Product 4', price: 5.99 },
  { id: 5, name: 'Product 5', price: 4.99 },
  { id: 6, name: 'Product 6', price: 6.49 },
]

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Supermarket Vending</h1>
        </header>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={`https://via.placeholder.com/200`}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">${product.price.toFixed(2)}</p>
              <button className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700">
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

