import { LOGO_URL } from "../Utils/Constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {


const [btnNameReact , setBtnNameReact] = useState("Login");
console.log("Header render");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(userContext)
console.log(loggedInUser);


// selector is hook in react(normal js function)
// Subscribing to the store using selector


const cartItems = useSelector((store) => store.cart.items);


    return (
        <div className="flex justify-between h-30 bg-blue-300 shadow-lg m-2">
            <div className="log-container">
                <img className="w-[120px]" src={LOGO_URL} alt="#image" />
            </div>
            <div className="flex flex-wrap items-center">
                <ul className="flex items-center ">
                    <li className="px-4">
                       OnlineStatus:{onlineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                       <Link to="/">Home</Link>
                       </li>
                    <li className="px-4">
                        <Link to="/about">About</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li className="px-4">
                        <Link to="/Grocery">Grocery</Link>
                        </li>
                    <li className="px-4 font-bold">
                        <Link to="/Cart">Cart - ({cartItems.length} items)</Link></li>
                    <button className="px-4" onClick={()=>{
                        btnNameReact === "Login" ? 
                       setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;