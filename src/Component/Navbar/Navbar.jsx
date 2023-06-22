
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const menuItems = <>
        <li className='hover:text-[#e02f6b]'><Link>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link>Skill</Link></li>
        <li><Link>Project</Link></li>
        <li><Link>Contuct</Link></li>
    </>


    return (
        <>
            <nav className=" fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="btn">Resume Download</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;