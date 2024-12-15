'use client'

import React from 'react';
import Typed from 'typed.js';

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


  return (
    <>
      <main>
        <div className="flex flex-col h-screen w-screen box-border">
          <div className="ml-20 h-3/4 flex-col content-center">
            <p className="text-4xl block font-bold text-gray-900 dark:text-gray-100 md:text-5xl py-4">
              <span className="w-72 block italic text-teal-700 text-center h-12 sm:h-10 sm:inline-block">
                <span ref={greeting}></span>
              </span>
              <span className="pl-2">I'm Kye-Lee</span>
            </p>
            <p className="block pb-16 text-lg text-gray-500 dark:text-gray-400 md:text-xl">Aspiring Full Stack Developer</p>
          </div>
          <div className="px-10 py-5 text-2xl md:text-3xl h-20 w-full flex space-x-16 justify-center items-center">
            <a href="https://www.linkedin.com/in/kye-lee-low-8a6643159"><i className="devicon-linkedin-plain colored"></i></a>
            <a href="https://github.com/kl810"><i className="devicon-github-original light:colored"></i></a>
            <a href=""><i className="fa-regular fa-envelope"></i></a>
            <i className="fa-solid fa-phone"></i>
          </div> 
        </div>

      </main>
    </>
  );
}
