import { CDN_URL } from "../Utils/Constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } = resData?.info;
    // console.log(resData?.data?.cloudinaryImageId);
    return (
        <div className="p-1 m-2 w-[350px]  bg-blue-300 rounded-lg" >
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

        </div>
    );
}
export default RestaurantCard;