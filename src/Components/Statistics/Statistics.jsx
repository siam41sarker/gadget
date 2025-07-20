import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { FiSliders } from 'react-icons/fi'
import { getStoredDataFromLs, getStrWFromLs } from "../../../public/loc/storedData";
import { TiDeleteOutline } from "react-icons/ti";
const Statistics = () => {
    const { pathname } = useLocation();
    const [isTransparent, setIsTransparent] = useState('no');
    const [cartBool, setCartBool] = useState('one');
    const loadedAllData = useLoaderData();
    const [cartData, setCartData] = useState([]);
    const[wishData,setWishData] = useState([]);
    let TotalPrice = 0;
    console.log(loadedAllData);
    useEffect(() => {
        const getIdFromLs = getStoredDataFromLs();
        const filteredFromAll = [];
        for (const id of getIdFromLs) {
            const filteredID = loadedAllData.filter(each => each.product_id === id);
            filteredFromAll.push(...filteredID);
        }
        setCartData(filteredFromAll);
    }, []);
    useEffect(()=>
            {
                const getWishFromLs = getStrWFromLs();
                const fileredData = [];
                for(const ids of getWishFromLs)
                    {
                        const filteredWish = loadedAllData.filter(each=>each.product_id === ids);
                        fileredData.push(...filteredWish);
                    }
                setWishData(fileredData);
            },[])
    useEffect(() => {
        if (pathname === '/') {
            setIsTransparent('yes');
        }
        else {
            setIsTransparent('no');
        }
    }, [pathname]);
    console.log(cartData);
    for (const each of cartData) {
        TotalPrice = TotalPrice + each.price;
    }
    return (
        <div>
            <div className={`max-w-full ${pathname === `/statistics` && 'md:h-[300px]'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
                {pathname === `/statistics` && <NavBar isTransparent={isTransparent}></NavBar>}
                {pathname === `/statistics` && <Banner title={'Statistics'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} setCartBool={setCartBool}></Banner>}

            </div>
            <div>
                {
                    cartBool === 'one' ? <div>
                        <div className="mt-12 max-w-7xl mx-auto flex justify-between items-center">
                            <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">Cart</p>
                            <div className="flex items-center">
                                <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">Total Cost: ${TotalPrice.toFixed(2)}</p>
                                <button className="w-[196px] text-[rgb(149,56,226)] hover:text-white hover:bg-[rgb(149,56,226)] ml-6 h-[52px]  border border-solid border-[rgb(149,56,226)] flex justify-center items-center gap-4 bg-transparent rounded-[32px] btn_shadow">
                                    <p className=" sora text-lg font-semibold"> Sort by Price</p>
                                    <FiSliders />
                                </button>
                                <button className="w-[136px] text-[rgb(149,56,226)] hover:text-white hover:bg-[rgb(149,56,226)] ml-4 h-[52px]  border border-solid border-[rgb(149,56,226)] flex justify-center items-center bg-transparent rounded-[32px] btn_shadow">
                                    <p className=" sora text-lg font-semibold">Purchase</p>
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
                                    <TiDeleteOutline className="text-[rgb(255,0,0)] w-9 h-9 mr-16" />
                                </div>
                            </div>)
                        }
                    </div> : <div className="mt-12 max-w-7xl mx-auto">
                        <p className="text-[rgb(11,11,11)] sora text-2xl font-bold">WishList</p>
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
                                    <TiDeleteOutline className="text-[rgb(255,0,0)] w-9 h-9 mr-16" />
                                </div>
                            </div>)
                        }
                    </div>
                }
            </div>
        </div>
    );


}

export default Statistics;