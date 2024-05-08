// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// // import component 👇
// import Drawer from 'react-modern-drawer'

// //import styles 👇
// import './navbar.css'
// import 'react-modern-drawer/dist/index.css'
// import { TfiAlignJustify } from "react-icons/tfi";
// import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";
// import { HiOutlineViewList } from "react-icons/hi";


// const Navbar = () => {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);

//     const toggleDrawer = () => {
//         setIsOpen((prevState) => !prevState)
//     }
//     const toggleSearch = () => {
//         setIsSearchOpen(prevState => !prevState);
//     };

//     return (
//         <div className='flex justify-between items-center p-3 shadow-lg '>
//             <div>
//                 <img className='w-10' src="https://i.ibb.co/JpNdq9N/b.png" alt="logo" />
//             </div>
//             <div className='main-menu md:block hidden'>
//                 <ul>
//                     <li><NavLink to="/">Home</NavLink>
//                         <ul className='dropdown-menu'>
//                             <li><NavLink to='/homev1'>Home v.1</NavLink></li>
//                             <li><NavLink to='/homev2'>Home v.1</NavLink></li>
//                             <li><NavLink to='/homev3'>Home v.1</NavLink></li>
//                             <li><NavLink to='/homev4'>Home v.1</NavLink></li>
//                             <li><NavLink to='/homev5'>Home v.1</NavLink></li>
//                         </ul>
//                     </li>
//                     <li><NavLink to="/about">About</NavLink></li>
//                     <li><NavLink to="/services">Services</NavLink>
//                         <ul className='dropdown-menu'>
//                             <li><NavLink to='/service1'>Service v.1</NavLink></li>
//                             <li><NavLink to='/service2'>Service v.1</NavLink></li>
//                             <li><NavLink to='/service3'>Service v.1</NavLink></li>
//                             <li><NavLink to='/service4'>Service v.1</NavLink></li>
//                             <li><NavLink to='/service5'>Service v.1</NavLink></li>
//                         </ul>
//                     </li>
//                     <li><NavLink to="/contact">Contact</NavLink></li>
//                 </ul>
//             </div>
//             <div>
//                 <div className='flex items-center gap-5'>
//                     <div className='relative'>
//                         <IoSearch onClick={toggleSearch} className='cursor-pointer  '></IoSearch>

//                         {isSearchOpen && (
//                             <input
//                                 type='text'
//                                 placeholder='Search...'
//                                 className='absolute  right-0 top-0  px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'

//                             />
//                         )}
//                     </div>

//                     <HiOutlineViewList onClick={toggleDrawer} className=' text-2xl hover:cursor-pointer' />
//                     <button type='button' className='bg-red-400 text-white px-3 py-1 rounded-2xl'>GET STARTTED</button>
//                 </div>
//                 <Drawer
//                     open={isOpen}
//                     onClose={toggleDrawer}
//                     direction='left'
//                     className='bla bla bla p-8'
//                 >
//                     <div >
//                         {/* logo */}
//                         <img className='block text-center w-10 m-auto mb-10' src="https://i.ibb.co/JpNdq9N/b.png" alt="logo" />
//                         {/* search input */}
//                         <div className='flex items-center gap-3 mb-5'>
//                             <div className='relative'>
//                                 <input
//                                     type='text'
//                                     placeholder='Search...'
//                                     className='py-2 pl-8  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
//                                 />
//                                 <IoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
//                             </div>
//                         </div>

//                         {/*Drawer Menu */}
//                         <p className='font-medium mb-10'>All Pages</p>
//                         <div className='drawer-menu'>
//                             <ul className=' '>
//                                 <li><NavLink to="/">Home</NavLink></li>
//                                 <li><NavLink to="/about">About</NavLink></li>
//                                 <li><NavLink to="/services">Services</NavLink></li>
//                                 <li><NavLink to="/contact">Contact</NavLink></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </Drawer>

//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import './navbar.css';
import 'react-modern-drawer/dist/index.css';
import { TfiAlignJustify } from "react-icons/tfi";
import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";
import { HiOutlineViewList } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    const toggleSearch = () => {
        setIsSearchOpen(prevState => !prevState);
    };

    return (
        <div className='flex justify-between items-center p-3 shadow-lg'>
            <div>
                <img className='w-10' src="https://i.ibb.co/JpNdq9N/b.png" alt="logo" />
            </div>
            <div className='main-menu md:block hidden'>
                <ul>
                    <li><NavLink to="/">Home</NavLink>
                        <ul className='dropdown-menu'>
                            <li><NavLink to='/homev1'>Home v.1</NavLink></li>
                            <li><NavLink to='/homev2'>Home v.1</NavLink></li>
                            <li><NavLink to='/homev3'>Home v.1</NavLink></li>
                            <li><NavLink to='/homev4'>Home v.1</NavLink></li>
                            <li><NavLink to='/homev5'>Home v.1</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink>
                        <ul className='dropdown-menu'>
                            <li><NavLink to='/service1'>Service v.1</NavLink></li>
                            <li><NavLink to='/service2'>Service v.1</NavLink></li>
                            <li><NavLink to='/service3'>Service v.1</NavLink></li>
                            <li><NavLink to='/service4'>Service v.1</NavLink></li>
                            <li><NavLink to='/service5'>Service v.1</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div>
                <div className='flex items-center gap-5'>
                    <div className='relative'>
                        <IoSearch onClick={toggleSearch} className='cursor-pointer text-2xl' />
                        {isSearchOpen && (
                            <>
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='absolute  md:right-0 -top-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                                />
                                <IoCloseCircleOutline onClick={toggleSearch} className='absolute right-3 md:-right-3 top-1/2 transform -translate-y-8   md:top-3 cursor-pointer text-2xl' />
                            </>
                        )}
                    </div>
                    <HiOutlineViewList onClick={toggleDrawer} className='text-2xl cursor-pointer' />
                    <button type='button' className='bg-[#e74c3c] text-white px-3 py-1 rounded-2xl'>GET STARTED</button>
                </div>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className='bla bla bla p-8'
                >
                    <div>
                        <img className='block text-center w-10 m-auto mb-10' src="https://i.ibb.co/JpNdq9N/b.png" alt="logo" />
                        <div className='flex items-center gap-3 mb-5'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='py-2 pl-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                                />
                                <IoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            </div>
                        </div>
                        <p className='font-medium mb-10'>All Pages</p>
                        <div className='drawer-menu'>
                            <ul>
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
