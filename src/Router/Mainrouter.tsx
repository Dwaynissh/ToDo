import {createBrowserRouter } from "react-router-dom"
import Layout from "../Components/DashHolder/Layout"
import Body from "../Pages/Body"

export const Mainrouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Body />
                }
            ]
        }
    ]
)