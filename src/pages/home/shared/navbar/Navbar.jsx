import React from 'react';
// import logoImg from '../../../../assets/1.png'
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[18px] font-semibold">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/joinAsEmployee'}>Join as Employee</Link></li>
                        <li><Link to={'/JoinAsHrManager'}>Join as HR Manager</Link></li>
                        {/* dropdown menu */}
                        {/* <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}

                    </ul>
                </div>
                {/* logo */}
                <div className='text-2xl font-extrabold '>
                    <h1>Asset <span className='text-blue-500'>Verse</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[18px] font-semibold">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/joinAsEmployee'}>Join as Employee</Link></li>
                    <li><Link to={'/JoinAsHrManager'}>Join as HR Manager</Link></li>
                    {/* droupdown menu */}
                    {/* <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 w-40 z-1">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}

                </ul>
            </div>
            {/* login button */}
            <div className="navbar-end">
                <h1 className='btn'>Login</h1>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;