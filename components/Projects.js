import React from 'react'
import Image from 'next/image'
import Blog from "../public/images/BlogP.png"
import Projectlist from './Projectlist'
export default function Projects() {
  return (
    <div className="w-full" id="projects">
        <div className="max-w-[1240px] mx-auto px-2 py-16"></div>
            <p className="'text-xl tracking-widest uppercase text-[#ffff42] py-4">Projects</p> 
            <h2 className='py-4'>What I've built</h2>
            <div className="grid md:grid-cols-2 gap-8 py-4">
            <Projectlist
            title='Property Finder'
            backgroundImg={Blog}
            projectUrl='/property'
            tech='React JS'
          />
          <Projectlist
            title='Crypto App'
            backgroundImg={Blog}
            projectUrl='/crypto'
            tech='React JS'

          />
          <Projectlist
            title='Netflix App'
            backgroundImg={Blog}
            projectUrl='/netflix'
            tech='React JS'

          />
          <Projectlist
            title='Twitch UI'
            backgroundImg={Blog}
            projectUrl='/twitch'
            tech='Next JS'

          />

            
            </div>
    </div>
  )
}
