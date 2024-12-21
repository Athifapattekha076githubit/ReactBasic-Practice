import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../Utils/Constants";

const RestroMenu =  () =>{

    const [resInfo , setResInfo] = useState(null);

    const {resId} = useParams(); 
    // console.log(params)
    // 154891
    
    useEffect(()=>{
      fetchMenu();
    }, []);


    const fetchMenu = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ resId+ "&catalog_qa=undefined&submitAction=ENTER");          
        const json = await data.json();
        console.log("its json",json);
        setResInfo(json.data);        
    };
    if(resInfo === null) return <Shimmer />;

     const  { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
     console.log('resInfo:', resInfo);
console.log('cards:', resInfo?.cards);
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("its item",itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
             <p>{cuisines.join(",")}</p> 
             <h2>{costForTwoMessage}</h2> 
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>
                    ))}
                
            </ul>
        </div>
    );
};

export default RestroMenu;