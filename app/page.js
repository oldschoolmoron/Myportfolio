"use client"

import Image from "next/image";
import Navbar from "./Components/nav-bar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return <>
  <Navbar />
  <Header />
  <About />
  <Services />
  <Work />
  <Contact />
  <Footer />
  </>;
}
