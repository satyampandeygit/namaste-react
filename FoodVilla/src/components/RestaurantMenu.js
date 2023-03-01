import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constants";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";



const RestaurantMenu = () => {

    // to capture params from url use useParams Hook
    const { id } = useParams();

    // state variable to capture restaurant menu
    const restaurant = useRestaurants(id);


    return (!restaurant) ? <Shimmer /> : (
        <div className="restaurant-menu">
            <h3>Restaurant ID: { id }</h3>
            <h2>{restaurant.name}</h2>
            <img src= { IMG_CDN_URL + restaurant?.data?.cloudinaryImageId } />
            <h3>{restaurant?.data?.area}</h3>
            <h3>{restaurant?.data?.city}</h3>
            <h3>{restaurant?.data?.costForTwoMsg}</h3>
            <h3>{restaurant?.data?.avgRating} stars</h3>

            {
                Object.values(restaurant?.data?.menu?.items).map((item) => {
                    return (
                        <MenuItem
                            key={item.id}
                            itemName={item.name}
                            itemDescription={item.description}
                            itemPrice={item.price}
                            itemIsVeg={item.isVeg}
                        />
                    )
                })
                
            }
        </div>
    )
}

export default RestaurantMenu;