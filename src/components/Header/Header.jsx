import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"


const Header = () => {
    return (
        <nav className='w-full px-10 py-4 md:px-24 flex justify-between items-center bg-color-header navbar'>
            <div>
                <h1 className='text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white'>E-learning</h1>
            </div>
            <div className='flex gap-5 items-center'>
                <ActiveLink to={'/'}>Home</ActiveLink>
                <ActiveLink to={'/courses'}>Courses</ActiveLink>
                <ActiveLink to={'/events'}>Events</ActiveLink>
                <ActiveLink to={'/blogs'}>Blog</ActiveLink>
                <ActiveLink to={'/contact'}>Contact</ActiveLink>
                <ActiveLink to={'/about'}>About Us</ActiveLink>
            </div>
            <div className='flex items-center'>
                <ActiveLink to={'/login'}>Login</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;