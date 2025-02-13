import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { FaCode } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { useRouter } from 'next/navigation'


function Navbar() {
  const router = useRouter()
  return (
    <div>
      <div className="w-full h-15 p-3  sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li className='text-xl'>
                <button type='button' onClick={() => router.push('/')}>
                <div className="flex items-center">
                  <FaHouse className='m-1 text-yellow-500'/>
                  <p>Home</p>
                </div>
                </button>
              </li>
              <li className='text-xl'>
                <button type='button' onClick={() => router.push('/skills')}>
                <div className="flex items-center">
                  <FaCode className='m-1 text-yellow-500'/>
                  <p>Skills</p>
                </div>
                </button>
              </li>
              <li className='text-xl'>
                <Link href="/project">
                <div className="flex items-center">
                  <FaCopy className='m-1 text-yellow-500'/>
                  <p>Project</p>
                </div>
                </Link>
              </li>
              <li className='text-xl'>
                <Link href="/contact">
                <div className="flex items-center">
                  <FaComments className='m-1 text-yellow-500'/>
                  <p>Contact</p>
                </div>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
