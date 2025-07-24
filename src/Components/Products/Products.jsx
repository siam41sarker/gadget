import { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router";
import { useLoaderData } from "react-router";
const Products = () => {
    const allData = useLoaderData();
    const [fileredData, setFilteredData] = useState([]);
    const [active, setActive] = useState('one');
    return (
        <div className="max-w-7xl mt-36 mx-auto md:mt-[450px]">
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-[rgb(11,11,11)] sora font-bold text-3xl md:text-[40px] text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="mt-12 flex flex-col md:flex-row gap-6">
                <div className="w-11/12 mx-auto md:w-1/5 md:h-[556px] bg-white border border-solid border-[rgba(9,8,15,0.1)] rounded-2xl  flex flex-col items-center gap-6 py-6">
                    <button onClick={() => {
                        setActive('one');
                        setFilteredData(allData);
                    }} className={`${active === 'one' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl  w-[192px] h-[52px] sora text-lg font-medium "`}>All Products</button>
                    <button onClick={() => {
                        setActive('two');
                        const filtered = allData.filter(each => each.category === 'Laptops');
                        setFilteredData(filtered);
                    }

                    } className={`${active === 'two' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl  w-[192px] h-[52px] sora text-lg font-medium "`}>Laptops</button>
                    <button onClick={() => {
                        setActive('three');
                        const filtered = allData.filter(each => each.category === 'Phones');
                        setFilteredData(filtered);
                    }

                    } className={`${active === 'three' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl w-[192px] h-[52px] sora text-lg font-medium "`}>Phones</button>
                    <button onClick={() => {
                        setActive('four');
                        const filtered = allData.filter(each => each.category === 'Accessories');
                        setFilteredData(filtered);
                    }

                    } className={`${active === 'four' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl w-[192px] h-[52px] sora text-lg font-medium "`}>Accessories</button>
                    <button onClick={() => {
                        setActive('five');
                        const filtered = allData.filter(each => each.category === 'Smart Watches');
                        setFilteredData(filtered);
                    }

                    } className={`${active === 'five' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl w-[192px] h-[52px] sora text-lg font-medium "`}>Smart Watches</button>
                    <button onClick={() => {
                        setActive('six');
                        const filtered = allData.filter(each => each.category === 'MacBook');
                        setFilteredData(filtered);
                    }
                    } className={`${active === 'six' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl w-[192px] h-[52px] sora text-lg font-medium "`}>MacBook</button>
                    <button onClick={() => {
                        setActive('seven');
                        const filtered = allData.filter(each => each.category === 'Iphone');
                        setFilteredData(filtered);
                    }

                    } className={`${active === 'seven' ? 'bg-[rgb(149,56,226)] text-white' : 'bg-[rgba(9,8,15,0.05)] text-[rgba(9,8,15,0.6)]'} " hover:bg-[rgb(149,56,226)] rounded-2xl w-[192px] h-[52px] sora text-lg font-medium "`}>Iphone</button>
                </div> 
                {
                    active === 'one' ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {
                            allData.map(eachData => <div key={eachData.product_id} className="w-11/12 md:w-full mx-auto border border-solid border-[rgba(9,8,15,0.1)] h-[450px] justify-between bg-white rounded-2xl flex flex-col gap-6 p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]">
                                <div className="w-11/12 h-[181px] rounded-xl">
                                    <img className="w-full h-full object-cover rounded-xl" src={eachData.product_image} alt="" />
                                </div>
                                <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold">{eachData.product_title}</h2>
                                <p className="text-[rgba(9,8,15,0.6)] sora text-xl font-medium">Price: ${eachData.price}</p>
                                <NavLink to={`/${eachData.product_title.toLowerCase().replace(/\s+/g, '-')}`} className="w-[159px] h-[52px] rounded-[32px] border border-solid border-[rgb(149,56,226)] flex justify-center items-center  text-[rgb(149,56,226)] sora text-lg font-semibold transition hover:text-white hover:bg-[rgb(149,56,226)]">View Details</NavLink>
                            </div>)
                        }
                    </div> : fileredData.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {
                            fileredData.map(eachData => <div key={eachData.product_id} className="w-11/12 md:w-full mx-auto border border-solid border-[rgba(9,8,15,0.1)] h-[450px] bg-white rounded-2xl flex flex-col justify-between p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]">
                                <div className="w-11/12 h-[181px] rounded-xl">
                                    <img className="w-full h-full object-cover rounded-xl" src={eachData.product_image} alt="" />
                                </div>
                                <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold">{eachData.product_title}</h2>
                                <p className="text-[rgba(9,8,15,0.6)] sora text-xl font-medium">Price: {eachData.price}</p>
                                <NavLink to={`/${eachData.product_title.toLowerCase().replace(/\s+/g, '-')}`} className="w-[159px] h-[52px] border border-solid border-[rgb(149,56,226)] flex justify-center items-center rounded-[32px]  text-[rgb(149,56,226)] sora text-lg font-semibold transition hover:text-white hover:bg-[rgb(149,56,226)]">View Details</NavLink>
                            </div>)
                        }
                    </div> : <div className=" w-11/12 md:w-4/5 mx-auto h-[400px] md:h-auto border border-solid border-[rgba(9,8,15,0.1)] rounded-2xl flex justify-center items-center text-3xl md:text-5xl sora font-medium text-[rgba(9,8,15,0.6)] text-center">No Data Found</div>
                }
            </div>

        </div>
    );
}
export default Products;