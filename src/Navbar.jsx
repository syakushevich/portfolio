import React from 'react';
import './styles/navbar.css';
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
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "px-3 py-2 text-black hover:bg-black rounded-md hover:text-white plain-hover"}`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-text ${isActive ? "rounded-md px-3 py-2 magic-active" : "px-3 py-2 magic-hover"}`
              }>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hire-me"
              className={({ isActive }) =>
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "px-3 py-2 text-black hover:bg-black rounded-md hover:text-white plain-hover"}`
              }>
              Hire me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-text ${isActive ? "bg-black text-white rounded-md px-3 py-2" : "px-3 py-2 text-black hover:bg-black rounded-md hover:text-white plain-hover"}`
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
