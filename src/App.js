import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import RestroMenu from "./Components/RestroMenu";

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