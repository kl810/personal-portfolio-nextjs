'use client'

import React, {useState} from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa6';
import { BsEnvelopeAt } from "react-icons/bs";

export default function Home() {
  const greeting = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(greeting.current, {
      strings: [
        'Hello!', 
        '¡Hola!', 
        '你好!', 
        'こんにちは!', 
        '안녕!', 
        'Bonjour!', 
        'Hallo!', 
        'Ciao!', 
        'नमस्ते!', 
        'Γεια σου!', 
        'Привет!', 
        'Olá!', 
        'مرحبا!', 
        'မင်္ဂလာပါ!', 
        'สวัสดี!'
      ],
      loop: true,
      typeSpeed: 100,
      showCursor: false,
      shuffle: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const toggleEmailDropdown = () => {
      setIsEmailOpen(!isEmailOpen);

      if(isPhoneOpen) {
        setIsPhoneOpen(!isPhoneOpen)
      }
  };

  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const togglePhoneDropdown = () => {
      setIsPhoneOpen(!isPhoneOpen);

      if(isEmailOpen) {
        setIsEmailOpen(!isEmailOpen)
      }
  };


  return (
    <>
      <main>
        <div className="flex flex-col h-screen w-screen box-border">
          <div className="ml-20 h-3/4 flex-col content-center">
            <p className="text-4xl block font-bold text-gray-900 dark:text-gray-100 md:text-5xl py-4">
              <span className="w-72 block italic text-teal-700 text-center h-12 sm:h-10 sm:inline-block">
                <span ref={greeting}></span>
              </span>
              <span className="pl-2">I&apos;m Kye-Lee</span>
            </p>
            <p className="block pb-16 text-lg text-gray-500 dark:text-gray-400 md:text-xl">Aspiring Full Stack Developer</p>
          </div>
          <div className="px-10 py-5 text-2xl md:text-3xl h-20 w-full flex space-x-16 justify-center items-center">
            <a href="https://www.linkedin.com/in/kye-lee-low-8a6643159"><FaLinkedin /></a>
            <a href="https://github.com/kl810"><FaGithub /></a>
            {/* <a href="mailto:kyelee.low@gmail.com"><BsEnvelopeAt /></a>
            <a href="tel:+447402709246"><FaPhone /></a> */}

            <div className="email-dropdown flex">
              <button 
                className="text-black dark:text-white relative inline-flex items-center" 
                type="button"
                onClick={toggleEmailDropdown}
              >
                <BsEnvelopeAt />
              </button>

              {isEmailOpen && 
                (<div className="absolute mt-10 w-56 
                      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                      focus:outline-none dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      <li>
                        <a href="mailto:kyelee.low@gmail.com" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">kyelee.low@gmail.com</a>
                      </li>
                    </ul>
                </div>)
              }
            </div>

            <div className="phone-dropdown flex">
              <button 
                className="text-black text-2xl dark:text-white relative inline-flex items-center" 
                type="button"
                onClick={togglePhoneDropdown}
              >
                <FaPhone />
              </button>

              {isPhoneOpen && 
                (<div className="absolute mt-10 w-56 
                      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                      focus:outline-none dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      <li>
                        <a href="tel:+447402709246" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+44 (0) 7492709246</a>
                      </li>
                    </ul>
                </div>)
              }
            </div>


          
          </div> 
        </div>

      </main>
    </>
  );
}
