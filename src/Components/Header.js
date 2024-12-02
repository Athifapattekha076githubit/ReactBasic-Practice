import { LOGO_URL } from "../Utils/Constants";
import {useState} from "react";
const Header = () => {

// let btnName = "Login";

const [btnNameReact , setBtnNameReact] = useState("Login");
console.log("Header render");

    return (
        <div className="header">
            <div className="log-container">
                <img src={LOGO_URL} alt="#image" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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