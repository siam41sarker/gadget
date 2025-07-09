import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import bannerImage from '../../assets/banner.jpg'
const Header = () => {
    return (
        <header className="max-w-7xl h-[500px] md:h-[600px] md:mx-auto lg:mx-auto  bg-[rgb(149,56,226)] rounded-[32px] border-[7px] border-solid border-[rgb(246,246,246)]">
            <div className="navbar bg-transparent px-2 md:px-20 lg:px-20 ">
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
                                <a>Statistics</a>
                            </li>
                            <li className="font-bold sora text-black"><a>Dashboard</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-base md:text-xl lg:text-xl font-bold sora text-white ml-4 md:ml-0 lg:ml-0">Gadget Heaven</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold sora text-white"><a>Home</a></li>
                        <li className="font-bold sora text-white">
                            <a>Statistics</a>
                        </li>
                        <li className="font-bold sora text-white"><a>Dashboard</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <AiOutlineShoppingCart className="bg-white rounded-full  border border-solid border-[rgba(11,11,11,0.1)] w-10 h-10 p-3" />
                    <CiHeart className="ml-2 md:ml-4 bg-white rounded-full  border border-solid border-[rgba(11,11,11,0.1)] w-10 h-10 p-3" />
                </div>
            </div>
            <div className="mt-12 mx-auto px-0  md:px-[150px]">
                <div className="flex flex-col justify-center">
                    <p className="text-center text-2xl leading-none md:leading-[56px] lg:leading-[56px] md:text-4xl lg:text-4xl font-bold sora text-white px-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                    <p className="mt-4 md:mt-0 text-center text-[12px] leading-3 md:leading-[26px] lg:leading-[26px] md:text-base lg:text-base font-normal sora text-white px-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="mt-8 w-[168px] mx-auto shadow py-[15px] px-[30px] text-[rgb(149,56,226)] sora text-xl font-bold bg-white rounded-[32px] text-center">Shop Now</button>
                </div>
            </div>
            <div className="mt-12 w-10/12 h-[350px] md:w-[810px] md:h-auto mx-auto border-2 border-solid border-white rounded-[32px] bg-[rgba(255,255,255,0.3)]">
                    <div className="p-4 md:p-6">
                        <img className="rounded-3xl w-full h-full object-cover" src={bannerImage} alt="banner" />
                    </div>
            </div>
        </header>
    );
}

export default Header;