import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import Navbar from '../components/navigations/Navbar';

function page() {
  return (
    <div className="bg-white h-auto p-8 md:p-24">
        <h1 className="text-black flex justify-center font-bold text-3xl mb-10 md:mb-20">
            TECHNICAL SKILLS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/4 mx-auto">
            <Link href="https://angular.dev/">
                <div className="border h-24 rounded-lg bg-gray-900 flex items-center px-4 space-x-4">
                <Image src="/angular.png" width={60} height={60} alt="" className="rounded-full" />
                <div className="text-2xl md:text-3xl text-white">ANGULAR</div>
                </div>
            </Link>
            
            <Link href="https://laravel.com/">
                <div className="border h-24 rounded-lg bg-gray-900 flex items-center px-4 space-x-4">
                <Image src="/laravel.png" width={60} height={60} alt="" className="rounded-full" />
                <div className="text-2xl md:text-3xl text-white">LARAVEL</div>
                </div>
            </Link>

            <Link href="https://nextjs.org/">
                <div className="border h-24 rounded-lg bg-gray-900 flex items-center px-4 space-x-4">
                <Image src="/nextjs.png" width={60} height={60} alt="" className="rounded-full" />
                <div className="text-2xl md:text-3xl text-white">NextJS</div>
                </div>
            </Link>
        
        <Link href="https://www.javascript.com/">
            <div className="border h-24 rounded-lg bg-gray-900 flex items-center px-4 space-x-4">
                <Image src="/javascript.png" width={60} height={60} alt="" className="rounded-full" />
                <div className="text-2xl md:text-3xl text-white">JavaScript</div>
            </div>
        </Link>
            
        </div>
        <div className="mx-auto w-full md:w-80 mt-4 md:mt-6">
            <Link href="https://www.scrum.org/resources/what-scrum-module">
                <div className="border h-24 rounded-lg bg-gray-900 flex items-center px-4 space-x-4">
                <Image src="/scrum.jpg" width={60} height={60} alt="" className="rounded-full" />
                <div className="text-2xl md:text-3xl text-white">SCRUM METHOD</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default page
