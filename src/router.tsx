import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:HomePage,
                
            },
            {
                path:'orders',
                Component:OrderPage
            },
            {
                path:"*",
                Component:ErrorPage
            }
        ]
    }
])