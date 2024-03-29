import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaCartArrowDown, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUtensilSpoon } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensilSpoon />Add Items</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/manageItems"><FaList />Manage Items</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/bookings"><FaList />Manage Bookings Bookings</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/users"><FaUser />All Users</NavLink>
                            </li> 
                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendar />Reservation</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/review"><FaAd />Reviews</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/bookings"><FaList />My Bookings</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/cart"><FaCartArrowDown />My Cart</NavLink>
                                </li>
                            
                            </>
                    }
                    <div className='divider'>OR</div>

                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/order/salad"><FaSearch />Menu</NavLink>
                    </li>

                    <li>
                        <NavLink to="/order/contact"><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;