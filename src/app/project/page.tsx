import React from 'react'
import Image from "next/image";
import Link from 'next/link'

function page() {
  return (
    <div className="bg-[#0a0a0a] h-auto p-8 md:p-24">
        <h1 className="text-white flex justify-center font-bold text-3xl mb-10 md:mb-20">
            SCHOOL PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
            <div className="border flex flex-col justify-center items-center rounded-md p-4">
                <Link href="/project(mommyla).png" target="_blank">
                    <Image src="/project(mommyla).png" width={300} height={300} alt="Project Mommyla" className="w-40 h-auto rounded-lg" />
                </Link>
                <div className="text-base sm:text-lg text-white mt-2 text-center">
                    The system is designed to help with order processing, track sales, and provide sales reports, which can support the business owner in better managing operations.
                </div>
            </div>
            <div className="border flex flex-col justify-center items-center rounded-md p-4">
                <Link href="/project(sad).png" target="_blank">
                    <Image src="/project(sad).png" width={1500} height={500} alt="" className="w-96 h-auto rounded-lg" />
                </Link>
                <div className="text-base sm:text-lg text-white mt-2 text-center">
                    The system is designed to help the Pharmacy to streamline the recording of daily sales. It serves as their Point Of Sale. It can track daily, weekly, and monthly sales.
                </div>
            </div>
            <div className="border flex flex-col justify-center items-center rounded-md p-4">
                <Link href="/project(laravel).png" target="_blank">
                    <Image src="/project(laravel).png" width={1500} height={500} alt="" className="w-96 h-auto rounded-lg" />
                </Link>
                <div className="text-base sm:text-lg text-white mt-2 text-center">
                    The system is designed to allow the user to take a quiz or assessment of the specific topic. This will help them to analyze and review.
                </div>
            </div>
            <div className="border flex flex-col justify-center items-center rounded-md p-4">
                <Link href="/project(appdev).png" target="_blank">
                    <Image src="/project(appdev).png" width={1500} height={500} alt="" className="w-96 h-auto rounded-lg" />
                </Link>
                <div className="text-base sm:text-lg text-white mt-2 text-center">
                    This system serves as an online ordering application for a certain business.
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
