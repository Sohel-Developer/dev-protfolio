import { Outlet } from "react-router-dom";
import Manubar from "../Component/Manubar/Manubar";



const MainLayout = () => {
    return (
        <div className="Main max-w-7xl mx-auto">
            <Manubar />
            <div className=" p-5">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;