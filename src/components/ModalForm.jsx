import React from 'react';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';


const ModalForm = ({error, userInfo, step, handleSubmit, handleUserInfoChange, handleNext, handleBack, stripePromise, fetchClientSecret }) => {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
       <div>
       <div className="mb-4">
         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
         <input type="text" id="user_name" name="user_name" value={userInfo.user_name} onChange={handleUserInfoChange} required className="border border-gray-300 rounded-md p-2 w-full" />
         {error.user_name && <span className="text-red-500">{error.user_name}</span>}
       </div>
       <div className="mb-4">
         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
         <input type="email" id="email" name="email" value={userInfo.email} onChange={handleUserInfoChange} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" className="border border-gray-300 rounded-md p-2 w-full" />
         {error.email && <span className="text-red-500">{error.email}</span>}
       </div>
       <div className="mb-4">
         <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
         <textarea id="address" name="address" value={userInfo.address} onChange={handleUserInfoChange} required className="border border-gray-300 rounded-md p-2 w-full"></textarea>
         {error.address && <span className="text-red-500">{error.address}</span>}
       </div>
       <div className="mb-4">
         <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
         <input type="tel" id="phone_number" name="phone_number" value={userInfo.phone_number} onChange={handleUserInfoChange} required pattern="[0-9]{10,15}" className="border border-gray-300 rounded-md p-2 w-full" />
         {error.phone_number && <span className="text-red-500">{error.phone_number}</span>}
       </div>
       <div className="mb-4">
         <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
         <input type="text" id="state" name="state" value={userInfo.state} onChange={handleUserInfoChange} required className="border border-gray-300 rounded-md p-2 w-full" />
         {error.state && <span className="text-red-500">{error.state}</span>}
       </div>
       <div className="mb-4">
         <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
         <input type="text" id="city" name="city" value={userInfo.city} onChange={handleUserInfoChange} required className="border border-gray-300 rounded-md p-2 w-full" />
         {error.city && <span className="text-red-500">{error.city}</span>}
       </div>
       <div className="flex justify-end">
         <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleNext}>Next</button>
       </div>
     </div>
     
      )}
      {step === 2 && (
        <div>
          <div id="checkout">
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ fetchClientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
    </form>
  );
}

export default ModalForm;
