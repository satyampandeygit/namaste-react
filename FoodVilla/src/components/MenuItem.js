const MenuItem = ({
    itemName,
    itemPrice,
    itemIsVeg,
    itemDescription
}) => {
    return (
        <div className="p-5 m-5">
            <h3 className="text-xl"> { itemName + " " + (itemIsVeg===1 ? "Veg": "Non Veg") + " Rs. " + (itemPrice/100) } </h3>
            <p>{itemDescription}</p>
            
            {/* Add button for adding a new item to cart */}
        </div>
    )
}

export default MenuItem;