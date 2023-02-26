import React from 'react'
import { AiFillYoutube, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaHamburger, FaLinkedinIn } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"
function Main() {
  return (
   <div id="home" className="w-full h-screen text-center">
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
        <p className="uppercase text-sm  tracking-widest">LET'S MAKE MODERN WEBSITE</p>
        <h1 className="py-2">Hi, I'm <span className="text-[#ffff42]">Aman </span></h1>
        <h1>A Full-Stack Web Developer</h1>
        <p className="py-4 max-w-[70%] m-auto">
            I'm a MERN Stack Web Develope. Currently I'm focused on building responsive front-end web app while learning backend technologies.
        </p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 mx-2 cursor-pointer hover:scale-113 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 mx-2 cursor-pointer hover:scale-113 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 mx-2 cursor-pointer hover:scale-113 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 mx-2 cursor-pointer hover:scale-113 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              
            </div>   
        </div>
        </div>
    </div>
   </div>
  )
}

export default Main