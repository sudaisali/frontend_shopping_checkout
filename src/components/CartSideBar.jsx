import React from 'react'

const CartSideBar = ({totalAmount , proceedtopayment}) => {
  return (
    <div className='shadow flex flex-col'>
      <div className='flex flex-row justify-start items-center p-2'>
        <h1 className='text-sm lg:text-xl font-bold lg:mr-3'>Total Amount:</h1>
        <p className='lg:text-md font-semibold'>{`${totalAmount}$`}</p>
      </div>
      <button className='bg-gray-800 mx-3 mb-4 py-3 text-white text-md font-bold rounded-full' onClick={proceedtopayment}>
        Proceed To Payment
      </button>

    </div>
  )
}

export default CartSideBar