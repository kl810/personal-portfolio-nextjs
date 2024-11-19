import Link from "next/link";

interface HamburgerProps {
    isOpen: boolean
}

export default function Hamburger({isOpen}: HamburgerProps) {
    return (
        <>
            <div className="hamburger">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
            <div className="menu">
                <ul > 
                    <li className="menu-links">
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="menu-links">
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </li>
                    <li className="menu-links">
                        <Link href="/projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .hamburger{
                    display: inline-block;
                    cursor: pointer;
                }

                .bar {
                    width: 35px;
                    height: 5px;
                    border-radius: 10px;
                    background-color: #333;
                    margin: 6px 0;
                    transition: 0.4s;
                }

                .bar1 {
                    transform: ${isOpen ? 'rotate(45deg) translate(0, 15px)': 'rotate(0)'}
                }

                .bar2 {
                    opacity: ${isOpen ? 0 : 1}
                }

                .bar3 {
                    transform: ${isOpen ? 'rotate(-45deg) translate(0, -15px)': 'rotate(0)'}
                }
                
                .menu {
                    display: ${isOpen ? 'block' : 'none'}
                    overflow: hidden;
                    background-color: #333;
                    position: relative;
                }

                .menu-links {
                    padding: 14px 16px;
                    text-decoration: none;
                    font-size: 17px;
                    display: block;
                }

                .menu-links:hover {
                    background-color: #ddd;
                    color: black;
                }

                .active {
                    background-color: #04AA6D;
                    color: white;
                }
            `}</style>
        </>
    )
}


// import Link from "next/link";

// interface SidebarProps {
//     isOpen: boolean;
//     toggle: () => void;
// }

// const Sidebar = ({isOpen, toggle,}: SidebarProps): JSX.Element => {
//   return (
//     <>
//       <div
//         className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
//         style={{
//           opacity: `${isOpen ? "1" : "0"}`,
//           top: ` ${isOpen ? "0" : "-100%"}`,
//         }}
//       >
//         <button className="absolute right-0 p-5" onClick={toggle}>
//         {/* Close icon */}
//           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
//             <path
//               fill="currentColor"
//               d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
//             />
//           </svg>
//         </button>

        // <ul className="sidebar-nav text-center leading-relaxed text-xl">
        //   <li>
        //     <Link href="/" onClick={toggle}><p>Home</p></Link>
        //   </li>
        //   <li>
        //     <Link href="/about" onClick={toggle}><p>About</p></Link>
        //   </li>
        //   <li>
        //     <Link href="/projects" onClick={toggle}><p>Projects</p></Link>
        //   </li>
        // </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;