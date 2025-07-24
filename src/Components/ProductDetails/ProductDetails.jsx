import { useLoaderData, useLocation, useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { Helmet } from "react-helmet";
export const productContext = createContext(null);
const ProductDetails = () => {
    const { pathname } = useLocation();
    const { det } = useParams();
    const [isTransparent, setIsTransparent] = useState('no');
    const loadedAllData = useLoaderData();
    console.log("Particular: ")
    console.log(det);
    const particularProduct = loadedAllData.find(particular => particular.product_title.toLowerCase().replace(/\s+/g, "-") === det)
    console.log(particularProduct);
    useEffect(() => {
        if (pathname === '/') {
            setIsTransparent('yes');
        }
        else {
            setIsTransparent('no');
        }
    }, [pathname])
    return (
        <productContext.Provider value={particularProduct}><div className={`max-w-full ${pathname === `/${det}` && 'md:h-[400px]'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
            <Helmet>
                <title>{particularProduct.product_title} | Gadget Heaven</title>
            </Helmet>
            {pathname === `/${det}` && <NavBar isTransparent={isTransparent}></NavBar>}
            {pathname === `/${det}` && <Banner title={'Product Details'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>}
        </div></productContext.Provider>
    );
}

export default ProductDetails;