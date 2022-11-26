import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import ReportedItems from "../../Pages/Dashboard/ReportedItems";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
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
                        path: '/dashboard/my-orders',
                        element: <MyOrders></MyOrders>
                    },
                ]
            },

        ]
    },
]);