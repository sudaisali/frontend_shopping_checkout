import React from 'react'

const StepSlider = ({step}) => {
  return (
    <div className="flex justify-around mb-6">
    <div className={`w-1/2 text-center ${step >= 1 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
      <div className={`h-1 mb-2 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      Customer Information
    </div>
    <div className={`w-1/2 text-center ${step >= 2 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
      <div className={`h-1 mb-2 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      Payment Information
    </div>
  </div>
  )
}

export default StepSlider