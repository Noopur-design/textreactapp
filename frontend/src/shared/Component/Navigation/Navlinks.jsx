import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = (props) => {
  return (
    <ul className={`${props.isDrawer ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-6'}`}>
      <li>
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : props.isDrawer
                ? 'text-black hover:bg-blue-500 hover:text-white'
                : 'text-white hover:bg-blue-500 hover:text-gray-100'
            }`
          }
        >
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/u1/places"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : props.isDrawer
                ? 'text-black hover:bg-blue-500 hover:text-white'
                : 'text-white hover:bg-blue-500 hover:text-gray-100'
            }`
          }
        >
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/places/new"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : props.isDrawer
                ? 'text-black hover:bg-blue-500 hover:text-white'
                : 'text-white hover:bg-blue-500 hover:text-gray-100'
            }`
          }
        >
          ADD PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : props.isDrawer
                ? 'text-black hover:bg-blue-500 hover:text-white'
                : 'text-white hover:bg-blue-500 hover:text-gray-100'
            }`
          }
        >
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;