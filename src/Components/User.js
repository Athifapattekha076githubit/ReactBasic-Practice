import { useState } from "react";
const User = ({name,location}) =>{
    const [count] = useState([0]);
    const [count2] = useState([1]);
    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h1>Count={count2}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:a4am.at</h3>
        </div>
    )
}
export default User;