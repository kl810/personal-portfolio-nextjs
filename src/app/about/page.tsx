import Image from "next/image";
import image from './KL-Linkedin-photo.jpeg'

export default function About() {
    return (
        <>
            <div className="px-16 md:px-28 pt-16">
                <h1 className="text-5xl md:text-6xl font-bold">About</h1>
                <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 m-10 max-w-screen-2xl"> {/*lg:m-28*/}
                    <div className="flex justify-center lg:m-16">
                        <Image 
                            src={image}
                            width={350}
                            height={350}
                            alt="Profile Photo of Kye-Lee"
                            className="rounded-full m-2 shadow-md shadow-gray-900 !block lg:absolute"
                        />
                    </div>
                    <div className="flex justify-center items-center col-span-1 lg:col-span-2">
                        <div>
                            <div className="whitespace-normal text-gray-900 dark:text-gray-100 text-xl px-10 pb-5">
                                <p>Hi, I&apos;m Kye-Lee!</p><br/>

                                <p>I&apos;m a <b>teacher</b>, <b>lifelong learner</b>,  
                                and an <b>aspiring full-stack developer</b> on a mission to close the digital divide 
                                and create opportunities for <b>social mobility</b> through tech.</p><br/>

                                <p>Having spent years in education, I&apos;ve learned how to help people grow, 
                                foster positive environments and approach problems with a <b>solution-oriented mindset</b>. 
                                Now, I&apos;m channeling that experience into tech, an industry that excites me with 
                                its creativity, innovation and power to create change. I believe tech skills should be as fundamental 
                                as reading, writing and arithmetic — ensuring that everyone, regardless of background, has access to 
                                opportunities in the increasingly digital world.</p><br/>

                                <p>I&apos;m driven to build <b>user-focused tech solutions</b> that breaks barriers and to <b>collaborate </b>
                                with others to build something meaningful on a larger scale.
                                
                                With a passion for creativity, adaptability and making things work, 
                                I am here to offer fresh ideas and a unique perspective to the 
                                tech world.</p><br />
                                
                                <p>Explore my projects to see what I have been building!</p><br/>
                                <a href="https://storage.googleapis.com/otta-uploads/candidate-cv/t1cRwJg5QyoB5XouZlKnBT5FROmq4_Yrk-kIwJcBWLI.pdf" 
                                    target="_blank" 
                                    className="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                    View my CV
                                </a>
                            </div>
                            <div className="py-12 text-xl md:text-3xl lg:text-4xl flex space-x-10 justify-center">
                                <i className="devicon-react-original-wordmark colored"></i>
                                <i className="devicon-nextjs-original-wordmark light:colored"></i>
                                <i className="devicon-nodejs-plain-wordmark"></i>
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-typescript-plain colored"></i>
                                <i className="devicon-html5-plain-wordmark colored"></i>
                                <i className="devicon-css3-plain-wordmark colored"></i>
                                <i className="devicon-bootstrap-plain-wordmark colored py-1"></i>
                                <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
                                <i className="devicon-mongodb-plain-wordmark colored"></i>
                                {/* <i className="devicon-tailwindcss-plain-wordmark colored text-6xl"></i>     */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}