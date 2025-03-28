import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react' 
import { motion } from 'motion/react';

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        <Image src={assets.user_image} alt='' className='rounded-full h-32 w-32'/>
      </motion.div>
      <motion.h3
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay:0.3}}
       className='flex items-end gap-2 text-xl md:text-2xl font-ovo'>
      Hi, I&apos;m Ananya
      </motion.h3>
      <motion.h2
       initial={{y: -30, opacity: 0}}
       whileInView={{y: 0, opacity: 1}}
       transition={{duration: 0.8, delay:0.5}}
       className="uppercase tracking-widest lg:max-w-[60vw] text-xs text-center max-w-80">
          Crafting Scalable & Secure Digital Experiences
          </motion.h2>
      <motion.h1 
       initial={{y: -30, opacity: 0}}
       whileInView={{y: 0, opacity: 1}}
       transition={{duration: 0.8, delay:0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
      a Blockchain Developer based in India.
      </motion.h1>
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay:0.7}}
      className='max-w-2xl mx-auto font-ovo'>
      I’m a passionate developer who loves building innovative and robust solutions. From smart contracts to full-stack applications, I thrive on creating secure, scalable, and impactful tech.
      </motion.p>
      <div className='flex flex-wrap gap-4 justify-center'>
  <motion.a
  initial={{y: 30, opacity: 0}}
  whileInView={{y: 0, opacity: 1}}
  transition={{duration: 0.6, delay:1}}
   href="#contact" 
     className='px-6 sm:px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 whitespace-nowrap min-w-[140px] text-center'>
    Hire me 
    <Image src={isDarkMode? assets.right_arrow_bold_dark : assets.right_arrow_white} alt='' className='w-4'/>
  </motion.a> 

  <motion.a 
  initial={{y: 30, opacity: 0}}
  whileInView={{y: 0, opacity: 1}}
  transition={{duration: 0.6, delay:1.2}}
  href="/Myresume.pdf" download 
     className='px-6 sm:px-10 py-3 border bg-white text-black rounded-full border-gray-500 flex items-center gap-2 whitespace-nowrap min-w-[140px] text-center'>
    My resume 
    <Image src={assets.download_icon} alt='' className='w-4'/>
  </motion.a>
</div>
    </div>
  )
}

export default Header
