import React from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ toggleSidebar }) => {
  return (
    <nav className="m-3">
      <div className="container mx-auto rounded-md bg-white shadow-lg p-4">
      <button onClick={toggleSidebar} className="md:hidden">
                <FaBars className="text-2xl" />
            </button>
        <div className="text-gray-800 font-semibold"></div>
      </div>
    </nav>
  );
};

export default NavBar;
