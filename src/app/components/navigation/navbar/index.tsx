'use client'

import React from "react";
import Link from "next/link";
import Hamburger from "../hamburger";
import ToggleSwitch from "../toggle-switch/toggle-switch";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleHamburger = () => {
        setIsOpen(!isOpen); 
    };
    
    return (
      <>
        <div className="w-auto h-20 bg-gray-100 dark:bg-gray-800 sticky top-0">
          <div className="container px-8 float-right">
            <div className="navigation flex justify-between float-right">
                <ul className="hidden md:flex gap-x-6 py-6 text-lg text-gray-900 dark:text-gray-100 font-medium">
                    <li>
                        <Link href="/" >
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                </ul>
                <div className="dark-mode-toggle inline-block py-4 px-2 md:px-4">
                    <ToggleSwitch />
                </div>
                <div className="hamburger md:hidden" onClick={toggleHamburger}>
                    <Hamburger isOpen={isOpen}/>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;