import React from 'react';

const Sidedrawer = ({ isOpen, onClose, children }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-70 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 p-3 text-5xl text-black hover:text-gray-600 focus:outline-none"
      >
        &times;
      </button>

      <nav className="p-6 mt-18">{children}</nav>
    </aside>
  );
};

export default Sidedrawer;