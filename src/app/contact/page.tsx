import React from 'react'
import Form from 'next/form'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';

function page() {
  return (
    <div className="bg-white h-auto p-8 md:p-24">
    <h1 className="text-black flex justify-center font-bold text-3xl mb-10 md:mb-20">
        CONTACT ME
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 h-auto p-6 rounded-sm">
            <h1 className="text-white text-2xl md:text-3xl font-bold mt-6 md:mt-10">
                Contact Information
            </h1>
            <div className="text-gray-400 text-base mt-2">
                <p>Say Something to start a live chat!</p>
            </div>
            <div className="mt-10">
                <div className="flex items-center text-white mt-4 text-lg">
                    <FaPhoneVolume className='text-white'/>
                    <p className="ml-2">0963 819 6445</p>
                </div>
                <div className="flex items-center text-white mt-4 text-lg">
                    <FaRegEnvelope className='text-white'/>
                    <p className="ml-2">albertmejicoredila@gmail.com</p>
                </div>
                <div className="flex items-center text-white mt-4 text-lg">
                    <FaLocationPin className='text-white'/>
                    <p className="ml-2">334 Kalabasa Street, Tumana, <br /> Santa Maria Bulacan, Philippines</p>
                </div>
            </div>
            <div className="mt-10 flex space-x-4">
            <Link href="https://www.facebook.com/albert.redila.3/">
                <FaFacebook className='text-2xl text-yellow-500'/>
            </Link>
            <Link href="https://www.facebook.com/albert.redila.3/">
                <FaFacebookMessenger className='text-2xl text-white'/>
            </Link>
            <Link href="https://github.com/itsme-albert">
                <FaGithub className='text-2xl text-yellow-500'/>
            </Link>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                <Form action="" className='text-gray-700'>
                    <p className='text-sm'>First Name:</p>
                    <input name="query" className='border-gray-800 border-b h-10 w-full'/>
                </Form>
                <Form action="" className='text-gray-700'>
                    <p className='text-sm'>Last Name:</p>
                    <input name="query" className='border-gray-800 border-b h-10 w-full'/>
                </Form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mt-6">
                <Form action="" className='text-gray-700'>
                    <p className='text-sm'>Email:</p>
                    <input name="query" className='border-gray-800 border-b h-10 w-full'/>
                </Form>
                <Form action="" className='text-gray-700'>
                    <p className='text-sm'>Phone:</p>
                    <input name="query" className='border-gray-800 border-b h-10 w-full'/>
                </Form>
            </div>
            <div className="w-full max-w-md mt-6">
                <Form action="" className='text-gray-700'>
                    <p className='text-sm'>Message:</p>
                    <textarea placeholder='Write your message...' name="query" className='border-gray-800 border-b h-20 w-full'/>
                </Form>
            </div>
            <div className="flex justify-end w-full max-w-md mt-6">
                <button className='bg-gray-900 text-white rounded-sm px-6 py-3'>Send Message</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default page
