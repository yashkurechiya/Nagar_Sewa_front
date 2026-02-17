import React from 'react'
import TenantUpload from '../../InPages/TenantUpload'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className=' py-20 bg-black text-white'>
        <div><h1 className='font-semibold text-2xl flex justify-center py-5'>Pay Taxes</h1></div>
        <div className='grid grid-cols-3 text-center  py-10 justify-items-center gap-10 text-lg px-50 '>
            <Link to={`/service/watertax`}>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center   justify-center flex-col text-black font-semibold cursor-pointer text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'><span><img src="https://cdn-icons-png.flaticon.com/128/7534/7534983.png" className='w-20' alt="" /></span>Water Tax</div>
            </Link>
            <Link to={`/service/electricitybill`}>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-semibold cursor-pointer text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'><span><img src="https://cdn-icons-png.flaticon.com/128/2990/2990873.png" className='w-20' alt="" /></span>Electricity Bill</div>
            </Link>
            <Link to={`/service/propertytax`}>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-semibold cursor-pointer text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'><span><img src="https://cdn-icons-png.flaticon.com/128/602/602275.png" className='w-20' alt="" /></span>Property Tax</div>
            </Link>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-semibold cursor-pointer text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'><span><img src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png" className='w-20' alt="" /></span>Income Tax</div>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-semibold cursor-pointer text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'> <span><img src="https://cdn-icons-png.flaticon.com/128/3256/3256319.png" className='w-20' alt="" /></span>Garbage Tax</div>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-semibold cursor-pointer text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'><span><img src="https://cdn-icons-png.flaticon.com/128/9747/9747073.png" className='w-20' alt="" /></span>Gas Bill</div>
        </div>
        <div><h1 className='font-semibold text-2xl flex justify-center py-5'>Others</h1></div>
         <div className='grid grid-cols-3 text-center  py-10 justify-items-center gap-10 text-lg px-50 '>
                <Link to={`/service/tenantregistration`}>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center   justify-center flex-col text-black font-bold text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'>Tenant Registration</div>
            </Link>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-bold text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'>Food Licence</div>
            <div className='bg-zinc-100 w-75 h-40 rounded-xl bg-gradient-to-r from-black via-white to-white flex items-center justify-center flex-col text-black font-bold text-xl hover:bg-black hover:bg-gradient-to-r hover:from-white hover:to-white transition transform duration-300'>Other Services</div>
        </div>
        
    </div>
  )
}

export default Services
