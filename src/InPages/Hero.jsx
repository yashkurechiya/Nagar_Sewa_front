import React from 'react'
import indore from '../assets/indore.webp'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <img className='h-full -my-20 absolute object-fit w-full' src={indore} alt="Indore" />

      <div className='h-screen -my-20 bg-black opacity-50 absolute w-full z-10'></div>

      <div className='flex justify-between items-end h-160 relative z-20 px-20 py-10'>

        <div className='z-25 w-82 gap-5 relative text-white  p-4 m-4 rounded-lg flex flex-col items-start  justify-center text-start'>
          <div className='bg-black absolute w-70 h-full opacity-50'></div>
          <h1 className='text-xl px-5 z-30 text-red-600 font-semibold underline text-start'>Emergency Complaints</h1>
          <ul className='z-30 px-7 gap-2 flex flex-col list-disc'>
            <li>Water line broken Vijay nagar <span className='underline text-blue-600'>  new</span></li>
            <li>Road collapsed near MG Road</li>
            <li>Fire at Palasia <span className='underline text-blue-600'>  new</span></li>
            <li>Electrical hazard at Railway Station</li>
            <li>Gas leak in Rajwada area</li>
            <li>Building collapse risk near Chhatri Bagh</li>
            <li>Severe flooding in Khajrana</li>
          </ul>
        </div>
        <div className='text-white items-center mb-20 justify-center flex flex-col gap-5'>
          <img src={logo} alt="NagarSewa Logo" className='w-50 opacity-80 bg-white rounded-full' />
          <h1 className='text-3xl font-bold text-center'>Smart Urban Governance Platform</h1>
          <p className='text-xl text-center font-semibold italic'>"Your Digital Bridge to Transparent <br /> Municipal Administration"</p>
          <Link to="/registerComplaint">
          <button className='bg-red-600 p-2 cursor-pointer  rounded-lg font-semibold hover:bg-red-700'>Register Complaint</button>
          </Link>
        </div>
        <div className='z-25 w-70 gap-5 relative text-white  p-4 m-4 rounded-lg flex flex-col items-center justify-center text-center'>
          <div className='bg-black absolute w-70 h-full opacity-50'></div>
          <img src="https://imcindore.mp.gov.in/uploads/Beige_Vintage_Scrapbook_Torn_Paper_Page_Border_2_50ad6e5aa6.png" className='w-30 z-30' alt="" />
          <h1 className='text-xl z-30 font-semibold'>Mr. Pushyamitra Bhargav</h1>
          <p className='z-3'>"Our city has achieved unparalleled successes which are the result of your hard work and collective effort."</p>
          <strong className='z-30'>Mayor, IMC Indore</strong>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
