import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/citizen/Home'
import Login from './pages/citizen/Login'
import Register from './pages/citizen/Register'
import Navbar from './components/Navbar'
import About from './pages/About'
import RegisterComplaint from './components/RegisterComplaint'
import OLogin from './pages/admin/OLogin'
import ORegister from './pages/admin/ORegister'
import OHome from './pages/admin/OHome'
import Footer from './components/Footer'
import MyComplaints from './pages/citizen/MyComplaints'
import {   Toaster } from 'react-hot-toast'
import Services from './pages/citizen/Services'
import ElectricityBill from './InPages/ElectricityBill'
import TenantUpload from './InPages/TenantUpload'
import Ashok from './InPages/Ashok'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    {/* <Ashok /> */}
    <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/registerComplaint' element={<RegisterComplaint />} />
        <Route path='/login/citizen' element={<Login />} />
        <Route path='/login/officer' element={<OLogin />} />
        <Route path='/register/officer' element={<ORegister />} />
        <Route path='/complaints' element={<OHome />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myComplaints' element={<MyComplaints />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/electricitybill' element={<ElectricityBill type={"Electricity"} working={"working"} color={"blue"}/>} />
        <Route path='/service/watertax' element={<ElectricityBill type={"Water"} working={"not working"} color={"red"}/>} />
        <Route path='/service/propertytax' element={<ElectricityBill type={"Property"} working={"not working"} color={"red"}/>} />
        <Route path='/service/garbagetax' element={<ElectricityBill type={"Garbage"} working={"not working"} color={"red"}/>} />
        <Route path='/service/incometax' element={<ElectricityBill type={"Income"} working={"not working"} color={"red"}/>} />
        <Route path='/service/gastax' element={<ElectricityBill type={"Gas"} working={"not working"} color={"red"}/>} />
        <Route path='/service/tenantregistration' element={<TenantUpload />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
