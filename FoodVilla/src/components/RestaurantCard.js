import { IMG_CDN_URL } from "./Constants";

const RestaurantCard = ({
       name,
       image,
       rating
    }) => {

    return (
        <div className="restaurant-card">

            <img src= {IMG_CDN_URL + image} alt={name} />
            <h3>{name}</h3>
            <p>{rating}</p>


        </div>
    )

};

export default RestaurantCard;