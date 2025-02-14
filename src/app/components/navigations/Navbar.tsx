import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { FaCode } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { useRouter } from 'next/navigation'


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHouse className="m-1 text-yellow-500" /> },
    { name: 'Skills', href: '#skills', icon: <FaCode className="m-1 text-yellow-500" /> },
    { name: 'Project', href: '#project', icon: <FaCopy className="m-1 text-yellow-500" /> },
    { name: 'Contact', href: '#contact', icon: <FaComments className="m-1 text-yellow-500" /> },
  ];
  return (
    <div>
      <nav className="bg-black ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-expanded={isMobileMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black text-xl">
              {navItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  {item.icon}
                  <a href={item.href} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar
