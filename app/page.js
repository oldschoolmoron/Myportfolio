"use client"

import Image from "next/image";
import Navbar from "./Components/nav-bar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";

export default function Home() {
  return <>
  <Navbar />
  <Header />
  <About />
  <Services />
  </>;
}
