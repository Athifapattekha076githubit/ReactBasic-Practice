import React, { lazy , Suspense}  from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
// import { BrowserRouter, Route, Link } from 'react-router-dom'; // Correct
// import { BrowserRouter, Route, Link } from 'ReactRouterDOM'; // Incorrect

import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import RestroMenu from "./Components/RestroMenu";
// import Shimmer from "./Components/Shimmer";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(()=>import("./Components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
          <Outlet />
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />,
            },
    {
        path:"/about",
        element:<About />,
    },
    {
        path:"/contact",
        element:<Contact />,
    },
    {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
    },
    {
        path:"/restaurants/:resId",
        element:<RestroMenu />,
    },
],
errorElement: <Error />,
},
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//  root .render(<AppLayout />);