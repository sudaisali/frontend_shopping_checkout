import React, { useState,useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'
import CartCard from '../components/CartCard'
import CartSideBar from '../components/CartSideBar'
import ModalBox from '../components/ModalBox'
import { loadStripe } from '@stripe/stripe-js';
import { BsFillCartXFill } from "react-icons/bs";
import { BaseURL, endpoints } from '../service.js/endpoints'

const AddToCart = () => {

  const cart  = useContext(CartContext)
  const [openModal , setOpenModal] = useState(false)
  const [formData, setFormData] = useState(null);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIP_KEY);




  const handleFormSubmit = (userInfo) => {
   setFormData({ ...userInfo, products: cart.items });
  };

  
  const proceedtopayment = ()=>{
    isModalOpen()
  }

  const isModalOpen=()=>{
    setOpenModal(true)
  }

  const isModalClose = ()=>{
    setOpenModal(false)
  }
   
const fetchClientSecret = async () => {
  try {
    const response = await fetch(`${BaseURL}${endpoints.checkout}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), 
      
    });
    const data = await response.json();
    return data.clientSecret;
  } catch (error) {
    console.error("Error fetching client secret:", error);
    throw error;
  }
}
  return (
   <section>
    {cart.items.length === 0 ? (
  <div className='w-full h-full flex flex-col justify-center items-center'>
    <BsFillCartXFill size={70} className='text-red-800'/>
    <p>No items in cart</p>
  </div>
) : (
  <div className='flex lg:flex-row flex-col'>
    <div className='w-full h-auto lg:h-screen p-4 overflow-y-auto'>
      {cart.items.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
    <div className='w-full lg:w-1/2 p-5'>
      <CartSideBar totalAmount={cart.totalCartItemsPrice()} proceedtopayment={proceedtopayment}/>
      {openModal && <ModalBox isModalClose={isModalClose} handleFormSubmit={handleFormSubmit} stripePromise={stripePromise} fetchClientSecret={fetchClientSecret}></ModalBox>}
    </div>
  </div>
)}
   </section>

  )
}

export default AddToCart