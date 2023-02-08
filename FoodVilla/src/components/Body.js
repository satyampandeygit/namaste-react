import { useEffect, useState } from "react";
import { restrauntList } from "./Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    const filterData = restaurants.filter( (restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filterData;
}

const Body = () => {

    // state variables
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // if @params deps is empty then useEffec is called on once after page is loaded
    // if @params deps contains variable then useEffect is called whenever value of that variable changes
    useEffect(() => {
        console.log("useEffect");
        getRestaurants();
    }, [searchText]);

    async function getRestaurants(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);   
    }

    console.log("render");
    return allRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
                <button onClick={() => {
                    setSearchText("");
                    setFilteredRestaurants(allRestaurants);
                }}>
                    Reset
                </button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map(restaurant => {
                        return (
                            <RestaurantCard
                                key = {restaurant.data.id}
                                name = {restaurant.data.name}
                                image = {restaurant.data.cloudinaryImageId}
                                rating = {restaurant.data.avgRating}
                            />
                        )
                    })
                }
            </div>

        </>
    )
}

export default Body;