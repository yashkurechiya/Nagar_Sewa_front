import React from 'react'

const RightHome = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="bg-zinc-100 p-5 rounded-lg relative">
       <h1 className='border-b text-xl font-semibold'>Community page</h1> 

      </div>
      <div  className='bg-zinc-100 p-5 rounded-lg'>
        <h1 className='border-b text-xl font-semibold'>Wards</h1>
         
            <ul>
                <li>Ward 1</li>
                <li>Ward 2</li>
                <li>Ward 3</li>
            </ul>
      </div>
      <div className='bg-zinc-100 p-5 rounded-lg'>
        <h1 className='border-b text-xl font-semibold'>Important Links</h1>
      </div>
    </div>
  )
}

export default RightHome
