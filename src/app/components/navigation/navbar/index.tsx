'use client'

import React from "react";
import Link from "next/link";
import Hamburger from "../hamburger";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
        setIsOpen(!isOpen); 
    };
    
    return (
      <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="navigation flex justify-between items-center h-full">
                <ul className="hidden md:flex gap-x-6 text-white float-right"> {/*float-right not working */}
                    <li>
                        <Link href="/">
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