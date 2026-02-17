import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { IoMdSearch } from 'react-icons/io';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  }


  // Synchronous initialization: This runs BEFORE the first render
  const [role, setRole] = useState(() => {
    const savedUserData = localStorage.getItem('user');

    if (savedUserData) {
      try {
        const userObj = JSON.parse(savedUserData);

        return userObj.role; // returns "user" or "authority" immediately
      } catch (e) {
        console.error("Parse error", e);
        return null;
      }
    }
    return null;
  });




  useEffect(() => {
    // Handle background change on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array because role is already handled above

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-300 px-6 lg:px-12 py-4 flex justify-between items-center 
      ${scrolled ? 'bg-black shadow shadow-gray-600 py-3' : 'bg-transparent'}`}
    >
      {/* Brand Section */}
      <Link to="/" className="flex items-center gap-4 group">
      
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain transition-transform group-hover:scale-110" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tighter text-white leading-none">e-NAGARSEVA</h1>
          <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">Municipal Authority</span>
        </div>
      </Link>

      {/* Navigation Actions */}
      <div className="flex items-center gap-8">

        {/* Sleek Search Bar */}
        <div className="hidden md:flex items-center gap-3 bg-white/10 border border-white/20 rounded-sm px-4 py-1.5 focus-within:bg-white/20 focus-within:border-white transition-all">
          <IoMdSearch className="text-white opacity-70" />
          <input
            type="text"
            placeholder="Search Records..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-200 w-40 focus:w-60 transition-all"
          />
        </div>

        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-6 text-md font-semibold uppercase tracking-widest text-gray-100">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          {role === "authority" ? (
            <Link to="/complaints" className="hover:text-white transition-colors">Complaints</Link>
          ) : (<Link to="/services" className="hover:text-white transition-colors">Services</Link>
          )}
          <Link to="/contact" className="hover:text-white transition-colors">Help Desk</Link>
        </div>
        {role ? (
          role === "user" ? (
            <Link to={'/myComplaints'}>
              <img
                src="https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg"
                className="h-10 w-10 cursor-pointer bg-red-100 rounded-full object-cover border-2 border-red-200"
                alt="User Avatar"
              />
            </Link>
          ) : role === "authority" ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="h-10 w-10 bg-green-100 rounded-full object-cover border-2 border-green-200"
              alt="Authority Avatar"
            />
          ) : null // This handles the case where role exists but isn't 'user' or 'authority'
        ) : null}



        {/* Language & Login */}
        <div className="flex items-center gap-4 border-l border-white/20 pl-6">
          <select
            className="bg-transparent text-xs font-bold text-white uppercase outline-none cursor-pointer"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en" className="text-black">EN</option>
            <option value="hi" className="text-black">HI</option>
          </select>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-red-700 hover:bg-red-600 text-white text-xs font-semibold uppercase tracking-tighter px-6 py-2 transition-all flex items-center gap-2"
            >
              Get Access
              <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {/* Officer-style Dropdown */}
            {open && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-3 w-56 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-t-4 border-red-700 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="p-3 border-b border-gray-100 bg-gray-50">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Portal</p>
                </div>
                <Link
                  to="/login/citizen"
                  className="flex items-center px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  onClick={() => {
                 
                    setOpen(false);
                  }}
                  
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-3"></span>
                  Citizen Portal
                </Link>
                <Link
                  to="/login/officer"
                  className="flex items-center px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  onClick={() => {
                 
                    setOpen(false); }}
                >
                  <span className="w-2 h-2 rounded-full bg-red-700 mr-3"></span>
                  Officer Command
                </Link>
              </div>
            )}
          </div>
          {role && (
            <button className='text-white py-2 px-2 text-xs font-semibold cursor-pointer uppercase bg-blue-600' onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>

  );
};

export default Navbar;