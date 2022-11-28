import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import AddCategories from "../../Pages/Dashboard/AddCategories";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PaymentPage from "../../Pages/PaymentPage/PaymentPage";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import UserRoute from "../UserRoute/UserRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/payment/:id',
                element: <UserRoute><PaymentPage></PaymentPage></UserRoute>,
                loader: ({ params }) => fetch(`https://cellflip-server.vercel.app/booking/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <CategoryPage></CategoryPage>,
                loader: ({ params }) => fetch(`https://cellflip-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/all-sellers',
                        element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
                    },
                    {
                        path: '/dashboard/all-buyers',
                        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                    },
                    {
                        path: '/dashboard/reported-items',
                        element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
                    },
                    {
                        path: '/dashboard/add-categories',
                        element: <AdminRoute><AddCategories></AddCategories></AdminRoute>
                    },
                    {
                        path: '/dashboard/my-orders',
                        element: <UserRoute><MyOrders></MyOrders></UserRoute>
                    },
                    {
                        path: '/dashboard/add-product',
                        element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                    },
                    {
                        path: '/dashboard/my-products',
                        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                    },
                ]
            },


        ]
    },
]);