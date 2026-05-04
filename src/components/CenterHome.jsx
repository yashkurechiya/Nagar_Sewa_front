import React from 'react'
import construct from '../assets/construct.png'
import { Link } from 'react-router-dom'

const CenterHome = () => {
  return (
    <div className=' '>
      <div className=' relative w-125'>
        <img src={construct} className='h-82 absolute w-124' alt="Construction" />
        <div className='z-10 relative left-10 top-20'>
            <h1 className='text-3xl mb-2 font-semibold'>Have a Complaint?</h1>
            <p className='text-sm' >Raise a complaint and we  will fix it <br /> as soon as possible.</p>
            <Link to={'/registerComplaint'}>
            <button className='mt-4 px-4 py-2 cursor-pointer hover:bg-black/80 bg-black text-white rounded'>Raise Complaint</button>
            </Link>
        </div>
      </div>
      <div className='relative w-125 mt-50 p-5 border border-gray-300 rounded-lg'>
        <h1 className='border-b text-xl font-semibold'>Anonymous Complaints</h1>
        <p>Description about anonymous complaints.</p>
        <div className='h-50 bg-zinc-100'>Image </div>
        <div>
            <ul className='flex gap-10'>
                <li>Submitted</li>
                <li>In Progress</li>
                <li>Resolved</li>
            </ul>
        </div>
        <div>
            <button className='mt-4 px-4 py-2 cursor-pointer hover:bg-black/80 bg-black text-white rounded'>Learn More</button>
        </div>
      </div>
      
    </div>
  )
}

export default CenterHome
