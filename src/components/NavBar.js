import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link
                to='/'
            >
                Juan Garcia
            </Link>

            <ul>
                <li title="About">
                    <Link
                        to='/about'
                    >
                        <img src='/images/About.png' alt='About' id="icon"/>
                    </Link>
                </li>

                <li title="Contact">
                    <Link
                        to='/contact'
                    >
                        <img src='/images/Contact.png' alt='About' id="icon"/>
                    </Link>
                </li>

                <li title="Projects">
                    <Link
                        to='/projects'
                    >
                        <img src='/images/Projects.png' alt='About' id="icon"/>
                    </Link>
                </li>

                <li title="Resume">
                    <Link
                        to='/resume'
                    >
                        <img src='/images/Resume.png' alt='About' id="icon"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar