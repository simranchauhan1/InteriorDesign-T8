'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero section background */}
      <div className="bg-cover bg-center h-[37rem] w-auto bg-no-repeat text-white font-bold" style={{ backgroundImage: 'url(/images/hero.png)' }}>
        {/* Navbar */}
        <header className="bg-[#FFFFFF40] h-20">
          <nav className="flex items-center justify-between px-12 h-24 lg:gap-x-40">
            <a href="#" className="text-2xl font-bold whitespace-nowrap">INTERIOR DESIGN</a>

            <div className={`dropdown-menu absolute ${isOpen ? 'top-16' : '-top-full'} left-0 max-lg:bg-[#FFFFFF40] w-full flex flex-col gap-6 items-center py-2 text-lg font-bold lg:static lg:flex-row lg:justify-between`}>
              <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
                <li className="hover:text-orange-950">Home</li>
                <li className="hover:text-orange-950">About</li>
                <li className="hover:text-orange-950">Services</li>
                <li className="hover:text-orange-950">Gallery</li>
                <li className="hover:text-orange-950">Blog</li>
                <li className="hover:text-orange-950">Content</li>
              </ul>

              <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
                <button className="bg-orange-950 rounded-lg px-2 py-1 text-white whitespace-nowrap">Create Account</button>
                <button className="bg-orange-950 rounded-lg px-2 py-1 text-white whitespace-nowrap">Sign In</button>
              </div>
            </div>

            <div className="toggle-button lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
