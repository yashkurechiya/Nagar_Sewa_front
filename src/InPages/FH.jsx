import React from 'react'
import { MdOutlinePublic } from "react-icons/md";

const FH = () => {
  return (
    <div className='grid grid-cols-4 px-15 py-10 -mt-10 gap-5 '>
      <div className='text-center p-5 flex bg-zinc-900 flex-col shadow items-center'>
        <span className='flex items-center gap-2'>

          <MdOutlinePublic className='text-blue-600 text-4xl' />
          <p className='font-semibold text-zinc-100 text-xl'>2000+</p>
        </span>
        <h1 className='text-lg font-semibold text-zinc-100'>User Engagement</h1>
      </div>
      <div className='text-center p-5 flex bg-zinc-900 flex-col shadow items-center'>
        <span className='flex items-center gap-2'>

          <img src="https://cdn-icons-png.flaticon.com/128/6785/6785304.png" className='w-8' alt="" />
          <p className='font-semibold text-zinc-100 text-xl'>100+</p>
        </span>
        <h1 className='text-lg font-semibold text-zinc-100'>Solved Complaints</h1>
      </div>
      <div className='text-center p-5 gap-2 flex bg-zinc-900 flex-col shadow items-center'>
      <span className='flex items-center gap-2'>
        <img src="https://cdn-icons-png.flaticon.com/128/16265/16265301.png" className='w-8' alt="" />
         <p className='font-semibold text-zinc-100 text-xl'>50+</p>
        </span>
        <h1 className='text-lg font-semibold text-zinc-100'>Pending Complaints</h1>
      </div>
      <div className='text-center p-5 gap-2 flex bg-zinc-900 flex-col shadow items-center'>
        <span className='flex items-center gap-2'>
           <img src="https://cdn-icons-png.flaticon.com/128/11695/11695444.png" className='w-8' alt="" />
          <p className='font-semibold text-zinc-100 text-xl'>10+</p>
        </span>
        <h1 className='text-lg font-semibold text-zinc-100'>Rejected Complaints</h1>
      </div>
    </div>
  )
}

export default FH
