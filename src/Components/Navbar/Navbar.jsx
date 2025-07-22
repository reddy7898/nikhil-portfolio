import React, { useState } from "react";
import logo from "../../../logo.png";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white shadow-md px-6 py-4 flex justify-between items-center">
      <a href="#Home">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-[50px] rounded-xl shadow-xl"
        />
      </a>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-full left-0 right-0 bg-black bg-opacity-90 text-center px-6 py-4 md:static md:flex md:gap-6 md:bg-transparent md:py-0 md:px-0 md:block`}
      >
        <li>
          <a href="#About" className="block py-2 md:py-0 hover:text-green-400">
            About
          </a>
        </li>
        <li>
          <a href="#Experience" className="block py-2 md:py-0 hover:text-green-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#Projects" className="block py-2 md:py-0 hover:text-green-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#Footer" className="block py-2 md:py-0 hover:text-green-400">
            Contact
          </a>
        </li>
      </ul>

      {/* Toggle Button for Mobile */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          />
        ) : (
          <RiMenu2Line
            size={30}
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
