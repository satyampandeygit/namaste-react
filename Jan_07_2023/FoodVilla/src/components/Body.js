import RestaurantCard from "./RestrauntCard";
import { restrauntList } from "./Constants";


// for line 1706-1719
// const Body = () => {

//     return (
//         <div className="restraunt-list">
//             <RestaurantCard restaurant={restrauntList[0].data} />
//             <RestaurantCard restaurant={restrauntList[1].data} />
//             <RestaurantCard restaurant={restrauntList[2].data} />
//             <RestaurantCard restaurant={restrauntList[3].data} />
//             <RestaurantCard restaurant={restrauntList[4].data} />
//             <RestaurantCard restaurant={restrauntList[5].data} />
//             <RestaurantCard restaurant={restrauntList[6].data} />
//             <RestaurantCard restaurant={restrauntList[7].data} />
//             <RestaurantCard restaurant={restrauntList[8].data} />
//             <RestaurantCard restaurant={restrauntList[9].data} />
//             <RestaurantCard restaurant={restrauntList[10].data} />
//             <RestaurantCard restaurant={restrauntList[11].data} />
//         </div>
//     );

// };

// When you are destructuring at component level on the fly you need to pass props one by one
// This is not feasible instead use spread operator refer 1812
// const Body = () => {

//     return (
//         <div className="restraunt-list">
//             <RestaurantCard 
//                 name={restrauntList[0].data.name}
//                 cuisines={restrauntList[0].data.cuisines}
//                 cloudinaryImageId={restrauntList[0].data.cloudinaryImageId}
//                 avgRating={restrauntList[0].data.avgRating}
//             />
//             <RestaurantCard 
//                 name={restrauntList[1].data.name}
//                 cuisines={restrauntList[1].data.cuisines}
//                 cloudinaryImageId={restrauntList[1].data.cloudinaryImageId}
//                 avgRating={restrauntList[1].data.avgRating}
//             />
//             <RestaurantCard 
//                 name={restrauntList[5].data.name}
//                 cuisines={restrauntList[5].data.cuisines}
//                 cloudinaryImageId={restrauntList[5].data.cloudinaryImageId}
//                 avgRating={restrauntList[5].data.avgRating}
//             />
//             <RestaurantCard 
//                 name={restrauntList[2].data.name}
//                 cuisines={restrauntList[2].data.cuisines}
//                 cloudinaryImageId={restrauntList[2].data.cloudinaryImageId}
//                 avgRating={restrauntList[2].data.avgRating}
//             />
//             <RestaurantCard 
//                 name={restrauntList[3].data.name}
//                 cuisines={restrauntList[3].data.cuisines}
//                 cloudinaryImageId={restrauntList[3].data.cloudinaryImageId}
//                 avgRating={restrauntList[3].data.avgRating}
//             />
//             <RestaurantCard 
//                 name={restrauntList[4].data.name}
//                 cuisines={restrauntList[4].data.cuisines}
//                 cloudinaryImageId={restrauntList[4].data.cloudinaryImageId}
//                 avgRating={restrauntList[4].data.avgRating}
//             />
            
//         </div>
//     );

// };

// Spread Operator is very useful for destructuring
// declaring each card is very tedious work use for loop to go one by one
// const Body = () => {

//     return (
//         <div className="restraunt-list">
//             <RestaurantCard {...restrauntList[0].data} />
//             <RestaurantCard {...restrauntList[1].data} />
//             <RestaurantCard {...restrauntList[2].data} />
//             <RestaurantCard {...restrauntList[3].data} />
//             <RestaurantCard {...restrauntList[4].data} />
//             <RestaurantCard {...restrauntList[5].data} />
//             <RestaurantCard {...restrauntList[6].data} />
//             <RestaurantCard {...restrauntList[7].data} />
//             <RestaurantCard {...restrauntList[8].data} />
//             <RestaurantCard {...restrauntList[9].data} />
//             <RestaurantCard {...restrauntList[10].data} />
//             <RestaurantCard {...restrauntList[11].data} />
//         </div>
//     );

// };

const Body = () => {
    return (
        <div className="restraunt-list">
            {
                restrauntList.map( restraunt => {
                    return (<RestaurantCard {...restraunt.data}/>);
                })
            }
        </div>
    )
}

export default Body;