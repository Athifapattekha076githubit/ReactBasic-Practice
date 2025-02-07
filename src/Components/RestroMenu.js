import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";
// import { MENU_API } from "../Utils/Constants";

const RestroMenu =  () =>{

    const {resId} = useParams(); 
   
    const resInfo = useRestroMenu(resId);
    
    
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