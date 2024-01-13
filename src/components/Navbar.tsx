import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-6">
      <div className="container mx-auto max-w-8xl">
        <div className="text-white flex items-center justify-between">
          <Link to="/" className="text-white text-2xl md:text-3xl lg:text-4xl">
            SWAPI
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
