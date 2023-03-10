import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillYoutube, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaHamburger, FaLinkedinIn } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"


export default function Navbar() {
 const [nav,setNav]= useState(false)

 const handleNavChange = () => {
   setNav(!nav)
 }

  return (
    <div className="fixed w-full h-20px shadow-xl z-[100] ease-in-out duration-300 bg-[#061e4c]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/images/amanlogo.webp"
          alt=""
          width="70"
          height="20"
          className="rounded-full"
        />

        <div>
          <ul className="hidden  md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#connect">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer"  onClick={handleNavChange}>
            <AiOutlineMenu size={45} />
          </div>
        </div>
        
      </div>
      <div className= {nav ?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[62%] md:w-[45%] h-screen bg-[#061e4c] p-10 ease-in duration-500":"fixed left-[-100%] top-0  p-10 ease-in duration-500"}>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/images/amanlogo.webp"
              alt=""
              width="70"
              height="20"
              className="rounded-full"
            />
            <div
              className="rounded-full
              shadow-lg
              shadow-gray-400
              cursor-pointer
              p-3
              
              "
             onClick={handleNavChange}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let's bulid somthing Sparky together.
            </p>
          </div>
          <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <Link href="/">
              <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/#about">
              <li onClick={()=>{setNav(false)}} className="py-4 text-sm">About</li>
            </Link>
            <Link href="/#skills">
              <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="/#projects">
              <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="/#connect">
              <li onClick={()=>{setNav(false)}} className="py-4 text-sm">Contact</li>
            </Link>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#f7f75c]">
              Let's connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillYoutube/>
              </div>
            </div>
          </div>
        </div>
        </div>
   
      </div>
    </div>
  );
}
