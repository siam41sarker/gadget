import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router";
import { getStoredDataFromLs, getStrWFromLs } from "../../../public/loc/storedData";
import { useEffect, useState } from "react";
const NavBar = ({ isTransparent }) => {
    const loc = useLocation();
    console.log(loc.pathname);
    const [getCartId,setCartId] = useState([])
    const [getWishId,setWishCart] = useState([]);
    useEffect(()=>
            {
                setCartId(getStoredDataFromLs());
                setWishCart(getStrWFromLs());
            },[])
    return (
        <div>
            <div className={`navbar ${isTransparent === 'yes' ? 'bg-transparent' : 'bg-white'} px-2 md:px-20 lg:px-20`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="font-bold sora text-black"><a>Home</a></li>
                            <li className="font-bold sora text-black">
                                <NavLink to={'/dashboard'}>Dashboard</NavLink>
                            </li>
                            <li className="font-bold sora text-black"><NavLink to={'/statistics'}>Statistics</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to={'/'} className={`${isTransparent === 'yes' ? 'text-white' : 'text-[rgba(11,11,11,0.7)]'} btn btn-ghost text-base md:text-xl lg:text-xl font-bold sora ml-4 md:ml-0 lg:ml-0`}>Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className={`${isTransparent === 'yes' ? loc.pathname === '/' ? 'text-[rgb(159,56,226)] bg-white rounded-[32px]' : 'text-white' : 'text-[rgba(11,11,11,0.7)]'} font-bold sora`}><NavLink to='/'>Home</NavLink></li>
                        <li className={`${isTransparent === 'yes' ? 'text-white' : loc.pathname === '/dashboard' ? 'text-[rgb(159,56,226)]' : 'text-[rgba(11,11,11,0.7)]'} font-bold sora `}>
                            <NavLink to={'/dashboard'}>Dashboard</NavLink>
                        </li>
                        <li className={`${isTransparent === 'yes' ? 'text-white' : loc.pathname === '/statistics' ? 'text-[rgb(159,56,226)]' : 'text-[rgba(11,11,11,0.7)]'} font-bold sora `}>
                            <NavLink to={'/statistics'}>Statistics</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={'/dashboard'}><AiOutlineShoppingCart className="bg-white rounded-full  border border-solid border-[rgba(11,11,11,0.1)] w-10 h-10 p-3" /></NavLink>
                    <div className="relative w-5 h-5 -top-3 -left-3 rounded-full bg-red-700 flex justify-center items-center text-white text-[12px] ">{getCartId.length}</div>
                    <NavLink to={'/dashboard'}><CiHeart className="ml-2 md:ml-4 bg-white rounded-full  border border-solid border-[rgba(11,11,11,0.1)] w-10 h-10 p-3" /></NavLink>
                    <div className="relative w-5 h-5 -top-3 -left-3 rounded-full bg-blue-700 flex justify-center items-center text-white text-[12px] ">{getWishId.length}</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;