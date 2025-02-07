import { useEffect, useState } from "react";
import { MENU_API, App_AI } from "../Utils/Constants";

const useRestroMenu = (resId) =>{

    const [resInfo , setResInfo] = useState(null);

    useEffect (()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch(MENU_API+ resId+App_AI);          
        const json = await data.json();
        console.log("its json",json);
        setResInfo(json.data);        
    };

    return resInfo;
}
export default useRestroMenu;