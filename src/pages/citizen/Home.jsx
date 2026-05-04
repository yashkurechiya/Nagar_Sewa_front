import React from 'react'
import Hero from '../../InPages/Hero'
import HomeHero from '../../InPages/HomeHero'
import ShowComplaints from '../ShowComplaits'
import FH from '../../InPages/FH'

const Home = () => {
  return (
    <div>
        <Hero />

        <div className='bg-black'>
          <FH />

        <ShowComplaints />
        </div>
        <div className='flex justify-center mt-5 mb-0 fixed w-full left-0 bottom-0'>
            <div className="h-10 w-full bg-red-600 font-bold text-white p-2 text-center">
        इस पोर्टल पर झूठी या भ्रामक शिकायत दर्ज करना दंडनीय हो सकता है।
        उपयोगकर्ता द्वारा दी गई जानकारी की पूर्ण जिम्मेदारी उसी की होगी।
      </div>
        </div>
    </div>
  )
}

export default Home
