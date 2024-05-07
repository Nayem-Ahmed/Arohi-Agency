import React from 'react';
import { NavLink } from 'react-router-dom';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import './navbar.css'
import 'react-modern-drawer/dist/index.css'
import { TfiAlignJustify } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className='flex justify-between items-center p-5 shadow-lg '>
            <div>
                <img src="" alt="logo" />
            </div>
            <div className='main-menu'>
                <ul className='flex'>
                    <li><NavLink to="/">Home</NavLink>
                        <ul className='dropdown-menu'>
                            <li><NavLink>Home v.1</NavLink>
                                {/* <ul className='inner-dropdown-menu'>
                                    <li><NavLink>Home 2</NavLink></li>
                                    <li><NavLink>Home 2</NavLink></li>
                                    <li><NavLink>Home 2</NavLink></li>
                                    <li><NavLink>Home 2</NavLink></li>
                                </ul> */}
                            </li>
                            <li><NavLink>Home v.1</NavLink></li>
                            <li><NavLink>Home v.1</NavLink></li>
                            <li><NavLink>Home v.1</NavLink></li>
                            <li><NavLink>Home v.1</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div>
                <div className='flex items-center gap-5'>
                    <IoSearch></IoSearch>
                    <button onClick={toggleDrawer}><TfiAlignJustify></TfiAlignJustify></button>
                    <button type='button' className='bg-red-400 text-white px-3 py-1 rounded-2xl'>GET STARTTED</button>
                </div>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className='bla bla bla p-8'
                >
                    <div>
                        {/* logo */}
                        <img className='block text-center w-10 m-auto mb-10' src="https://i.ibb.co/JpNdq9N/b.png" alt="logo" />
                        {/* search input */}
                        <div className='flex items-center gap-3 mb-5'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='py-2 pl-8  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                                />
                                <IoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            </div>
                        </div>

                        {/* Menu */}
                        <p className='font-medium mb-10'>All Pages</p>
                        <div className='drawer-menu'>
                            <ul className=' '>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </Drawer>

            </div>
        </div>
    );
};

export default Navbar;