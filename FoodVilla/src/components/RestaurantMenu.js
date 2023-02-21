import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constants";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {

    // to capture params from url use useParams Hook
    const { id } = useParams();

    // state variable to capture restaurant menu
    const [restaurant, setRestaurant] = useState({});
    const [restaurantCategory, setRestaurantCategory] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.2403305&lng=73.1305395&menuId=" + id);
        const json = await response.json();
        console.log(json.data);
        setRestaurant(json.data);
        setRestaurantCategory(json.data.menu.widgets);
        setItems(Object.values(json.data.menu.items));
    }

    return (!restaurant) ? <Shimmer /> : (
        <div className="restaurant-menu">
            <h3>Restaurant ID: { id }</h3>
            <h2>{restaurant.name}</h2>
            <img src= { IMG_CDN_URL + restaurant.cloudinaryImageId } />
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
            <h3>{restaurant.avgRating} stars</h3>

            {console.log(restaurantCategory)}
            {console.log(typeof(items))}

            {
                // restaurantCategory.map((category) => {

                //     console.log(category);

                //     <h3>{category.name}</h3>

                //     const entities = category?.entities ? category?.entities : [];

                //     if(entities){

                //         entities.map((entity) => {

                //             const entityId = entity?.id;
                //             console.log(items?.entity?.id);
                //             console.log(entity.id)

                //             // <MenuItem 
                //             //     key={entityId}
                //             //     itemName={items.entityId.name}
                //             //     itemDescription={items.entityId.description}
                //             //     itemIsVeg={items.entityId.isVeg}
                //             //     itemPrice={items.entityId.price}
                //             // />
                //         })
                //     }

                // })

                items.map((item) => {
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