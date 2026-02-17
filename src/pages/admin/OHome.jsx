import React, { useEffect } from 'react'
import api from '../../../api/axios'
import OComplaints from './OComplaints'

const OHome = () => {

   

  return (
    <div className=' bg-black py-20'>
      <OComplaints />
    </div>
  )
}

export default OHome
