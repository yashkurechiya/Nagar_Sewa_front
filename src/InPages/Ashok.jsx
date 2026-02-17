import React from 'react'
import ashok from '../assets/asho.png'
const Ashok = () => {
  return (
    <div className='bg-red-700 absolute z-40 top-25 text-white w-55 h-10 flex items-center justify-start  font-bold'>
      <img src={ashok} alt="Ashok" className='w-12 ' />
     <p className='text-sm'> Government of India</p>
    </div>
  )
}

export default Ashok
