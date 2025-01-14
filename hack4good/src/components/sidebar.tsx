import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-teal-500 text-white h-screen p-4 sticky  top-0">
      <div className="text-center mb-6">
        <img src={'https://mwh.muhammadiyah.org.sg/wp-content/uploads/2021/06/mwh-esig-footer-062.png'}
                className="object-cover rounded-md mb-4"
              />
      </div>
      <nav>
        <ul>
          <li><Link href="/" className="block py-2 hover:bg-teal-600 px-4">Dashboard</Link></li>
          <li><Link href="/transactions" className="block py-2 hover:bg-teal-600 px-4">Transactions</Link></li>
          <li><Link href="/profile" className="block py-2 hover:bg-teal-600 px-4">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

