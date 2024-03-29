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
import ViewMore from "../Home/ViewMore/ViewMore";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import PrivateRoutes from "./PrivateRoutes";


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
                element: <PrivateRoutes><AddPhone></AddPhone></PrivateRoutes>,
            },
            {
                path:'/updatePhone/:id',
                element: <PrivateRoutes><UpdatePhone></UpdatePhone></PrivateRoutes>,
                loader: ({params}) => fetch(`https://phone-crud-server.vercel.app/phones/${params.id}`)
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>,
            },
            {
                // todo: need to remove the local link
                path: "/collection",
                element: <Collection></Collection>,
                loader: () => fetch('https://phone-crud-server.vercel.app/phones')
            },
            {
                path:'/PhoneDetails/:id',
                element: <PrivateRoutes><PhoneDetails></PhoneDetails></PrivateRoutes> ,
                loader: ({params}) => fetch(`https://phone-crud-server.vercel.app/phones/${params.id}`)
            },
            {
                path:'/apple',
                element: <Apple></Apple>,
                loader: () => fetch('https://phone-crud-server.vercel.app/phones')
            },
            {
                path: "/google",
                element:<Google></Google>,
                loader: () => fetch('https://phone-crud-server.vercel.app/phones')
            },
            {
                path: '/oppo',
                element: <Oppo></Oppo>,
                loader: () => fetch('https://phone-crud-server.vercel.app/phones'),
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('https://phone-crud-server.vercel.app/phones'),
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('https://phone-crud-server.vercel.app/phones'),
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