import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.user_image} alt='' className='rounded-full h-32 w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl font-ovo'>
      Hi, I&apos;m Ananya
      </h3>
      <h2 className="uppercase tracking-widest lg:max-w-[60vw] text-xs text-center max-w-80">
          Crafting Scalable & Secure Digital Experiences
          </h2>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
      a Blockchain Developer based in India.
      </h1>
      <p className='max-w-2xl mx-auto font-ovo'>
      I’m a passionate developer who loves building innovative and robust solutions. From smart contracts to full-stack applications, I thrive on creating secure, scalable, and impactful tech.
      </p>
      <div>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Hire me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a> 

        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header
