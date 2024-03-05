import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="shadow sticky z-50 top-0" >
                <div>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    
                    <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                        <div className="flex items-center gap-4">
                    <div className="md:hidden ml-[-10px]">
                            <button
                                onClick={toggleMenu}
                                className="block text-gray-800 pl-1 pr-2 py-2"
                            >
                                <svg
                                    className="h-6 w-6 "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    )}
                                </svg>
                            </button>
                        </div>

                        <Link to="/Home-Decor-Website" className="ml-[-15px] sm:ml-0 flex items-center">
                            <h1 className="md:mr-3 h-12 text-[1.1rem] sm:text-2xl text-sky-900 font-bold flex items-center">
                                EleGance-Hub
                            </h1>
                        </Link>
                        </div>
                        <div className="hidden md:flex items-center">
                            <NavLink
                                to="/Home-Decor-Website"
                                className="text-gray-700 hover:text-orange-700 px-3 py-2 font-medium"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="Home-Decor-Website/productPage"
                                className="text-gray-700 hover:text-orange-700 px-3 py-2 font-medium"
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="Home-Decor-Website/about"
                                className="text-gray-700 hover:text-orange-700 px-3 py-2 font-medium"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="Home-Decor-Website/contact"
                                className="text-gray-700 hover:text-orange-700 px-3 py-2 font-medium"
                            >
                                Contact Us
                            </NavLink>
                        </div>

                        <div className="flex items-center">
                            <Link
                                to="Login"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="Home-Decor-Website/cart"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </div>

                        
                    </div>
                </nav>
                </div>
                <div>
                <div className={`${isOpen ? 'block' : 'hidden'} `}>
                <ul className="flex flex-col font-medium sticky bg-white">
                    <li>
                        <NavLink
                            onClick={toggleMenu}
                            to="/Home-Decor-Website"
                            className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={toggleMenu}
                            to="/Home-Decor-Website/productPage"
                            className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={toggleMenu}
                            to="/Home-Decor-Website/about"
                            className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={toggleMenu}
                            to="/Home-Decor-Website/contact"
                            className="block py-2 pr-4 pl-3 duration-200 border-b text-gray-700 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
                </div>
            </header>
            
        </>
    );
}
