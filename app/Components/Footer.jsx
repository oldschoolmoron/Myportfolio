import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Logo" className="w-6" />
          ananyapk043@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>Copyright © 2025 Ananya Pathak. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a href="https://www.github.com/oldskoolmoron/" target="_blank">Github</a></li>
          <li><a href="https://www.twitter.com/kodegambler/" target="_blank">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/askananya/" target="_blank">Linkedin</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
