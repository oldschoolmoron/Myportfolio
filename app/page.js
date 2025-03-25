"use client"

import Image from "next/image";
import Navbar from "./Components/nav-bar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode , setDarkMode] = useState(false);
  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  },[]);

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode]);
  return <>
  <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  <About isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  <Services isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  <Work isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  <Contact isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  <Footer isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
  </>;
}
