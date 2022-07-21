import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Button from './Button';
import NavLink from './NavLink';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-white'>
            <div className='flex items-center font-medium justify-around'>

                <div className='z-50 p-5 md:w-auto w-full flex  justify-between'>
                    <h1 className='md:cursor-pointer h-9'>LogoAtiq</h1>
                    <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>

                <ul className='md:flex hidden  uppercase items-center gap-8 font-[poppins]'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                          Home
                        </Link>
                    </li>
                    <NavLink />
                </ul>
                <div className='md:block hidden'>
                    <Button></Button>
                </div>

                 {/* For  Mobile  nav  */}
                <ul className={`
                md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}>
                   <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                          Home
                        </Link>
                    </li>
                    <NavLink />
                    <div className='py-5 '>
                        <Button />
                    </div>
                </ul>

            </div>
            
        </nav>
    );
};

export default Navbar;