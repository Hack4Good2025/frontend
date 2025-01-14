import Sidebar from '../../components/sidebar'

type UserProfile = {
  name: string
  email: string
  phone: string
  address: string
}

export default function Profile() {
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, Springfield, IL 62701',
  }


  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">User Profile</h1>
        </header>
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
            <div className="space-y-4">
              <div><strong>Name:</strong> {userData.name}</div>
              <div><strong>Email:</strong> {userData.email}</div>
              <div><strong>Phone:</strong> {userData.phone}</div>
              <div><strong>Address:</strong> {userData.address}</div>
            </div>
          </div>

         
        </section>
      </main>
    </div>
  )
}

