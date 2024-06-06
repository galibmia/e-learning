import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <nav className="navbar fixed top-0 left-0 z-10 w-full hero-bg">
            <div className="w-4/5 flex flex-wrap items-center justify-between mx-auto py-4">
                <h1 className='text-2xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-white'>E-learning</h1>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center">
                        <li>
                            <ActiveLink to={'/'}>Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to={'/courses'}>Courses</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to={'/events'}>Events</ActiveLink>

                        </li>
                        <li>
                            <ActiveLink to={'/blogs'}>Blog</ActiveLink>

                        </li>
                        <li>
                            <ActiveLink to={'/contact'}>Contact</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to={'/about'}>About Us</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to={'/login'}>Login</ActiveLink>
                        </li>
                        <li>
                            <button className='button-signUp'><Link to={'/signup'}>Sign Up</Link></button>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='hr sm:hidden' />
        </nav>










        // <nav className='px-10 pt-4 md:px-52 navbar fixed top-0 left-0 z-10 w-full hero-bg'>
        //     <div className='flex justify-between items-center '>
        //     <div>
        //         <h1 className='text-2xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-white'>E-learning</h1>
        //     </div>
        //     <div className='flex gap-5 items-center'>
        //         <ActiveLink to={'/'}>Home</ActiveLink>
        //         <ActiveLink to={'/courses'}>Courses</ActiveLink>
        //         <ActiveLink to={'/events'}>Events</ActiveLink>
        //         <ActiveLink to={'/blogs'}>Blog</ActiveLink>
        //         <ActiveLink to={'/contact'}>Contact</ActiveLink>
        //         <ActiveLink to={'/about'}>About Us</ActiveLink>
        //     </div>
        //     <div className='flex items-center'>
        //         <ActiveLink to={'/login'}>Login</ActiveLink>
        //         <button className='button-signUp'><Link to={'/signup'}>Sign Up</Link></button>
        //     </div>
        //     </div>
        //     <hr className='hr' />
        // </nav>
    );
};

export default Header;