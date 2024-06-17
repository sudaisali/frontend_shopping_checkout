import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'
import { MdDelete } from "react-icons/md";

const CartCard = ({ item }) => {
    const cart = useContext(CartContext)
    return (
        <div className='shadow-lg flex flex-row p-2 justify-between items-center w-full'>
            <div className='flex items-center'>
                <div className='w-20 h-auto p-3'>
                    <img className=' w-20 h-20 object-cover' src={item.image} alt={item.name} />
                </div>

                <div className='ml-4 flex flex-col justify-center'>
                    <h1 className='text-md font-semibold truncate-singleline '>{item.name}</h1>
                    <div className='flex items-center mt-2'>
                        <button
                            className='bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2'
                            onClick={() => { cart.removeOneItem(item) }}
                        >
                            <span className="text-xs">-</span>
                        </button>
                        <p className=' '>{item.quantity}</p>
                        <button
                            className={`bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center ml-2 ${item.quantity >= item.product_quantity ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            onClick={() => {
                                if (item.quantity < item.product_quantity) {
                                    cart.addOneItem(item);
                                }
                            }}
                            disabled={item.quantity >= item.product_quantity}
                        >
                            <span className="text-xs">+</span>
                        </button>
                    </div>
                    <p className='text-sm mt-2'><span className='font-bold'>Total:</span> {cart.itemTotal(item.quantity, item.price)}</p>
                </div>
            </div>
            <div>
                <MdDelete size={24} onClick={() => cart.deleteItem(item)} className="text-red-500 cursor-pointer" />

            </div>
        </div>


    )
}

export default CartCard