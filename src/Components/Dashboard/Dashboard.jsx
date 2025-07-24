import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { FiSliders } from 'react-icons/fi'
import { deleteFromLs, deleteWFromLs, getStoredDataFromLs, getStrWFromLs } from "../../../public/loc/storedData";
import { TiDeleteOutline } from "react-icons/ti";
import icons from "../../assets/Group.png"
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
const Dashboard = () => {
    const navToHome = useNavigate();
    const { pathname } = useLocation();
    const [isTransparent, setIsTransparent] = useState('no');
    const [cartBool, setCartBool] = useState('one');
    const loadedAllData = useLoaderData();
    const [cartData, setCartData] = useState([]);
    const [wishData, setWishData] = useState([]);
    const handleDeleteCart = id => {
        const filtered = cartData.filter(data => data.product_id !== id);
        setCartData(filtered);
        deleteFromLs(id);
        toast.success("Successfully Deleted From Cart!", {
            position: "top-center"
        });
        setTimeout(() => {
            navToHome('/');
        }, 6000);
    }
    const handleDeleteWish = id => {
        const filtered = wishData.filter(data => data.product_id !== id);
        setWishData(filtered);
        deleteWFromLs(id);
        toast.success("Successfully Deleted From Wishlist!", {
            position: "top-center"
        });
        setTimeout(() => {
            navToHome('/');
        }, 6000)
    }
    let TotalPrice = 0;
    console.log(loadedAllData);
    let totalWishPrice = 0;
    for (const each of wishData) {
        totalWishPrice = totalWishPrice + each.price;
    }
    useEffect(() => {
        const getIdFromLs = getStoredDataFromLs();
        const filteredFromAll = [];
        for (const id of getIdFromLs) {
            const filteredID = loadedAllData.filter(each => each.product_id === id);
            filteredFromAll.push(...filteredID);
        }
        setCartData(filteredFromAll);
    }, []);
    useEffect(() => {
        const getWishFromLs = getStrWFromLs();
        const fileredData = [];
        for (const ids of getWishFromLs) {
            const filteredWish = loadedAllData.filter(each => each.product_id === ids);
            fileredData.push(...filteredWish);
        }
        setWishData(fileredData);
    }, [])
    useEffect(() => {
        if (pathname === '/') {
            setIsTransparent('yes');
        }
        else {

            setIsTransparent('no');
        }
    }, [pathname]);

    console.log(cartData);
    const handleWishSort = () => {
        if (totalWishPrice === 0) {
            toast.error("No Item To Sort!", {
                position: "top-center"
            });
        }
        else {
            const sortedWish = [...wishData].sort((a, b) => b.price - a.price);
            setWishData(sortedWish);
        }
    }
    for (const each of cartData) {
        TotalPrice = TotalPrice + each.price;
    }
    const handleSort = () => {
        if (TotalPrice === 0) {
            toast.error("No Item To Sort!", {
                position: "top-center"
            });
        }
        else {
            const sortedData = [...cartData].sort((a, b) => b.price - a.price);
            setCartData(sortedData);
        }
    }
    const handleModal = () => {
        localStorage.removeItem("Cart");
        navToHome('/');
    }
    const handleModalShow = () => {
        if (TotalPrice === 0) {
            toast.error("No Item To Purchase!", {
                position: "top-center"
            });
        }
        else {
            document.getElementById('my_modal_5').showModal()
        }
    }
    return (
        <div>
            <Helmet>
                <title>DashBoard | Gadget Heaven</title>
            </Helmet>
            <div className={`max-w-full ${pathname === `/dashboard` && 'md:h-[350px]'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
                {pathname === `/dashboard` && <NavBar isTransparent={isTransparent}></NavBar>}
                {pathname === `/dashboard` && <Banner title={'Dashboard'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} cartBool={cartBool} setCartBool={setCartBool}></Banner>}

            </div>
            <div>
                {
                    cartBool === 'one' ? <div>
                        <div className="mt-12 max-w-7xl mx-auto flex justify-between items-center">
                            <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">Cart</p>
                            <div className="flex items-center">
                                <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">Total Cost: ${TotalPrice.toFixed(2)}</p>
                                <button className={`w-[136px]  ml-4 h-[52px] ${TotalPrice === 0 ? 'bg-[#f0f0f0] text-gray-300 hover:bg-[#f0f0f0] cursor-not-allowed hover:text-gray-300 border-gray-300' : 'text-[rgb(149,56,226)] hover:text-white hover:bg-[rgb(149,56,226)]'} border border-solid border-[rgb(149,56,226)] flex justify-center items-center bg-transparent rounded-[32px] btn_shadow px-[11px] py-[22px] w-[196px] gap-4`}>
                                    <p onClick={handleSort} className=" sora text-lg font-semibold"> Sort by Price</p>
                                    <FiSliders />
                                </button>
                                <button onClick={handleModalShow} className={`w-[136px]  ml-4 h-[52px] ${TotalPrice === 0 ? 'bg-[#f0f0f0] text-gray-300 hover:bg-[#f0f0f0] cursor-not-allowed hover:text-gray-300 border-gray-300': 'text-[rgb(149,56,226)] hover:text-white hover:bg-[rgb(149,56,226)] cursor-pointer'} border border-solid border-[rgb(149,56,226)] flex justify-center items-center bg-transparent rounded-[32px] btn_shadow`}>
                                    <p className="sora text-lg font-semibold">Purchase</p>
                                </button>
                            </div>
                        </div>
                        {
                            cartData.map(each => <div key={each.product_id} className="mt-8 max-w-7xl h-[188px] mx-auto bg-white flex gap-8 rounded-2xl p-8">
                                <div className="w-1/6 rounded-xl">
                                    <img className="w-full h-full object-cover rounded-xl" src={each.product_image} alt={cartData.product_title} />
                                </div>
                                <div className="w-5/6 flex justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[rgb(9,8,15)] sora text-2xl font-semibold"> {each.product_title} </h3>
                                        <p className="text-[rgba(9,8,15,0.6)] sora text-lg font-normal">{each.description}</p>
                                        <p className="text-[rgba(9,8,15,0.8)] sora text-xl font-semibold">Price: ${each.price}</p>
                                    </div>
                                    <TiDeleteOutline onClick={() => handleDeleteCart(each.product_id)} className="text-[rgb(255,0,0)] w-9 h-9 mr-16 cursor-pointer" />
                                </div>
                            </div>)
                        }
                    </div> : <div className="mt-12 max-w-7xl mx-auto">
                        <div className="flex justify-between items-center">
                            <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">WishList</p>
                            <div className="flex items-center">
                                <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">Total Cost: ${totalWishPrice.toFixed(2)}</p>
                                <button onClick={handleWishSort} className={`w-[136px] text-[rgb(149,56,226)] hover:text-white hover:bg-[rgb(149,56,226)] ml-4 h-[52px] ${totalWishPrice === 0 && 'bg-[#f0f0f0] text-gray-300 hover:bg-[#f0f0f0] cursor-not-allowed hover:text-gray-300 border-gray-300'} border border-solid border-[rgb(149,56,226)] flex justify-center items-center bg-transparent rounded-[32px] btn_shadow w-[196px] px-[11px] py-[22px] gap-4`}>
                                    <p className=" sora text-lg font-semibold"> Sort by Price</p>
                                    <FiSliders />
                                </button>
                            </div>
                        </div>
                        {
                            wishData.map(each => <div key={each.product_id} className="mt-8 max-w-7xl h-[188px] mx-auto bg-white flex gap-8 rounded-2xl p-8">
                                <div className="w-1/6 rounded-xl">
                                    <img className="w-full h-full object-cover rounded-xl" src={each.product_image} alt={cartData.product_title} />
                                </div>
                                <div className="w-5/6 flex justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-[rgb(9,8,15)] sora text-2xl font-semibold"> {each.product_title} </h3>
                                        <p className="text-[rgba(9,8,15,0.6)] sora text-lg font-normal">{each.description}</p>
                                        <p className="text-[rgba(9,8,15,0.8)] sora text-xl font-semibold">Price: ${each.price}</p>
                                    </div>
                                    <TiDeleteOutline onClick={() => handleDeleteWish(each.product_id)} className="text-[rgb(255,0,0)] w-9 h-9 mr-16 cursor-pointer" />
                                </div>
                            </div>)
                        }
                    </div>
                }
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box flex flex-col items-center gap-3">
                    <img src={icons} />
                    <div className="w-[336px] h-auto">
                        <p className="py-4 text-center text-[rgb(9,8,15)] sora text-2xl font-bold">Payment Successfully</p>
                        <hr />
                    </div>
                    <div className="flex flex-col mt-5 items-center gap-3">
                        <p className="text-[rgba(9,8,15,0.6)] sora text-base font-medium">Thanks for purchasing.</p>
                        <p className="text-[rgba(9,8,15,0.6)] sora text-base font-medium">Total: ${TotalPrice.toFixed(2)} </p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleModal} className="bg-[rgba(17,0,0,0.03)] text-[rgb(9,8,15)] sora text-base font-semibold py-[9px] px-[22px] w-[336px] btn rounded-[32px] btn_shadow border-none ">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <ToastContainer />
        </div>
    );


}

export default Dashboard;