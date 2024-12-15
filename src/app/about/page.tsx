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
                            width={300}
                            height={300}
                            alt="Profile Photo of Kye-Lee"
                            className="rounded-full m-2 shadow-md shadow-gray-900 !block"
                        />
                    </div>
                    <div className="flex justify-center items-center col-span-1 lg:col-span-2">
                        <p className="whitespace-normal text-gray-900 dark:text-gray-100 text-xl">
                            Hi, I’m Kye-Lee — a problem-solver, lifelong learner, 
                            and now, an aspiring full-stack developer! 
                            I’ve spent years creating environments where ideas thrive 
                            and people succeed, and now I’m channeling that energy into 
                            building intuitive, user-focused tech solutions. With a passion 
                            for creativity, adaptability, and making things work, 
                            I’m here to bring fresh ideas and a unique perspective to the 
                            tech world. Explore my projects, see what I’ve been building!
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-16 md:px-28">
                <h3 className="text-2xl font-bold">Skills</h3>
                <div className="py-5 text-xl md:text-2xl lg:text-4xl flex space-x-10 justify-center">
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-nextjs-original-wordmark light:colored"></i>
                    <i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-typescript-plain colored"></i>
                    <i className="devicon-html5-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                    <i className="devicon-bootstrap-plain-wordmark colored py-1"></i>
                    <i className="devicon-tailwindcss-plain-wordmark colored text-6xl flex items-start"></i>    
                </div>
            </div>
        </>
    )
}