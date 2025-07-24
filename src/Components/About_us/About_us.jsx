import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { FaBullseye } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import siam from "../../assets/siam.jpg"
import joy from "../../assets/joy.jpg"
import khairul from "../../assets/khairul.jpg"
import abir from "../../assets/abir.jpg"
import { Helmet } from "react-helmet";
const About_us = () => {
    const [isTransparent, setIsTransparent] = useState('no');
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname === '/') {
            setIsTransparent('yes')
        }
        else {
            setIsTransparent('no')
        }
    }, [pathname])
    return (
        <div>
            <Helmet>
                <title>About Us | Gadget Heaven</title>
            </Helmet>
            <div className={`max-w-full ${pathname === `/about_us` && 'md:h-[260px]'} bg-[rgb(149,56,226)] md:mx-auto lg:mx-auto  border-[7px] border-solid border-[rgb(246,246,246)]`}>
                {pathname === `/about_us` && <NavBar isTransparent={isTransparent}></NavBar>}
                {pathname === `/about_us` && <Banner title={'About Us'} desc={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>}
            </div>
            <div className="max-w-7xl mx-auto mt-12 flex justify-between">
                <div className="w-5/12 border border-solid border-[rgba(9,8,15,0.1)] h-[250px] bg-white rounded-2xl flex flex-col gap-6 p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]  justify-start">
                    <div className="flex items-center gap-2">
                        <FaBullseye size={32} className="text-[rgb(149,56,226)]" />
                        <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold">Our Mission</h2>
                    </div>
                    <p className="w-10/12  md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)]">To revolutionize the way people experience technology by offering cutting-edge gadgets that blend innovation, quality, and reliability — empowering our customers to lead smarter, more connected lives.
                    </p>
                </div>
                <div className="w-5/12 border border-solid border-[rgba(9,8,15,0.1)] h-[250px] bg-white rounded-2xl flex flex-col gap-6 p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]  justify-start">
                    <div className="flex items-center gap-2">
                        <FaGlobeAmericas size={32} className="text-[rgb(149,56,226)]" />
                        <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold">Our Vision</h2>
                    </div>
                    <p className="w-10/12  md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)]">To become a global destination for tech enthusiasts by delivering futuristic, accessible, and trustworthy gadget solutions that enhance everyday life.
                    </p>
                </div>
            </div>
            <h1 className="mt-12 text-center text-[rgb(9,8,15)] sora text-[28px] font-bold">Our Values</h1>
            <div className="max-w-7xl mx-auto mt-6 flex gap-5">
                <div className="w-1/3 border border-solid border-[rgba(9,8,15,0.1)] h-[250px] bg-white rounded-2xl flex flex-col gap-6 p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]  justify-start">
                    <div className="flex items-center gap-2">
                        <FaLightbulb size={32} className="text-[rgb(149,56,226)]" />
                        <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold">Innovation</h2>
                    </div>
                    <p className="w-10/12  md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)]">We embrace creativity and cutting-edge technology to deliver smart, future-ready gadgets that enhance everyday life.
                    </p>
                </div>
                <div className="w-1/3 border border-solid border-[rgba(9,8,15,0.1)] h-[250px] bg-white rounded-2xl flex flex-col gap-6 p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]  justify-start">
                    <div className="flex items-center gap-2">
                        <FaUserFriends size={32} className="text-[rgb(149,56,226)]" />
                        <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold"> Customer Focus</h2>
                    </div>
                    <p className="w-10/12  md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)]">Every decision we make is centered around delivering value, satisfaction, and meaningful experiences to our customers.
                    </p>
                </div>
                <div className="w-1/3 border border-solid border-[rgba(9,8,15,0.1)] h-[250px] bg-white rounded-2xl flex flex-col gap-6 p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]  justify-start">
                    <div className="flex items-center gap-2">
                        <FaShieldAlt size={32} className="text-[rgb(149,56,226)]" />
                        <h2 className="text-[rgb(9,8,15)] sora text-2xl font-semibold">Integrity</h2>
                    </div>
                    <p className="w-10/12  md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)]">TWe build trust through honest communication, transparent policies, and unwavering ethical practices.
                    </p>
                </div>
            </div>
            <h1 className="mt-12 text-center text-[rgb(9,8,15)] sora text-[28px] font-bold">Our Team</h1>
            <div className="mt-6 max-w-7xl mx-auto flex gap-3">
                <div className="w-1/4 border border-solid border-[rgba(9,8,15,0.1)] h-auto bg-white rounded-2xl flex flex-col p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]">
                    <div className="w-[150px] h-[150px] mx-auto mb-6">
                        <img className="w-[150px] h-[150px] object-cover rounded-full" src={siam} alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center md:mt-0 md:text-2xl  sora text-[rgb(9,8,1)] font-bold">Siam Sarker
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base  sora text-[rgba(9,8,1,0.6)] font-semibold">Founder & CEO
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)] italic">Innovation starts with a vision — we build the future, one gadget at a time.
                        </p>
                    </div>
                </div>
                <div className="w-1/4 border border-solid border-[rgba(9,8,15,0.1)] h-auto bg-white rounded-2xl flex flex-col p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]">
                    <div className="w-[150px] h-[150px] mx-auto mb-6">
                        <img className="w-[150px] h-[150px] object-cover rounded-full" src={joy} alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center md:mt-0 md:text-2xl  sora text-[rgb(9,8,1)] font-bold">Shahriar Joy
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base  sora text-[rgba(9,8,1,0.6)] font-semibold">CEO
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)] italic">Leading with passion and purpose.
                        </p>
                    </div>
                </div>
                <div className="w-1/4 border border-solid border-[rgba(9,8,15,0.1)] h-auto bg-white rounded-2xl flex flex-col p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]">
                    <div className="w-[150px] h-[150px] mx-auto mb-6">
                        <img className="w-[150px] h-[150px] object-cover rounded-full" src={khairul} alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center md:mt-0 md:text-2xl  sora text-[rgb(9,8,1)] font-bold">Khairul Bashar
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base  sora text-[rgba(9,8,1,0.6)] font-semibold">CTO
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)] italic">Innovating for a smarter, more connected future.
                        </p>
                    </div>
                </div>
                <div className="w-1/4 border border-solid border-[rgba(9,8,15,0.1)] h-auto bg-white rounded-2xl flex flex-col p-6 transition hover:scale-105 hover:cursor-pointer shadow-md shadow-[rgba(149,56,226,0.5)]">
                    <div className="w-[150px] h-[150px] mx-auto mb-6">
                        <img className="w-[150px] h-[150px] object-cover rounded-full" src={abir} alt="" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center md:mt-0 md:text-2xl  sora text-[rgb(9,8,1)] font-bold">Abir Hassan
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base  sora text-[rgba(9,8,1,0.6)] font-semibold">Marketing Manager
                        </p>
                        <p className="w-full text-center md:mt-0 text-[12px] md:text-base lg:text-base font-normal sora text-[rgba(9,8,1,0.5)] italic">Connecting Gadgets with People
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About_us;