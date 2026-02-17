import React from 'react'
import LeftHero from '../components/LeftHero'
import CenterHome from '../components/CenterHome'
import RightHome from '../components/RightHome'

const HomeHero = () => {
  return (
    <div className="relative min-h-screen">

      {/* Left Sidebar */}
      <div className="fixed top-20 left-30 w-64 h-[calc(100vh-5rem)]">
        <LeftHero />
      </div>

      {/* Right Sidebar */}
      <div className="fixed top-20 right-10 w-64 h-[calc(100vh-5rem)]">
        <RightHome />
      </div>

      {/* Center Content */}
      <div className="mx-auto px-6 pt-5"
           style={{ marginLeft: "36rem", marginRight: "16rem" }}>
        <CenterHome />
      </div>

    </div>
  );
};

export default HomeHero
