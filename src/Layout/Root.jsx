import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className="container mx-auto ">
            <Toaster/>
           <div className="h-[68px]">
           <Navbar></Navbar>
           </div>
           <div className=" min-h-[calc(100vh-292px)]">
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

