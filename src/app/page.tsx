'use client'

import Image from "next/image";
import Navbar from "./components/navigations/Navbar";
import Skills from "./skills/page";
import Project from "./project/page";

export default function Home() {
  return (
    <div className="">
      <div className="sticky top-0 bg-black">
        <Navbar />
      </div> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-24 bg-[#0a0a0a]" id="home">
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            width={300} 
            height={300}
            alt="Picture of the author"
            className="rounded-t-md rounded-b-md mt-20 shadow-md md:w-[400px] md:h-[400px]"
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left my-12 md:my-24 md:mr-24">
          <h1 className="text-2xl md:text-3xl text-white">Hello, I'm</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            Albert Redila
          </h1>
          <h1 className="text-lg md:text-2xl text-white">Intern Software Developer</h1>
          <p className="text-s md:text-base text-gray-300 mt-3">
            Aiming to effectively contribute to web development projects while gaining valuable 
            experience to broaden my knowledge in the tech industry.
          </p>
        </div>
      </div>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Project />
      </section>
    </div>
  );
}
