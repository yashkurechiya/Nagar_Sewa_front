import React from 'react'

const LeftHero = () => {
  return (
    <div className=' p-5 w-72   justify-center items-left flex flex-col gap-5'>
      <div className='bg-zinc-100 p-5 rounded-lg'>
        <img src="" alt="mayor" className='rounded-full' />
        <div className='text-xl font-semibold'>Mayor name</div>
        <p>Indore</p>
        <p className='text-sm'>Since 2022</p>
      </div>
      <div className='bg-zinc-100 p-5 rounded-lg'>
        <p> Complaints Registered <span> 100+ </span></p>
        <p>Complaints Solved <span> 90+ </span></p>
        <p>Complaints Pending <span> 10+ </span></p>
      </div>
      <div>
        <button className='p-2 rounded-lg bg-black  text-white text-sm '>View Profile</button>
      </div>
    </div>
  )
}

export default LeftHero
