import { IMG_CDN_URL } from "./Constants";

// const RestaurantCard = (props) => {
//     console.log(props.restaurant.data);
//     return (
        
//         <div className="card">
//             <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
//                         props.restaurant.data.cloudinaryImageId } alt="Restraunt Logo"
//             ></img>
//             <h3>{props.restaurant.data.name}</h3>
//             <h4>{props.restaurant.data.cuisines.join(", ") }</h4>
//             <h4>{props.restaurant.data.avgRating}</h4>
//         </div>
//     )
// };

// const RestaurantCard = ({ restaurant }) => {
    
//     return (
        
//         <div className="card">
//             <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
//                         restaurant.data.cloudinaryImageId } alt="Restraunt Logo"
//             ></img>
//             <h3>{restaurant.data?.name}</h3>
//             <h4>{restaurant.data?.cuisines.join(", ") }</h4>
//             <h4>{restaurant.data?.avgRating}</h4>
//         </div>
//     );
// };

// When we want to pass some specific props pass them one by one
const RestaurantCard = ({ 
    name,
    cloudinaryImageId,
    cuisines,
    avgRating
 }) => {
    
    return (
        
        <div className="card">
            <img src={ IMG_CDN_URL + cloudinaryImageId } alt="Restraunt Logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ") }</h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default RestaurantCard;