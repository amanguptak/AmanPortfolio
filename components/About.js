import React from 'react'

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id ="about">
       <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-3">
        <div className="col-span-2">
            <p className="text-xl tracking-widest text-[#ffff42] uppercase">About</p>
            <h1 className="py-4">Who I Am</h1>
            <p className='py-2'>I am not your noraml developer</p>


            <p className="py-2">I have completed 4 month internship from ibm in web devlopment.
            Recently I have completed 6 month internship from wipro in mern stack where i have worked on several mern projects
            like Job website, Weather app , Hotel api, Blog app, Pomodro timer using react context api concept,
            in this internship I learnt about React and core concept of React js like react hooks ,context api, state managment,
            redux,redux-toolkit ,Express js and crud opretion in api and mongodb(Non relational database) and I also 
            implemented login and register functionalty by help of express js and jwt web toketn
            so i have good knowledge and experience in Mern stack and programming fundamentals.</p>

            <p className='py-4 underline cursor-pointer'>Check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105  ease-in duration-300'>
            {/* <img src="https://pattemdigital.com/production/wp-content/uploads/2020/07/WhyMERN_Stackis_every_startups_favorite_thumbnail.png" alt="" /> */}
            <img className='rounded-xl' src="https://www.dotsquares.com/img/mern-stack-inner.jpg" alt="" />
        </div>
       </div>
    </div>
  )
}

export default About