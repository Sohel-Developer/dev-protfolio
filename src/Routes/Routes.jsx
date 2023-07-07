import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Skill from "../Pages/Skill/Skill";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/skill',
                element: <Skill />
            },
            {
                path: '/project',
                element: <Project />
            },
            {
                path: '/contact',
                element: <Contact />
            }

        ]
    },
]);