import { useContext } from "react";
import { CDN_URL } from "../Utils/Constants";
import userContext from "../Utils/userContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const {loggedInUser} = useContext(userContext);

    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo 

    } = resData?.info;
    // console.log(resData?.data?.cloudinaryImageId);
    return (
        <div 
        data-testid="resCard" 
        className="p-1 m-2 w-[350px]  bg-blue-300 rounded-lg hover:bg-blue-600" >
        {/* // style={{ backgroundColor: "#f0f0f0",}}  */}
            <img
                className="rounded-lg w-90 h-80"
                alt="res-logo"
                src={ CDN_URL+ cloudinaryImageId}
            />
            {/* console.log(  resData?.data?. cloudinaryImageId) */}
            <h2 className="font-bold py-4 text-xl">{name}</h2>
                <h4>{cuisines}</h4>
            <h4>{avgRating}Star Rating</h4>
            <h4>{costForTwo}</h4>
            <h4> User: {loggedInUser}</h4>
            </div>)
}

             
export default RestaurantCard;