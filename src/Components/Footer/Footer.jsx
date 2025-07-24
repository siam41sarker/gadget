import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="mt-10 pt-16 w-full h-[503px] bg-white">
            <div className="md:w-[950px] lg:w-[1280px] mx-auto border-b border-solid border-[rgba(9,8,15,0.1)] pb-8">
                <div className=" flex w-full flex-col items-center gap-6">
                    <h2 className="text-[rgb(9,8,15)] sora text-[32px] font-bold">Gadget Heaven</h2>
                    <p className="text-[rgba(9,8,15,0.6)] sora font-medium">Leading the way in cutting-edge technology and innovation.</p>
                </div>
            </div>
            <div className="mt-8 max-w-7xl mx-auto flex justify-between px-[150px]">
                <div>
                    <h2 className="text-[rgb(9,8,15)] sora text-lg font-bold text-center">Services</h2>
                    <div className="mt-4 flex flex-col gap-4">
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Product Support</a>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Order Tracking</a>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Shipping & Delivery
                        </a>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Returns</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-[rgb(9,8,15)] sora text-lg font-bold text-center">Company</h2>
                    <div className="mt-4 flex flex-col gap-4">
                        <NavLink className="text-[rgba(9,8,15,0.6)] sora text-center" to="/about_us">About Us</NavLink>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Careers</a>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Contact</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-[rgb(9,8,15)] sora text-lg font-bold text-center">Legal</h2>
                    <div className="mt-4 flex flex-col gap-4">
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Terms of Service</a>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Privacy Policy</a>
                        <a className="text-[rgba(9,8,15,0.6)] sora text-center" href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
