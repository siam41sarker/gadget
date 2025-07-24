import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Root;