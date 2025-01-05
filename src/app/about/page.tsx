import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="px-16 md:px-28 pt-16">
                <h1 className="text-5xl md:text-6xl font-bold">About</h1>
                <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 m-10 lg:m-28 max-w-screen-2xl">
                    <div className="flex justify-center">
                        <Image 
                            src="/KL-Linkedin-photo.jpeg"
                            width={350}
                            height={350}
                            alt="Profile Photo of Kye-Lee"
                            className="rounded-full m-2 shadow-md shadow-gray-900 !block lg:absolute"
                        />
                    </div>
                    <div className="flex justify-center items-center col-span-1 lg:col-span-2">
                        <div>
                            <div className="whitespace-normal text-gray-900 dark:text-gray-100 text-xl pb-5">
                                <p>Hi, I’m <i>Kye-Lee </i>!</p><br/>
                                <p>I'm a <b> problem-solver, lifelong learner, 
                                and an aspiring full-stack developer</b>.</p><br/>
                                <p>After years of creating environments where ideas thrive 
                                and people succeed in education, I’m now channeling that energy into 
                                <b> building intuitive, user-focused tech solutions</b>. With a passion 
                                for creativity, adaptability, and making things work, 
                                I’m here to bring fresh ideas and a unique perspective to the 
                                tech world. Explore my projects, see what I’ve been building!</p><br/>
                                <a href="" className="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-green-800">
                                    View my CV
                                </a>
                            </div>
                            <div className="py-12 text-2xl md:text-3xl lg:text-4xl flex space-x-10 justify-center">
                                <i className="devicon-react-original-wordmark colored"></i>
                                <i className="devicon-nextjs-original-wordmark light:colored"></i>
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-typescript-plain colored"></i>
                                <i className="devicon-html5-plain-wordmark colored"></i>
                                <i className="devicon-css3-plain-wordmark colored"></i>
                                <i className="devicon-bootstrap-plain-wordmark colored py-1"></i>
                                <i className="devicon-tailwindcss-plain-wordmark colored text-6xl"></i>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}