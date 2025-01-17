"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Resident = {
  userId: string
  name: string
  voucherBalance: number
  password: string
  img: string
}

const residents: Resident[] = [
    { userId: "a1", name: 'Adam', voucherBalance: 10, password: "a", img: `https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/24544933-ca76-403b-b102-56b18c235d74/ba8e5245-deaf-4acb-af8d-0ab1ba2d42a8.png` },
    { userId: "a2", name: 'Ahmad', voucherBalance: 8, password: "a", img: `https://via.placeholder.com/200` } ,
    { userId: "a3", name: 'Ben', voucherBalance: 2, password: "a", img: `https://via.placeholder.com/200` },
    { userId: "a4", name: 'Resident 4', voucherBalance: 0, password: "a", img: `https://via.placeholder.com/200` },
    { userId: "a5", name: 'Resident 5', voucherBalance: 0, password: "a", img: `https://via.placeholder.com/200` },
    { userId: "a6", name: 'Resident 6', voucherBalance: 0, password: "a", img: `https://via.placeholder.com/200` },
    { userId: "a7", name: 'Resident 7', voucherBalance: 0, password: "a", img: `https://via.placeholder.com/200` },
  ]

export default function Home() {

  const router = useRouter()
  const [isAddingResident, setIsAddingResident] = useState(false);
  const [openDescIndex, setOpenDescIndex] = useState<number | null>(null);
  const [openBalanceIndex, setOpenBalanceIndex] = useState<number | null>(null);

  const [newResidentFormData, setNewResidentFormData] = useState({
    name: '',
    password: '',
    img: ''
  });

  const [descFormData, setDescFormData] = useState(
      residents.map((resident) => ({
        residentId: resident.userId,
        name: resident.name,
        password: resident.password,
        img: resident.img
      }))
    );

    const [balanceFormData, setBalanceFormData] = useState(
      residents.map((resident) => ({
        residentId: resident.userId,
        voucherBalance: resident.voucherBalance
      }))
    );
  
    const openAddResidentModal = () => setIsAddingResident(true);
    const closeAddResidentModal = () => setIsAddingResident(false);

    const handleNewResidentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewResidentFormData({
            ...newResidentFormData,
            [name]: value
        });
    };

    const handleAddResidentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newResident = { 
            ...newResidentFormData, 
            userId: (residents.length + 1).toString(),
            voucherBalance: 100
        };

        residents.push(newResident); // Adding new resident to the list
        alert('Resident Added Successfully!');
        closeAddResidentModal();
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, residentID: string, residentPassword: string, residentImage: string) => {
      const { name, value  } = e.target
      const updatedDescFormData = [...descFormData]
      updatedDescFormData[index] = { ...updatedDescFormData[index], residentId: residentID, name: value, password: residentPassword, img: residentImage }
      setDescFormData(updatedDescFormData)
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, residentID: string, residentName: string, residentImage: string) => {
      const { name, value  } = e.target
      const updatedDescFormData = [...descFormData]
      updatedDescFormData[index] = { ...updatedDescFormData[index], residentId: residentID, name: residentName, password: value, img: residentImage }
      setDescFormData(updatedDescFormData)
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, residentID: string, residentName: string, residentPassword: string) => {
      const { name, value  } = e.target
      const updatedDescFormData = [...descFormData]
      updatedDescFormData[index] = { ...updatedDescFormData[index], residentId: residentID, name: residentName, password: residentPassword, img: value }
      setDescFormData(updatedDescFormData)
    };

    const handleOpenDescModal = (index: number) => {
      const updatedDescFormData = [...descFormData];
      updatedDescFormData[index] = { 
          ...updatedDescFormData[index], 
          name: residents[index].name,
          password: residents[index].password,
          img: residents[index].img
      };
      setDescFormData(updatedDescFormData);
      setOpenDescIndex(index);
    };
  
    const handleDescSubmit = (e: React.FormEvent, index: number) => {
      e.preventDefault()
      const descToSubmit = {
        productId: descFormData[index].residentId || residents[index].userId,
        name: descFormData[index].name || residents[index].name,
        price: descFormData[index].password || residents[index].password,
        img: descFormData[index].img || residents[index].img
      };
      alert(`Resident Updated: ${JSON.stringify(descToSubmit)}`);
      setOpenDescIndex(null);  // Close popup after submission
    };

    const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, residentID: string) => {
      const { name, value  } = e.target
      const updatedBalanceFormData = [...balanceFormData]
      updatedBalanceFormData[index] = { ...updatedBalanceFormData[index], residentId: residentID, voucherBalance: parseInt(value, 10) }
      setBalanceFormData(updatedBalanceFormData)
    };
  
    const handleOpenBalanceModal = (index: number) => {
      const updatedBalanceFormData = [...balanceFormData];
      updatedBalanceFormData[index] = { 
          ...updatedBalanceFormData[index], 
          voucherBalance: residents[index].voucherBalance 
      };
      setBalanceFormData(updatedBalanceFormData);
      setOpenBalanceIndex(index);
    };
  
    const handleBalanceSubmit = (e: React.FormEvent, index: number) => {
      e.preventDefault();
      const balanceToSubmit = balanceFormData[index].voucherBalance || residents[index].voucherBalance; 
      alert(`Voucher Balance Updated: ${balanceToSubmit}`);
      setOpenBalanceIndex(null);
    };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-4">
        <div className="flex">
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Logout
            </button>
        </div>
        </header>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Residents</h1>
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
        className="w-full h-48 object-cover rounded-md mb-4"
        />
        <button 
            className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700"
            onClick={openAddResidentModal}>
            Add New Resident
        </button>

        {isAddingResident && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Add New Resident</h2>
                    <form onSubmit={handleAddResidentSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Resident Name"
                            onChange={handleNewResidentChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Resident Password"
                            onChange={handleNewResidentChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                            Add Resident
                        </button>
                        <button 
                            type="button"
                            className="w-full bg-gray-500 text-white py-2 mt-2 rounded-lg hover:bg-gray-700"
                            onClick={closeAddResidentModal}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )}
        </div>
          {residents.map((resident, index) => (
            <div key={resident.userId} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={resident.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{resident.name}</h3>
              <p className="text-teal-500">User ID: {resident.userId}</p>
              <p className="text-teal-500">Voucher Balance: {resident.voucherBalance.toFixed(0)}</p>
              
              <button 
                type="button" 
                onClick={() => handleOpenDescModal(index)}
                className="px-4 py-2 bg-teal-600 text-white mt-2 rounded-lg hover:bg-teal-700">
                  Edit Resident Description
              </button>

              {openDescIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Edit Resident</h2>
                        <form onSubmit={(e)=>{handleDescSubmit(e, index)}}>
                            <input
                                type="text"
                                name="name"
                                defaultValue={resident.name}
                                onChange={(e) => {handleNameChange(e, index, resident.userId, resident.password, resident.img)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="password"
                                defaultValue={resident.password}
                                onChange={(e) => {handlePasswordChange(e, index, resident.userId, resident.name, resident.img)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="image"
                                defaultValue={resident.img}
                                onChange={(e) => {handleImageChange(e, index, resident.userId, resident.name, resident.password)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <button 
                                type="submit"
                                className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
              )}

              <button 
                type="button" 
                onClick={() => handleOpenBalanceModal(index)}
                className="px-4 py-2 bg-teal-600 text-white mt-2 rounded-lg hover:bg-teal-700">
                  Edit Voucher Balance
              </button>

              {openBalanceIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Edit Voucher Balance</h2>
                        <form onSubmit={(e)=>{handleBalanceSubmit(e, index)}}>
                            <input
                                type="text"
                                name="voucher balance"
                                defaultValue={resident.voucherBalance}
                                onChange={(e) => {handleBalanceChange(e, index, resident.userId)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <button 
                                type="submit"
                                className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
              )}

              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                View {resident.name}'s pre-orders
              </button>
              <button className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                View {resident.name}'s transaction history
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

