import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "../globals.css"; // Import global styles

const Navbar = ({isDarkMode , setDarkMode}) => {

  const [isScroll, setIsScroll] = React.useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
  })
},[])

  return (
    <>
      {!isDarkMode && (
  <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
    <Image src={assets.header_bg_color} alt="bg-color" className="w-full" />
  </div>
  )}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
  isScroll
    ? (isDarkMode ? "bg-darkTheme/50 backdrop-blur-lg shadow-white/20" : "bg-white/10 backdrop-blur-lg shadow-md")
    : "bg-transparent"
}`}>

        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark: assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white/50 backdrop-blur-lg shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#aboutme">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#mywork">
              My work
            </a>
          </li>
          {/* <li>
             <a className="font-ovo" href="#blog">
              Blog
            </a>
          </li> */}
          <li>
            <a className="font-ovo" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(prev => !prev)}>
            <Image src={isDarkMode? assets.sun_icon: assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-ovo ${
              isDarkMode ? "border-white/50" : "border-gray-500"
            }`}
          >
            Contact{" "}
            <Image
              src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon}
              alt="Arrow Icon"
              width={12}
              height={12}
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode? assets.menu_white:assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* ------ Mobile Menu ------ */}
        <ul  ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen backdrop-blur-lg shadow-sm transition duration-500 ${isDarkMode? "bg-amber-800 text-white" : "bg-rose-50" }`}
>
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode? assets.close_white: assets.close_black} alt='cross-icon' className="w-5 cursor-pointer" />
          </div>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#aboutme">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#mywork">
              My work
            </a>
          </li>
          {/* <li>
            <a className="font-ovo" onClick={closeMenu} href="#blog">
              Blog
            </a>
          </li> */}
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
