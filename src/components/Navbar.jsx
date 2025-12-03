import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully!");
            })
            .catch(error => toast.error(error.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => 
                    isActive ? "bg-green-500 text-white px-3 py-2 rounded" : "text-white hover:text-green-400 px-3 py-2 rounded"
                }>Home</NavLink>
            </li>

            <li>
                <NavLink to="/my-toys" className={({ isActive }) => 
                    isActive ? "bg-green-500 text-white px-3 py-2 rounded" : "text-white hover:text-green-400 px-3 py-2 rounded"
                }>All Toys</NavLink>
            </li>
            {user &&<li><NavLink to="/my-profile" className={({ isActive }) => 
                    isActive ? "bg-green-500 text-white px-3 py-2 rounded" : "text-white hover:text-green-400 px-3 py-2 rounded"
                }>My Profile</NavLink>
            </li>}
        </>
    );

    return (
        <div className="navbar bg-black shadow-md border">
            <div className="container mx-auto flex justify-between items-center">
                {/* Hamburger menu */}
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn px-2 btn-ghost  border-green-400 text-white hover:bg-green-400 hover:text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact flex gap-1 dropdown-content mt-3 p-2 shadow border border-green-400 rounded-box w-30 bg-black font-bold"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="px-2 text-white text-2xl font-bold">
                        ToyTopia
                    </Link>
                </div>

                {/* Desktop nav links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
                </div>

                {/* Profile / Auth buttons */}
                <div className="navbar-end flex items-center gap-2">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost hover:border-green-400 btn-circle avatar" title={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL || 'https://i.ibb.co/sd9jBbLp/user.png'} alt="User" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2  menu menu-compact dropdown-content bg-black text-white border border-green-400 rounded-box w-30"
                            >
                                <li>
                                    <Link to="/my-profile" className= "justify-between  font-bold text-white hover:bg-green-400">
                                        Profile
                                    </Link>
                                </li>
                                <li className="font-bold text-white hover:bg-green-400 rounded">
                                    <button onClick={handleLogOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="btn border-0 shadow font-bold hover:bg-green-400"
                            >
                                Login
                            </Link>
                            <Link
                                to="/Register"
                                className="hidden sm:flex btn btn-outline border-green-400 shadow font-bold text-green-400 hover:text-black hover:bg-green-400"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;