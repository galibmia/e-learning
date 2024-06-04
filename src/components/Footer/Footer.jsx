import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full hero-bg">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-6 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline">About</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/courses" className="hover:underline">Courses</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/events" className="hover:underline">Events</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/blogs" className="hover:underline">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Discord Server</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Twitter</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Facebook</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Licensing</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Download</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">iOS</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Android</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Windows</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">MacOS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6bg-gray-700 md:flex md:items-center md:justify-between pb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                        © 2024 <Link to="/">E-Learning</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <Link to="#" className="text-gray-400 hover:text-gray-200 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-200 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-200 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.853.069A4.077 4.077 0 0 0 5.9 12.4a8.292 8.292 0 0 1-6.1 1.683A11.675 11.675 0 0 0 6.29 16c7.548 0 11.675-6.155 11.675-11.5 0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-gray-200 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3 3 0 0 1 .1 1.768 3.832 3.832 0 0 1 1.265 2.673c0 3.814-2.317 4.648-4.524 4.889a1.181 1.181 0 0 1 .67 1.1c0 .794-.01 2.113-.01 2.426 0 .265.18.575.688.477A9.92 9.92 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;