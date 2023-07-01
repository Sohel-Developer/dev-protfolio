
import { Link, NavLink } from 'react-router-dom';
import './Manubar.css'
import { Button, Navbar } from 'flowbite-react';

const Manubar = () => {




    return (
        <>

            <Navbar
                className='bg-transparent'
                fluid
                rounded
            >
                <Navbar.Brand href="/" >
                    <span className=" text-animation self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><p className="text-sm md:text-md font-semibold leading-5 tracking-widest text-black "> &lt; Web Developer & <br /> Curious programmer . /&gt;</p></span>

                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='' >

                        <Link to="https://drive.google.com/file/d/1-4vDXzmVKx8m2s4BfcuG07OtX6BNIcqu/view?usp=sharing" target='_blank' download="Sohel_Developer_Resume.pdf">Download Resume</Link>

                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active text-cyan-700 font-bold " : ""
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "active text-cyan-700 font-bold " : ""
                    } to="/about">

                        About
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "active text-cyan-700 font-bold " : ""
                    } to="/skill">

                        Skill
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "active text-cyan-700 font-bold " : ""
                    } to="/project">

                        Project
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "active text-cyan-700 font-bold " : ""
                    } to="/contact">

                        Contact
                    </NavLink>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Manubar;