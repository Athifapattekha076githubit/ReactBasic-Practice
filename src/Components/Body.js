import RestaurantCard from "./RestaurantCard";
// import { resList } from "../Utils/mockData";
import  {useState , useEffect } from "react";
import Shimmer from "./Shimmer";
// import {resList} from "../Utils/mockData";
const Body = () => {

    // local State variable -Super powerful variable..
    const [listOfRestaurants , setlistOfRestaurants] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    
    const [searchText , setSearchText] = useState("");

    //  whenever state variables update, react triggers a reconciliation cyscle (re-renders the component).
    console.log("Body Renedered");

   useEffect (()=>
    {
       fetchdata();
     }, []);
       const fetchdata = async ()=>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null")   
   const json = await data.json(); 
    console.log(json)
    // console.log(json.data.cards)
    setlistOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //  setlistOfRestaurants(json.data.cards[2].data.data.cards);
 };
//  if(listOfRestaurants.length === 0){
//     return <Shimmer />
//  }




    // Normal JS Variable..
  
        return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchText} 
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        // Filter the restaurant cards to state the UI
                        // searchText                       
                     console.log(searchText); 
                     
                     const filteredRestaurant = listOfRestaurants.filter(
                     (res)=> res.info.name.toLowerCase().includes( searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() =>{
                    
                     const filteredList = listOfRestaurants.filter(
                         (res) => res.info.avgRating >4
                     );
                     setlistOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                   filteredRestaurant.map((restaurant => 
                        <RestaurantCard key={restaurant.info.id} resData= {restaurant} />
                    ))
                }

            </div>
        </div>
    )
}
export default Body;