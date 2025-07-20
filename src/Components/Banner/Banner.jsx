import { useContext, useState } from "react";
import { productContext } from "../ProductDetails/ProductDetails";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation } from "react-router";
import { SaveWToLs, setToLs } from "../../../public/loc/storedData";
const Banner = ({ bannerImage, title, desc,setCartBool}) => {
    const contextProduct = useContext(productContext);
    console.log("Context: ");
    console.log(contextProduct)
    const {pathname} = useLocation();
    const [isActive,setIsActive] = useState('one');
    const [isClicked,setIsClicked] = useState(false);
    const [wishClicked,setWishClicked] = useState(false);
    const handleBtnsCartId = id =>
        {
            if(!isClicked)
                {
                    setIsClicked(true);
                    setToLs(id)
                }
            else if (isClicked)
            {
                alert('Already Added!');
            }
        }
    const handleBtns = info =>
        {
            setIsActive(info);
            setCartBool(info)
        }
    const handleWishId = id =>
            {
                if(!wishClicked)
                    {
                        setWishClicked(true);
                        SaveWToLs(id);
                    }
                else
                    {
                        alert("Already added to the wish list!");
                    }
            }
    return (
        <div>
            <div className="mx-auto px-0 md:px-[150px]">
                <div className="flex flex-col justify-center py-8">
                    <p className="text-center text-2xl leading-none md:leading-[56px] lg:leading-[56px] md:text-4xl lg:text-4xl font-bold sora text-white px-6">{title}</p>
                    <p className="mt-4 md:mt-0 text-center text-[12px] leading-3 md:leading-[26px] lg:leading-[26px] md:text-base lg:text-base font-normal sora text-white px-6">{desc}</p>
                    {
                        bannerImage && <button className="mt-8 w-[168px] mx-auto shadow py-[15px] px-[30px] text-[rgb(149,56,226)] sora text-xl font-bold bg-white rounded-[32px] text-center">Shop Now</button>
                    }
                     {
                        pathname === '/statistics' && <div className="mt-8 flex justify-center items-center gap-6">
                            <button onClick={()=>handleBtns('one')} className={`py-[13px] px-16 sora text-xl font-bold ${isActive === 'one' ? 'bg-white text-[rgb(149,56,226)]': 'bg-transparent border border-solid border-white text-white'} hover:bg-white hover:text-[rgb(149,56,226)] rounded-[32px] text-center`}>Cart</button>
                            <button onClick={()=>handleBtns('two')} className={`py-[13px] px-16 sora text-xl font-bold ${isActive === 'two' ? 'bg-white text-[rgb(149,56,226)]': 'bg-transparent border border-solid border-white text-white'} hover:bg-white hover:text-[rgb(149,56,226)] rounded-[32px] text-center`}>Wishlist</button>
                        </div>
                    }
                </div>
            </div>
            {
                bannerImage ? <div className="mt-12 w-10/12 h-[350px] md:w-[810px] md:h-auto mx-auto border-2 border-solid border-white rounded-[32px] bg-[rgba(255,255,255,0.3)]">
                    <div className="p-4 md:p-6">
                        <img className="rounded-3xl w-full h-full object-cover" src={bannerImage} alt="banner" />
                    </div>
                </div> :pathname === '/statistics' ? ''  : <div className="mt-12 w-10/12 h-[350px] md:w-[980px] md:h-auto mx-auto border-2 border-solid bg-white border-white rounded-[32px] bg-[rgba(255,255,255,0.3)]">
                    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-2/5 bg-[rgb(236,236,236)] flex justify-center items-center rounded-2xl">
                            <img className="w-11/12 h-2/3 object-cover rounded-2xl" src={contextProduct.product_image} alt={contextProduct.product_title} />
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col">
                            <h1 className="text-[rgb(9,8,15)] sora text-[28px] font-semibold">{contextProduct.product_title}</h1>
                            <p className="mt-3 text-[rgba(9,8,15,0.8)] sora text-xl font-semibold">Price: $ {contextProduct.price}</p>
                            <div className="mt-4 border border-solid border-[rgb(48,156,8)] bg-[rgba(48,156,8,0.1)] w-[87px] h-8 rounded-[32px] flex justify-center items-center">
                                <p className="text-[rgb(48,156,8)] sora text-[14px] font-medium">{contextProduct.availability?"In Stock":"Sold"}</p>
                            </div>
                            <p className="mt-3 text-[rgba(9,8,15,0.6)] sora text-lg">{contextProduct.description}</p>
                            <div className="mt-4">
                                <h5 className="text-[rgb(9,8,15)] sora text-lg font-bold">Specification:</h5>
                                <div className="mt-3">
                                    {
                                        contextProduct.specification.map(each=><p key={contextProduct.specification.indexOf(each)} className="mt-1 text-[rgba(9,8,15,0.6)] sora text-lg">{contextProduct.specification.indexOf(each)+1}. {each}</p>)
                                    }
                                </div>
                            </div>
                            <div className="mt-4 flex gap-3">
                                    <h6 className="text-[rgb(9,8,15)] sora text-lg font-bold">Rattings </h6>
                                    <div  className="w-5 h-5 bg-[rgb(9,8,15)] mt-1"></div>
                            </div>
                            <div className="mt-3 flex gap-3">
                                    <p className="text-yellow-500 text-lg">{contextProduct.rating_stars}</p>
                                    <div className="w-[50px] bg-[rgba(9,8,15,0.05)] h-8 flex justify-center items-center rounded-[32px]">
                                        <p className="text-[rgba(9,8,15,0.8)] sora text-[14px] font-medium">{contextProduct.rating}</p>
                                    </div>
                            </div>
                             <div className="mt-3 flex gap-3">
                                    <button onClick={()=>handleBtnsCartId(contextProduct.product_id)} className={`w-[193px] h-12 rounded-[32px] text-[rgba(9,8,15,0.8)] ${!isClicked && 'hover:text-white'} bg-[rgba(9,8,15,0.05)] ${isClicked ? 'bg-[#f0f0f0] text-gray-300 cursor-not-allowed' : 'text-[rgba(9,8,15,0.8)] bg-[rgba(9,8,15,0.05)] cursor-pointer'} ${!isClicked && 'hover:bg-[rgb(149,56,226)]'} flex justify-center items-center gap-1`}>
                                        <p className=" sora text-lg font-bold">{`${isClicked?'Added' : 'Add to Cart'}`}</p>
                                         <AiOutlineShoppingCart className=" w-10 h-10 p-3" />
                                    </button>
                                    <button onClick={()=>handleWishId(contextProduct.product_id)}> <CiHeart className={`bg-white ${!wishClicked && 'hover:bg-[rgb(149,56,226)]'} hover:text-white text-2xl rounded-full ${wishClicked ? 'bg-[#f0f0f0] text-gray-300 cursor-not-allowed' : 'text-[rgba(9,8,15,0.8)] bg-[rgba(9,8,15,0.05)] cursor-pointer'} border border-solid border-[rgba(11,11,11,0.1)] w-10 h-10 p-3`} /></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            }
        </div>
    );
}

export default Banner;      