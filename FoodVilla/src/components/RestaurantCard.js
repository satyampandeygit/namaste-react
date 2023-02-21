import { IMG_CDN_URL } from "./Constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({
        id,
       name,
       image,
       cuisines,
       rating
    }) => {

    return (
        <div className="restaurant-card">

            <img src= {IMG_CDN_URL + image} alt={name} />
            <Link to={"/restaurant/" + id}><h3>{name}</h3></Link>
            <h3>{cuisines.join(', ') }</h3>
            <p>{rating}</p>


        </div>
    )

};

export default RestaurantCard;