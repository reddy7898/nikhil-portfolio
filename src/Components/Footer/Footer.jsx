import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub ,FaGlobe} from "react-icons/fa";

const Footer = () => {
  return (

    <div
    id="Footer"
    className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-gray-900 to-black text-white py-16 px-8 md:px-20 gap-10"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
  <li className="flex gap-2 items-center">
    <MdOutlineEmail size={20} />
    <a href="mailto:nikhil.duluri@gmail.com" className="hover:underline">
      nikhil.duluri@gmail.com
    </a>
  </li>
  <li className="flex gap-2 items-center">
    <CiLinkedin size={20} />
    <a
      href="https://linkedin.com/in/nikhil-duluri"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      linkedin.com/in/nikhil-duluri
    </a>
  </li>
  <li className="flex gap-2 items-center">
    <FaGithub size={20} />
    <a
      href="https://github.com/reddy7898"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      github.com/reddy7898
    </a>
  </li>
  <li className="flex gap-2 items-center">
    <FaGlobe size={20} />
    <a
      href="https://reddy7898.github.io/nikhil-portfolio/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      nikhil-duluri
    </a>
  </li>
</ul>

    </div>
  );
};

export default Footer;
