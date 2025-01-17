import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-teal-500 text-white h-screen p-4 sticky  top-0">
      <div className="text-center mb-6">
        <img src={'https://mwh.muhammadiyah.org.sg/wp-content/uploads/2021/06/mwh-esig-footer-062.png'}
                className="object-cover rounded-md mb-4"
              />
      </div>
      <nav>
        <ul>
          <li><Link href="/products" className="block py-2 hover:bg-teal-600 px-4">Products</Link></li>
          <li><Link href="/residents" className="block py-2 hover:bg-teal-600 px-4">Residents</Link></li>
          <li><Link href="/voucher_tasks" className="block py-2 hover:bg-teal-600 px-4">Voucher Tasks</Link></li>
          <li><Link href="/pending_claims" className="block py-2 hover:bg-teal-600 px-4">Pending Claims</Link></li>
          <li><Link href="/pending_password_resets" className="block py-2 hover:bg-teal-600 px-4">Pending Password Resets</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

