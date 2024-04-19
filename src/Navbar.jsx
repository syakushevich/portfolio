import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="relative py-6">
      <div className="mx-auto max-w-7xl relative flex h-16 items-center justify-center w-full">
        <ul className="flex justify-around w-full">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "text-black hover:bg-white hover:text-gray-900 rounded-md px-3 py-2"}`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "text-black hover:bg-white hover:text-gray-900 rounded-md px-3 py-2"}`
              }>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hire-me"
              className={({ isActive }) =>
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "text-black hover:bg-white hover:text-gray-900 rounded-md px-3 py-2"}`
              }>
              Hire me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "text-black hover:bg-white hover:text-gray-900 rounded-md px-3 py-2"}`
              }>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
