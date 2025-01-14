import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-teal-500 text-white h-screen p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Supermarket</h2>
      </div>
      <nav>
        <ul>
          <li><Link href="/" className="block py-2 hover:bg-teal-600 px-4">Home</Link></li>
          <li><Link href="/transactions" className="block py-2 hover:bg-teal-600 px-4">Transactions</Link></li>
          <li><Link href="/profile" className="block py-2 hover:bg-teal-600 px-4">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

