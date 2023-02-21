const MenuItem = ({
    itemName,
    itemPrice,
    itemIsVeg,
    itemDescription
}) => {
    return (
        <div className="menu-item">
            <h3> { itemName + " " + (itemIsVeg===1 ? "Veg": "Non Veg") + " Rs. " + (itemPrice/100) } </h3>
            <p>{itemDescription}</p>
            
        </div>
    )
}

export default MenuItem;