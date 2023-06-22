import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#546f7a] text-black">
      {/* logo */}
      <div>
        <Link to="/">
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="Logo"
            style={{ width: "60px" }}
          />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline md:text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/resources">Resources</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:underline md:text-xl">
          <Link to="/form">Form</Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        onClick={handleClick}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#546f7a] flex flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* footer */}
      <footer class="fixed bottom-0 left-0 z-20 w-full p-2 bg-[#546f7a] border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3">
        <span class="text-sm text-black sm:text-center dark:black">
          © 2023 Thomas Fackrell
        </span>
      </footer>
    </div>
  );
};

export default Navbar;