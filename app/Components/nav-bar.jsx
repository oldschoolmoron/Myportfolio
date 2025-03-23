import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import '../globals.css'; // Import global styles

const Navbar = () => {
  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between'>
      <a href="#top">
        <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
      </a>

      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
        <li><a className='font-ovo' href="#home">Home</a></li>
        <li><a className='font-ovo' href="#aboutme">About me</a></li>
        <li><a className='font-ovo' href="#services">Services</a></li>
        <li><a className='font-ovo' href="#mywork">My work</a></li>
        <li><a className='font-ovo' href="#blog">Blog</a></li>
        <li><a className='font-ovo' href="#contact">Contact</a></li>
      </ul>

      <div>
        <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>
          Contact <Image src={assets.arrow_icon} alt="Arrow Icon" width={12} height={12} className="w-3" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
