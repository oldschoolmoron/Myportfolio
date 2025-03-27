import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <Image src={isDarkMode? assets.logo_dark : assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Logo" className="w-6" />
          ananyapk043@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Ananya Pathak. All rights reserved.</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
        <li>
          <a href="https://www.github.com/oldskoolmoron/" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-600 transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/kodegambler/" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-gray-600 transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/askananya/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-gray-600 transition duration-300" />
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;
