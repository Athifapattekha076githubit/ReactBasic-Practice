import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link}  from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


const Body = () => {
 const [listOfRestaurant, setListOfRestaurant] = useState([]);
 const [filteredRestaurant, setFilteredRestaurant] = useState([]);
 

 const [searchText, setSearchText] = useState("");
 useEffect(() => {
 fetchData();
 }, []);
 const fetchData = async () => {
 const data = await fetch(
 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
 );
 const json = await data.json();
 console.log("body page",json);

 
 setListOfRestaurant(
 json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
 setFilteredRestaurant(
 json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
// console.log("length",listOfRestaurant.length)
// if (listOfRestaurant.length === 0 ) return <Shimmer />
const onlineStatus = useOnlineStatus();

 if(onlineStatus === false) 
    return (
    <h1>Looks like your offline!! please check your network .😊👍

    </h1>);
    

return listOfRestaurant?.length === 0 ?(<Shimmer />) :(
    <div className="container body">
    <div className="filter-btn flex flex-wrap">
    <div className="search p-2 m-2">
    <input
    className="border-4 border-solid border-black rounded-lg"
    type="text"
    value={searchText}
    onChange={(e) => {
    setSearchText(e.target.value);
    }}
    />
    <button
    className="px-3 bg-blue-200 m-4 rounded-lg "
    onClick={() => {
    // filter the Restaurant and update the UI.
   
    const filteredRestaurant = listOfRestaurant.filter((res) => {
    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurant(filteredRestaurant);}}
    >

        Search</button>
        </div>
 <button className="px-4 py-2 m-5 w-[200px] h-[40px] bg-blue-200 rounded-lg"
 onClick={() => {
 const filterLogic = listOfRestaurant.filter((res) => {
 return res.info.avgRating > 4;
 });
 setFilteredRestaurant(filterLogic);
 }}
 >
 Top Restaurants
 </button>
 </div>
 <div className=" flex flex-wrap justify-between p-2 m-3">
 {filteredRestaurant.map((restaurant) => (
 <Link 
 key={restaurant.info.id}
 to={"/restaurants/"+restaurant.info.id}>
    <RestaurantCard  resData={restaurant}/> 
    </Link>
 ))}
 </div>
 </div>
    );
};
export default Body;
