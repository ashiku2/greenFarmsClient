import React from 'react';

const NavBar = () => {

    const navOptions =
        <>
            
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">First Link</a>
                <a className="mr-5 hover:text-gray-900">Second Link</a>
                <a className="mr-5 hover:text-gray-900">Third Link</a>
                <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </nav>
        </>

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='w-28' src="https://i.ibb.co/bzJHsnb/Green-and-White-Circle-Icon-Organic-Food-Logo.png" alt="" />
                        <span className="ml-3 text-2xl text-green-600">GreenFarms</span>
                    </a>
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