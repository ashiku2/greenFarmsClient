import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { CiShoppingCart } from "react-icons/ci";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const navOptions =
        <>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/menu" className="mr-5 hover:text-gray-900">Our Products</Link>
                <Link to="/order" className="mr-5 hover:text-gray-900">Order</Link>
                {
                    user && isAdmin && <Link to="/dashboard/adminHome" className="mr-5 hover:text-gray-900">Dashboard</Link>
                }

                {
                    user && !isAdmin && <Link to="/dashboard/userHome" className="mr-5 hover:text-gray-900">Dashboard</Link>
                }
                <Link to="/dashboard/cart">
                    <button className="btn m-4">
                        <CiShoppingCart />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>

                {
                    user ? <>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className='btn btn-ghost'>Logout
                        </button>
                    </>
                        :
                        <>
                            <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
                        </>
                }
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

                </div>
            </header>
        </>
    );
};

export default NavBar;