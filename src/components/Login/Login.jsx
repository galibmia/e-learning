import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='w-4/5 md:max-w-sm mx-auto mt-32 mb-16'>
            <form >
                <h1 className='text-3xl font-bold mb-3 text-gray-900'>Login</h1>
                <span className=" my-6 text-sm font-medium "><span className='text-gray-500'>Don't have an account yet? </span><Link to={'/signup'} className='text-blue-800'>Sign up for free</Link></span>
                <div className="my-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full md:h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@e-learning.com" required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full md:h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className=" button-login text-white focus:outline-none font-normal rounded-sm text-lg w-full md:h-12 px-5 py-2.5 text-center ">Login</button>
            </form>
            <div>
                <p className='text-center my-5'>Or sign in using</p>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                    <button className='button-login-github w-full md:w-1/2 h-12 rounded-md'>Log In via GitHub</button>
                    <button className='button-login-google w-full md:w-1/2 h-12 rounded-md'>Log In via Google+</button>
                </div>
            </div>
        </div>
    );
};

export default Login;