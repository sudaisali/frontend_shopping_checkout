import React, { useState } from 'react';
import StepSlider from './StepSlider';
import { IoMdClose } from "react-icons/io";
import ModalForm from './ModalForm';


const ModalBox = ({ isModalClose, handleFormSubmit, fetchClientSecret, stripePromise }) => {
  const [step, setStep] = useState(1);
  const [error , setErrors]=useState({})
  const [userInfo, setUserInfo] = useState({
    user_name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    phone_number: '',
  });


  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleNext = () => {
    const isNameValid = userInfo.user_name.trim() !== '';
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInfo.email.trim());
    const isAddressValid = userInfo.address.trim() !== '';
    const isPhoneNumberValid = /[0-9]{10,15}/.test(userInfo.phone_number.trim());
    const isStateValid = userInfo.state.trim() !== '';
    const isCityValid = userInfo.city.trim() !== '';


    const newErrors = {};

  if (userInfo.user_name.trim() === '') {
    newErrors.user_name = 'Name is required';
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInfo.email.trim())) {
    newErrors.email = 'Valid email is required';
  }

  if (userInfo.address.trim() === '') {
    newErrors.address = 'Address is required';
  }

  if (!/[0-9]{10,15}/.test(userInfo.phone_number.trim())) {
    newErrors.phone_number = 'Valid phone number is required';
  }

  if (userInfo.state.trim() === '') {
    newErrors.state = 'State is required';
  }

  if (userInfo.city.trim() === '') {
    newErrors.city = 'City is required';
  }
  
    if (isNameValid && isEmailValid && isAddressValid && isPhoneNumberValid && isStateValid && isCityValid) {
      setStep(step + 1);
      handleFormSubmit(userInfo);
    }
   
    setErrors(newErrors);
    
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 relative z-10 overflow-y-auto max-h-screen">
        <div className="p-4">
          <button><IoMdClose size={20} className='text-red-800' onClick={isModalClose} /></button>
          <h1 className="text-lg font-bold mb-2">Confirm Order</h1>
          <StepSlider step={step} />
          <ModalForm
            userInfo={userInfo}
            step={step}
            error={error}
            handleSubmit={handleSubmit}
            handleUserInfoChange={handleUserInfoChange}
            handleNext={handleNext}
            handleBack={handleBack}
            fetchClientSecret={fetchClientSecret}
            stripePromise={stripePromise} />
        </div>
      </div>
    </div>

  );
};

export default ModalBox;
