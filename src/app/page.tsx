'use client'

import React from 'react';
import Typed from 'typed.js';

export default function Home() {
  const greeting = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(greeting.current, {
      strings: [
        'Hello!', 
        'Hola!', 
        '你好!', 
        'やあ!', 
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
        <div className="flex flex-col min-h-screen w-full justify-center items-start">
          <div className="ml-20">
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl py-4">
              <span className="w-60 block italic text-teal-700 text-center h-12 sm:h-10 sm:inline-block">
                <span ref={greeting}></span>
              </span>
              <span className="pl-2">I'm Kye-Lee</span>
            </p>
            <p className="block text-lg text-gray-500 dark:text-gray-400 md:text-xl">Aspiring Full Stack Developer</p>
          </div>
        </div> 
      </main>
    </>
  );
}
