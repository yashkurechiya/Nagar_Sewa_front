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
    </div>
  )
}

export default Home
