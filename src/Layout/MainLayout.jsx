import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";



const MainLayout = () => {
    return (
        <div className="Main max-w-7xl mx-auto">
            <Navbar />
            <div className="mt-20 p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;