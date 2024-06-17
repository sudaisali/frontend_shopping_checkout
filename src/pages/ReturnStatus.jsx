import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BaseURL , endpoints } from '../service.js/endpoints';


const ReturnStatus = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); 
  
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      fetch(`${BaseURL}${endpoints.session_status}?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.session.status);
          setCustomerEmail(data.session.customer_email);
          if (data.session.status === 'complete') {
            setShowModal(true);
          }
        });
    }, []);
    
    if (status === 'complete' && showModal) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-gray-800 text-4xl mr-2" />
              <h1 className="text-gray-800 font-bold">Order Confirmed!</h1>
            </div>
            <p className="text-center">
              We appreciate your business! A confirmation email will be sent to {customerEmail}.
              <br />
              If you have any questions, please email <a href="mailto:orders@example.com" className="text-gray-800 underline">orders@example.com</a>.
            </p>
            <button
              onClick={() => {
                setShowModal(false)
                navigate('/product');              
            
            }
            }
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      );
    }
  
    return null;
};

export default ReturnStatus;
