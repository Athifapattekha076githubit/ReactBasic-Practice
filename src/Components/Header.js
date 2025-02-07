import { LOGO_URL } from "../Utils/Constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {


const [btnNameReact , setBtnNameReact] = useState("Login");
console.log("Header render");

const onlineStatus = useOnlineStatus();



    return (
        <div className="header">
            <div className="log-container">
                <img src={LOGO_URL} alt="#image" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       OnlineStatus:{onlineStatus?"✅":"🔴"}
                    </li>
                    <li>
                       <Link to="/">Home</Link>
                       </li>
                    <li>
                        <Link to="/about">About</Link></li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                        <Link to="/Grocery">Grocery</Link>
                        </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? 
                       setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;