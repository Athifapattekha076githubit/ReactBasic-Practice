import React, { lazy , Suspense, useEffect, useState}  from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
// import { BrowserRouter, Route, Link } from 'react-router-dom'; // Correct
// import { BrowserRouter, Route, Link } from 'ReactRouterDOM'; // Incorrect
import { useState } from "react";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import RestroMenu from "./Components/RestroMenu";
import userContext from "./Utils/userContext";
import {Provider} from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart";
// import Shimmer from "./Components/Shimmer";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(()=>import("./Components/Grocery"));

const About = lazy(()=> import("./Components/About"));

const AppLayout = () => {
const [userName, setUserName] = useState()
// authentication 
useEffect(()=>{
// Make an API Call send username and password..
const data = {
    name: "Athifa"
};
  setUserName(data.name);
}, []);




    return (
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser:userName , setUserName}}>
        <div className="app">
             <userContext.Provider value={{loggedInUser:userName}}>
            <Header />
             </userContext.Provider>
          <Outlet />
        </div>
         </userContext.Provider>
         </Provider>
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
     {
        path:"/Cart",
        element:<Cart />,
    },
],
errorElement: <Error />,
},
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//  root .render(<AppLayout />);