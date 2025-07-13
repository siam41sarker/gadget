import bannerImage from '../../assets/banner.jpg'
import Banner from "../Banner/Banner";
import { useLocation } from "react-router";
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
const Header = () => {
    const {pathname} = useLocation();
    const [isTransparent,setIsTransparent] = useState('yes')  ;
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
    console.log(pathname);
    return (
        <header className={` ${pathname === '/' && 'md:h-[600px] rounded-[32px] max-w-7xl'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
           {pathname === '/' &&  <NavBar isTransparent={isTransparent}></NavBar>}
           {pathname === '/' && <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} bannerImage = {bannerImage}></Banner>}     
        </header>
    );
}

export default Header;