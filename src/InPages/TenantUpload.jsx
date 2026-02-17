import React from 'react'

const TenantUpload = () => {
  return (
    <div className='h-screen bg-black text-white'> 
        <div className='flex flex-col gap-6 items-center justify-center h-full'>
            <h1 className='text-3xl font-bold'>Tenant Registration</h1>
            <form className='flex flex-col gap-4 w-96'>
                <input type="text" placeholder='Full Name' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <input type="email" placeholder='Email Address' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <input type="text" placeholder='Phone Number' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <input type="text" placeholder='Address' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <input type="text" placeholder='City' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <input type="text" placeholder='State' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <input type="text" placeholder='Zip Code' className='p-2 rounded bg-gray-800 border border-gray-600 focus:outline-yellow-500' />
                <button className='bg-yellow-600 text-black font-bold py-3 rounded hover:bg-yellow-700 transition transform duration-300'>Submit Registration</button>
            </form>
        </div>
    </div>
  )
}

export default TenantUpload
