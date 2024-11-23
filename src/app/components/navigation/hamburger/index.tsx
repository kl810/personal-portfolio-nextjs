import Link from "next/link";

interface HamburgerProps {
    isOpen: boolean
}

// function openNav() {
//     const overlay = document.querySelector<HTMLElement>('.menu-overlay');
//     overlay!.style.width = "100%"; /* "!" non-null assertion */
// }

// function closeNav() {
//     const overlay = document.querySelector<HTMLElement>('.menu-overlay');
//     overlay!.style.width = "0%";
// }

export default function Hamburger({isOpen}: HamburgerProps) {

    function toggleNav() {
        const overlay = document.querySelector<HTMLElement>('.nav-overlay');
        // return isOpen ? overlay!.style.width='100%': overlay!.style.width='0%'

        overlay!.style.width = isOpen ? '0%': '100%'
        
    }

    return (
        <>
            <div className="hamburger inline-block cursor-pointer py-5 px-2 md:px-4" onClick={toggleNav}>
                <div className="bar bar1 w-9 h-1 my-1.5 rounded-lg bg-gray-900 dark:bg-gray-100"></div>
                <div className="bar bar2 w-9 h-1 my-1.5 rounded-lg bg-gray-900 dark:bg-gray-100"></div>
                <div className="bar bar3 w-9 h-1 my-1.5 rounded-lg bg-gray-900 dark:bg-gray-100"></div>
            </div>
            <div className="nav-overlay h-screen w-0 fixed z-1 top-20 left-0 overflow-x-hidden bg-gray-rgba dark:bg-black-rgba">
                <ul className="overlay-content relative w-full text-center mt-8"> 
                    <li className="nav-links p-4 block text-4xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                        <Link href="/" onClick={toggleNav}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-links p-4 block text-4xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                        <Link href="/about" onClick={toggleNav}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li className="nav-links p-4 block text-4xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                        <Link href="/projects" onClick={toggleNav}>
                            <p>Projects</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .bar {
                    transition: 0.4s;
                }

                .bar1 {
                    transform: ${isOpen ? 'rotate(-45deg) translate(0, 14px)': 'rotate(0)'}
                }

                .bar2 {
                    opacity: ${isOpen ? 0 : 1}
                }

                .bar3 {
                    transform: ${isOpen ? 'rotate(45deg) translate(0, -14px)': 'rotate(0)'}
                }

                .nav-overlay {
                    transition: 0.5s
                }

                .overlay-content {
                    top: 25%;
                }

                .nav-links {
                    transition: 0.3s;
                }
            `}</style>
        </>
    )
}

