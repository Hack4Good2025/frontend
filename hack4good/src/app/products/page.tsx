"use client"

import Sidebar from '../../components/sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Product = {
  productId: string
  name: string
  price: number
  img: string
  stock: number
}

const userName = "Admin"
const products: Product[] = [
  { productId: "1", name: 'Sponge', price: 30, stock: 10, img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDNs2kL35Pq1sOfsrsKEoWCauclc1Z6DVpg&s` },
  { productId: "2", name: 'Plastic Cup', price: 4, stock: 10, img: `https://m.media-amazon.com/images/I/617UaV14bVL.jpg` } ,
  { productId: "3", name: 'Product 3', price: 2, stock: 10, img: `https://via.placeholder.com/200` },
  { productId: "4", name: 'Product 4', price: 15, stock: 10, img: `https://via.placeholder.com/200` },
  { productId: "5", name: 'Product 5', price: 22, stock: 10, img: `https://via.placeholder.com/200` },
  { productId: "6", name: 'Product 6', price: 6, stock: 10, img: `https://via.placeholder.com/200` },
]

export default function Home() {

  const router = useRouter()
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [openDescIndex, setOpenDescIndex] = useState<number | null>(null);
  const [openStockIndex, setOpenStockIndex] = useState<number | null>(null);
  
  const [newProductFormData, setNewProductFormData] = useState({
    name: '',
    price: 0,
    img: '',
    stock: 0
  });

  const [descFormData, setDescFormData] = useState(
    products.map((product) => ({
      productId: product.productId,
      name: product.name,
      price: product.price,
      img: product.img
    }))
  );

  const [stockFormData, setStockFormData] = useState(
    products.map((product) => ({
      productId: product.productId,
      stock: product.stock
    }))
  );

  const openAddProductModal = () => setIsAddingProduct(true);
  const closeAddProductModal = () => setIsAddingProduct(false);

  const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewProductFormData({
          ...newProductFormData,
          [name]: name === 'price' || name === 'stock' ? parseInt(value, 10) : value
      });
  };

  const handleAddProductSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      const newProduct = { 
          ...newProductFormData, 
          productId: (products.length + 1).toString() 
      };

      products.push(newProduct); // Adding new product to the list
      alert('Product Added Successfully!');
      closeAddProductModal();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, productID: string, productPrice: number, productImage: string) => {
    const { name, value  } = e.target
    const updatedDescFormData = [...descFormData]
    updatedDescFormData[index] = { ...updatedDescFormData[index], productId: productID, name: value, price: productPrice, img: productImage }
    setDescFormData(updatedDescFormData)
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, productID: string, productName: string, productImage: string) => {
    const { name, value  } = e.target
    const updatedDescFormData = [...descFormData]
    updatedDescFormData[index] = { ...updatedDescFormData[index], productId: productID, name: productName, price: parseInt(value, 10), img: productImage }
    setDescFormData(updatedDescFormData)
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, productID: string, productName: string, productPrice: number) => {
    const { name, value  } = e.target
    const updatedDescFormData = [...descFormData]
    updatedDescFormData[index] = { ...updatedDescFormData[index], productId: productID, name: productName, price: productPrice, img: value }
    setDescFormData(updatedDescFormData)
  };

  const handleOpenDescModal = (index: number) => {
    const updatedDescFormData = [...descFormData];
    updatedDescFormData[index] = { 
        ...updatedDescFormData[index], 
        name: products[index].name,
        price: products[index].price,
        img: products[index].img
    };
    setDescFormData(updatedDescFormData);
    setOpenDescIndex(index);
  };

  const handleDescSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault()
    const descToSubmit = {
      productId: descFormData[index].productId || products[index].productId,
      name: descFormData[index].name || products[index].name,
      price: descFormData[index].price || products[index].price,
      img: descFormData[index].img || products[index].img
    };
    alert(`Product Updated: ${JSON.stringify(descToSubmit)}`);
    setOpenDescIndex(null);  // Close popup after submission
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, productID: string) => {
    const { name, value  } = e.target
    const updatedStockFormData = [...stockFormData]
    updatedStockFormData[index] = { ...updatedStockFormData[index], productId: productID, stock: parseInt(value, 10) }
    setStockFormData(updatedStockFormData)
  };

  const handleOpenStockModal = (index: number) => {
    const updatedStockFormData = [...stockFormData];
    updatedStockFormData[index] = { 
        ...updatedStockFormData[index], 
        stock: products[index].stock 
    };
    setStockFormData(updatedStockFormData);
    setOpenStockIndex(index);
  };

  const handleStockSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault();
    const stockToSubmit = stockFormData[index].stock || products[index].stock; 
    alert(`Product Stock Updated: ${stockToSubmit}`);
    setOpenStockIndex(null);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-4">
        <div className="flex">
          <h1 className="text-4xl text-teal-700"><span className="font-bold">Welcome</span> {userName}!</h1>
          <button className="ml-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Logout
            </button>
        </div>
        </header>
    <h1 className="text-3xl font-bold text-teal-700 mb-8">Inventory</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div key={999} className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md">
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"}
        className="w-full h-48 object-cover rounded-md mb-4"
        />
        <button 
            className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700"
            onClick={openAddProductModal}>
            Add New Product
        </button>

        {isAddingProduct && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
                    <form onSubmit={handleAddProductSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            onChange={handleNewProductChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Product Price"
                            onChange={handleNewProductChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <input
                            type="text"
                            name="img"
                            placeholder="Product Image URL"
                            onChange={handleNewProductChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <input
                            type="number"
                            name="stock"
                            placeholder="Product Stock"
                            onChange={handleNewProductChange}
                            className="w-full p-2 border rounded-md mb-2"
                            required
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-teal-600 text-white py-2 mt-2 rounded-lg hover:bg-teal-700">
                            Add Product
                        </button>
                        <button 
                            type="button"
                            className="w-full bg-gray-500 text-white py-2 mt-2 rounded-lg hover:bg-gray-700"
                            onClick={closeAddProductModal}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )}
        </div>
          {products.map((product, index) => (
            <div key={product.productId} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.img}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-teal-500">Price: {product.price} Vouchers</p>
              <p className="text-teal-500">Stock: {product.stock}</p>
              
              <button 
                type="button" 
                onClick={() => handleOpenDescModal(index)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                  Edit Product Description
              </button>

              {openDescIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                        <form onSubmit={(e)=>{handleDescSubmit(e, index)}}>
                            <input
                                type="text"
                                name="name"
                                defaultValue={product.name}
                                onChange={(e) => {handleNameChange(e, index, product.productId, product.price, product.img)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="price"
                                defaultValue={product.price}
                                onChange={(e) => {handlePriceChange(e, index, product.productId, product.name, product.img)}}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                            <input
                                type="text"
                                name="img"
                                defaultValue={product.img}
                                onChange={(e) => {handleImageChange(e, index, product.productId, product.name, product.price)}}
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
                onClick={() => handleOpenStockModal(index)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                  Edit Product Stock
              </button>

              {openStockIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4">Edit Product Stock</h2>
                        <form onSubmit={(e)=>{handleStockSubmit(e, index)}}>
                            <input
                                type="text"
                                name="stock"
                                defaultValue={product.stock}
                                onChange={(e) => {handleStockChange(e, index, product.productId)}}
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
            </div>
          ))}
          
        </section>
      </main>
    </div>
  )
}

