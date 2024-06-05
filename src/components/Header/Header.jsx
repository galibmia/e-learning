import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <nav className='px-10 pt-4 md:px-52 navbar fixed top-0 left-0 z-10 w-full hero-bg'>
            <div className='flex justify-between items-center '>
            <div>
                <h1 className='text-2xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-4xl text-white'>E-learning</h1>
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
                <button className='button-signUp'><Link to={'/signup'}>Sign Up</Link></button>
            </div>
            </div>
            <hr className='hr' />
        </nav>
    );
};

export default Header;