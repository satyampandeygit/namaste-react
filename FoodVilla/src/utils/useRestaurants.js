import { useEffect, useState } from "react";

const useRestaurants = (resId) => {

    // variable to store & return restautant
    const [restaurant, setRestaurant] = useState(null);

    // make an api call using useEffect
    useEffect(()=> {
        getRestaurants(resId);
    },[])

    async function getRestaurants(){
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=19.2403305&lng=73.1305395&menuId=' + resId);

        const json = await data.json();
        console.log(json);

        setRestaurant(json)
    }

    // return restaurant data
    return restaurant;
}

export default useRestaurants;