import React from 'react';
// import logoImg from '../../../../assets/1.png'
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                toast.success("LogOut succesfully")
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                toast.error("LouOut failed ..try again")
            })
    }
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


                </ul>
            </div>
            {/* login button */}
            <div className="navbar-end">
                {user ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 bg-gray-400 rounded-full">
                            <img
                                alt="user Image"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  ">
                        <div className='flex flex-col gap-2'>


                            <Link> <li className='btn'>Profile</li></Link>
                            <li className='btn' type="submit" onClick={handleLogOut}>Logout</li>
                        </div>
                    </ul>
                </div> : <Link to={'/login'}><h1 className='btn'>Login</h1></Link>

                }


            </div>
        </div>
    );
};

export default Navbar;