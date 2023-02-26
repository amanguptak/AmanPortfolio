import React from 'react'
import Image from 'next/image'
function Skills() {
  return (
    <div className="w-full lg:h-screen p-2" id="skills">
<div className="max-w-[1240px] mx-auto flex  flex-col justify-center h-full">

    <p className="text-xl tracking-widest text-[#ffff42]" >Skills</p>
    <h2 className="py-4">What I Can Do</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  ">


{/* skills section  ----------------------------------------------------*/}

     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/html.png" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                HTML
            </h3>
         </div>
        </div>
     </div>

     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/css.webp" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                CSS
            </h3>
         </div>
        </div>
     </div>

     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/js.webp" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                JavaScript
            </h3>
         </div>
        </div>
     </div>

     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/react.png" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                React Js
            </h3>
         </div>
        </div>
     </div>


     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/nodejs.webp" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                Node Js
            </h3>
         </div>
        </div>
     </div>


     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/express.png" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                Express Js
            </h3>
         </div>
        </div>
     </div>


     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto ">
                <Image src="/../public/images/github.png" height="60" width="60"  alt="/" className='rounded-full'/>
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3 className="">
                Github
            </h3>
         </div>
        </div>
     </div>


     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/mern.png" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                MERN Stack
            </h3>
         </div>
        </div>
     </div>

     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/mongo.png" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                Mongo Db
            </h3>
         </div>
        </div>
     </div>

     <div className="p-6 shadow-xl rounded-xl hover:scale-100 ease-in duration-300  cursor-pointer">
        <div className="grid grid-cols-2 gap-4 justify-center items-center" >
            <div className="m-auto">
                <Image src="/../public/images/nextjs.png" height="60" width="60"  alt="/" />
            </div>
         <div className="flex flex-col items-center justify-center text-[white]">
            <h3>
                Next Js
            </h3>
         </div>
        </div>
     </div>

    



    {/* skills ending here */}

     



    </div>
</div>
    </div>
  )
}

export default Skills