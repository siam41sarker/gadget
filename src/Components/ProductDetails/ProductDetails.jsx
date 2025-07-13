import { useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
const ProductDetails = () =>{
        const {pathname} = useLocation();
       const [isTransparent,setIsTransparent] = useState('no')  ;
        useEffect(()=>
                {
                    if(pathname === '/')
                        {
                            setIsTransparent('yes');
                        }
                    else
                        {
                            setIsTransparent('no');
                        }
                },[pathname])
    return (
        <div className={`max-w-full ${pathname === '/details' && 'md:h-[400px]'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
             {pathname === '/details' &&  <NavBar isTransparent={isTransparent}></NavBar>}
           {pathname === '/details' && <Banner title={'Product Details'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>}     
        </div>
    );
}

export default ProductDetails;