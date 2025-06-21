import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";
 import RestaurantCategory from "./RestaurantCategory";
import {useState } from "react";
// import { MENU_API } from "../Utils/Constants";

const RestroMenu =  () =>{

    const {resId} = useParams(); 
   
    const resInfo = useRestroMenu(resId);

    const [showIndex, setShowIndex] = useState(0);
    
    
    if(resInfo === null) return <Shimmer />;

     const  { name, cuisines, costForTwoMessage} = 
     resInfo?.cards[2]?.card?.card?.info;

    
     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
      console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   
    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(category)

    return (
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl ">{name}</h1>
             <p className=" font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
                </p> 
             {/**category acordian */}
             {category.map((categories , index) =>
            //  controlled component
              <RestaurantCategory 
              key={categories ?. card?. card.title} 
              data= {categories ?. card?. card }
              showItems={index === showIndex ?  true : false}
              setShowIndex={() => setShowIndex(index)}
              />

             )}
        </div>
    ); 
};
export default RestroMenu;