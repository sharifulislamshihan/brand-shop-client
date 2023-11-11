import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../Home/Home";
import AddPhone from "../AddPhone/AddPhone";
import MyCart from "../MyCart/MyCart";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Collection from "../Collection/Collection";
import AboutUs from "../AboutUs/AboutUs";
import ErrorPage from "../ErrorPage/ErrorPage";
import UpdatePhone from "../UpdatePhone/UpdatePhone";
import Apple from "../BrandPhoneCollection/Apple/Apple";
import Google from "../BrandPhoneCollection/Google/Google";
import Oppo from "../BrandPhoneCollection/Oppo/Oppo";
import Samsung from "../BrandPhoneCollection/Samsung/Samsung";
import Sony from "../BrandPhoneCollection/Sony/Sony";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addPhone',
                element: <AddPhone></AddPhone>,
            },
            {
                path:'/updatePhone',
                element: <UpdatePhone></UpdatePhone>
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>,
            },
            {
                path: "/collection",
                element: <Collection></Collection>,
            },
            {
                path:'/apple',
                element: <Apple></Apple>
            },
            {
                path: "/google",
                element:<Google></Google>,
            },
            {
                path: '/oppo',
                element: <Oppo></Oppo>
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>
            },
            {
                path: '/sony',
                element: <Sony></Sony>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/signin",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            
        ],
    },
]);

export default Routes;