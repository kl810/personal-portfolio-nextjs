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
            <div className="hamburger" onClick={toggleNav}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
            <div className="nav-overlay">
                {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
                <ul className="overlay-content"> 
                    <li className="nav-links">
                        <Link href="/" onClick={toggleNav}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link href="/about" onClick={toggleNav}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link href="/projects" onClick={toggleNav}>
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
                
                .nav-overlay {
                    height: 100%;
                    width: 0;
                    position: fixed;
                    z-index: 1;
                    top: 5rem;
                    left: 0;
                    background-color: rgb(0,0,0);
                    background-color: rgba(0,0,0, 0.9);
                    overflow-x: hidden;
                    transition: 0.5s;
                }

                .overlay-content {
                    position: relative;
                    top: 25%;
                    width: 100%;
                    text-align: center;
                    margin-top: 30px;
                }

                .nav-links {
                    padding: 8px;
                    text-decoration: none;
                    font-size: 36px;
                    color: #818181;
                    display: block;
                    transition: 0.3s;
                }

                .nav-links:hover, .nav-links:focus {
                    color: #f1f1f1;
                }
                
                .closebtn {
                    color: #818181
                }

                .nav-overlay .closebtn {
                    position: absolute;
                    top: 20px;
                    right: 45px;
                    font-size: 60px;
                }
            `}</style>
        </>
    )
}

