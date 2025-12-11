import React from 'react';
import { Link, Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    {/* Toggle button - only on mobile */}
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M9 4v16"></path>
                            <path d="M14 10l2 2l-2 2"></path>
                        </svg>
                    </label>
                    <div className="px-4">Dashboard</div>
                </nav>

                {/* Page content */}
                <Outlet></Outlet>

            </div>

            <div className="drawer-side">
                {/* Overlay only on mobile */}
                <label htmlFor="my-drawer-4" className="drawer-overlay lg:hidden"></label>

                <div className="flex min-h-full flex-col items-start bg-base-200 w-64 lg:w-64">
                    <ul className="menu w-full grow">
                        <li>
                            <Link to={'/'} className="tooltip tooltip-right lg:tooltip-none" data-tip="Homepage">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <span className="hidden lg:inline">Homepage</span>
                            </Link>
                        </li>
                        {/* our menubar list hr manager */}
                        <li>HR Manager</li>
                        <Link to={'/dashboard'}><li>Asset List </li></Link>
                        <Link to={'dashboard/addAsset'}><li> Add an Asset </li></Link>
                        <Link to={'dashboard/allRequest'}><li>All Requests Page </li></Link>
                        <Link to={'dashboard/employeeList'}><li>My Employee List </li></Link>
                        <Link to={'dashboard/upgradePakage'}><li>Upgrade Package</li></Link>

                        {/* our menubar list employeer */}
                        <li>Employee Dashboard</li>
                        <Link to={'dashboard/myAsset'}><li>My Assets Page </li></Link>
                        <Link to={'dashboard/requestAsset'}><li> Request an Asset </li></Link>
                        <Link to={'dashboard/myteam'}><li>My Team Page </li></Link>
                        <Link to={'dashboard/profile'}><li> Profile Page (Shared)</li></Link>
                        <li>
                            <button className="tooltip tooltip-right lg:tooltip-none" data-tip="Settings">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                                <span className="hidden lg:inline">Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default DashBoardLayout;
