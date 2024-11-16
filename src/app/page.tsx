import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="flex items-center justify-end py-8 px-40">
        <div className="">
          <a className="p-2 sm-p4 font-medium text-gray-900 dark:text-gray-100" href="/">
            Home
          </a>
          <a className="p-2 sm-p4 font-medium text-gray-900 dark:text-gray-100" href="/about">
            About
          </a>
          <a className="p-2 sm-p4 font-medium text-gray-900 dark:text-gray-100" href="/projects">
            Projects
          </a>
        </div>
        <button 
          aria-label="Toggle Dark Mode" 
          type="button" 
          className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-900 dark:text-gray-100">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="fade-in text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z">
                </path>
              </svg>
            </svg>
        </button>

      </header>
      <main>
        <div className="flex flex-col min-h-screen justify-center items-start px-40 dark:text-white">
          <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hello, I am Kye-Lee</h1>
          <p>Aspiring Front-End Developer</p>
        </div>
      </main>
    </div>

  );
}
