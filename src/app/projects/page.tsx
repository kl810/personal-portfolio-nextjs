'use client'

import Image from "next/image";

export default function Projects() {
    return (
        <>
            <div className="px-28 pt-16">
                <h1 className="text-6xl font-bold">Projects</h1>
                <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            <div className="flex justify-center w-full absolute -z-50">
                <div className="grid grid-cols-1 justify-items-center items-center mb-20 lg:grid-cols-2 lg:gap-5">
                    <div className="project-card-container relative w-3/4 lg:size-5/6 group flex justify-center">
                        <Image 
                            src="/recipe-app-home.png"
                            width={600}
                            height={600}
                            alt="Recipe App Homepage"
                            className="project-img m-2 h-auto w-100 block opacity-100 group-hover:opacity-30 rounded-2xl"
                        />
                        <div className="project-overlay opacity-0 absolute top-1/2 left-1/2 w-max text-center group-hover:opacity-100">
                            <a href="https://food-waste-warrior.kyelee.dev" className="overlay-text text-gray-200 bg-blue-500 dark:bg-indigo-500 hover:text-gray-100 py-4 px-8 rounded-full flex justify-center">Food Waste Warrior</a>
                        </div>
                    </div>
                    
                    <div className="project-card-container relative w-3/4 lg:size-5/6 group flex justify-center">
                        <Image 
                            src="/grocery-list-app.jpg"
                            width={600}
                            height={600}
                            alt="Grocery List App"
                            className="project-img m-2 h-auto w-100 block opacity-100 group-hover:opacity-30 rounded-2xl"
                        />
                        <div className="project-overlay opacity-0 absolute top-1/2 left-1/2 w-max text-center group-hover:opacity-100">
                            <a href="https://grocery-list.kyelee.dev" className="overlay-text text-gray-200 bg-blue-500 dark:bg-indigo-500 hover:text-gray-100 py-4 px-8 rounded-full flex justify-center">Grocery List App</a>
                        </div>
                    </div>

                    <div className="project-card-container relative w-3/4 lg:size-5/6 group flex justify-center">
                        <Image 
                            src="/weather-app.png"
                            width={600}
                            height={600}
                            alt="Weather App"
                            className="project-img m-2 h-auto w-100 block opacity-100 group-hover:opacity-30 rounded-2xl"
                        />
                        <div className="project-overlay opacity-0 absolute top-1/2 left-1/2 w-max text-center group-hover:opacity-100">
                            <a href="https://weather.kyelee.dev" className="overlay-text text-gray-200 bg-blue-500 dark:bg-indigo-500 hover:text-gray-100 py-4 px-8 rounded-full flex justify-center">Weather App</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .project-img {
                    transition: .5s ease;
                }

                .project-overlay {
                    transition: .5s ease;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </>
    )
}