import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = (
    <ul className="space-y-4  md:space-y-0 md:flex md:space-x-4 text-white text-[20px]">
  <li className="relative group cursor-pointer">
        <NavLink 
          to="/" 
          className="-z-50 block px-4 py-2 rounded-md border-2 border-transparent hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-400/30 transform hover:scale-105"
        >
          Home
        </NavLink>
      
      </li>

      <li className="relative group cursor-pointer">
        <NavLink 
          to="/todos" 
          className="z-50 block px-4 py-2 rounded-md border-2 border-transparent hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-400/30 transform hover:scale-105"
        >
          Todos
        </NavLink>
        
      </li>
    </ul>
  );

  return (
     <div>
      {/* Desktop Nav */}
      <nav className="hidden md:block">{navLinks}</nav>

      {/* Toggle Button (only mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-2xl text-white  absolute top-2 right-4 z-50 md:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar (Mobile) */}
      <div
        ref={sidebarRef}
        className={`w-2/4 h-screen bg-gray-800 text-white top-0 right-0 fixed z-40 p-6 border-l border-gray-600 border-b-4 border-b-cyan-500
          transform transition-transform duration-700 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <h2 className="text-xl mt-4 font-bold mb-6 border-b-2 border-b-cyan-500 pb-2">Menu</h2>
        {navLinks}
      </div>
    </div>
  )
}

export default SideBar