import React from 'react'
import Form from 'next/form'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function page() {
  return (
    <div className="bg-white h-auto p-8 md:p-24">
        <h1 className="text-black flex justify-center font-bold text-3xl mb-10 md:mb-20">
            CONTACT ME
        </h1>
        <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-900 h-auto p-4 rounded-sm">
                <h1 className="text-white text-3xl font-bold mt-10 ml-10">
                    Contact Information
                </h1>
                <div className="text-gray-400 text-base mt-2 ml-10">
                    <p>Say Something to start a live chat!</p>
                </div>
                <div className="mt-20 ml-10">
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
                        <p className="ml-2">334 Kalabasa Street, Tumana, 
                            <br /> Santa Maria Bulacan, Philippines</p>
                    </div>
                </div>
                <div className="mt-40 flex">
                    <FaFacebook className='text-2xl mr-2 text-yellow-500'/>
                    <FaFacebookMessenger className='text-2xl mr-2'/>
                    <FaGithub className='text-2xl text-yellow-500'/>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <Form action="" className='text-gray-700 mr-5'>
                        <p className='text-sm'>First Name:</p>
                        <input name="query" className='border-gray-800 border-b h-10 w-60'/>
                    </Form>
                    <Form action="" className='text-gray-700'>
                        <p className='text-sm'>Last Name:</p>
                        <input name="query" className='border-gray-800 border-b h-10 w-60'/>
                    </Form> 
                </div>
                <div className="flex justify-center mt-10">
                    <Form action="" className='text-gray-700 mr-5'>
                        <p className='text-sm'>Email:</p>
                        <input name="query" className='border-gray-800 border-b h-10 w-60'/>
                    </Form>
                    <Form action="" className='text-gray-700'>
                        <p className='text-sm'>Phone:</p>
                        <input name="query" className='border-gray-800 border-b h-10 w-60'/>
                    </Form> 
                </div>
                <div className="flex justify-center mt-10">
                    <Form action="" className='text-gray-700 justify-center w-full ml-14 mr-14'>
                        <p className='text-sm'>Message:</p>
                        <input placeholder='Write your message...' name="query" className='border-gray-800 border-b h-10 w-full'/>
                    </Form> 
                </div>
                <div className="flex justify-end mr-14 mt-10">
                    <button className='bg-gray-900 rounded-sm p-3'>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
