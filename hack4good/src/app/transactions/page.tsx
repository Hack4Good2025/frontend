import Sidebar from '../../components/sidebar'

type Transaction = {
  id: string
  date: string
  items: string
  total: number
  status: string
}

const transactions: Transaction[] = [
  { id: '00123', date: '2025-01-10', items: 'Product 1, Product 3, Product 5', total: 13.47, status: 'Completed' },
  { id: '00124', date: '2025-01-12', items: 'Product 2, Product 4', total: 9.48, status: 'Completed' },
  { id: '00125', date: '2025-01-14', items: 'Product 6', total: 6.49, status: 'Pending' },
]

export default function Transactions() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Transaction History</h1>
        </header>
        <section>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-teal-500 text-white">
                <th className="py-2 px-4">Transaction ID</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Items</th>
                <th className="py-2 px-4">Total Vouchers Used</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t hover:bg-gray-100">
                  <td className="py-2 px-4">{transaction.id}</td>
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.items}</td>
                  <td className="py-2 px-4">{transaction.total.toFixed(0)}</td>
                  <td className="py-2 px-4">{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

