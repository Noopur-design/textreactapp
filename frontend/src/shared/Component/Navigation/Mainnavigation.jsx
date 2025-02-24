import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mainheader from './Mainheader';
import Navlinks from './Navlinks';
import Sidedrawer from './Sidedrawer';

const Mainnavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Sidedrawer for Mobile */}
      <Sidedrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <Navlinks isDrawer={true} />
      </Sidedrawer>

      {/* Main Header */}
      <Mainheader className="w-full bg-blue-800">
        <div className="flex items-center p-4">
       
          <button
            onClick={toggleDrawer}
            className="flex flex-col justify-center items-center md:hidden space-y-1 w-8 h-8 font-bold cursor-pointer"
          >
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-0.75 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white ml-4">
            <Link to="/">YourPlaces</Link>
          </h1>

          {/* Navigation Links (Desktop) */}
          <nav className="main-navigation__header-nav ml-auto hidden md:block">
            <Navlinks />
          </nav>
        </div>
      </Mainheader>
    </>
  );
};

export default Mainnavigation;