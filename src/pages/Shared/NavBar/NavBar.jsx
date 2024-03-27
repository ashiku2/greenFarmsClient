import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const navOptions =
        <>
            
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/menu" className="mr-5 hover:text-gray-900">Our Products</Link>
                <Link to="/order" className="mr-5 hover:text-gray-900">Order</Link>
            </nav>
        </>

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='w-28' src="https://i.ibb.co/wR2smtp/Green-and-White-Circle-Icon-Organic-Food-Logo-removebg-preview.png" alt="" />
                        <span className="ml-3 text-2xl text-green-600">GreenFarms</span>
                    </Link>
                    {
                        navOptions
                    }
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>   
        </>
    );
};

export default NavBar;