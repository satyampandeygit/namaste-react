import { useEffect, useState } from "react";
import { LOGO } from "./Constants";


const Header = () => {

    const [liveState, setLiveState] = useState("Log In");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {

        isLoggedIn ? setLiveState("Log Out") : setLiveState("Log In");

    }, [isLoggedIn])

    return (
        <div className="header">
            <a href="/">
                <img className="logo" src={LOGO} alt="FoodVilla" />
            </a>

            <ul className="nav-item">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

            <button className="login-button" onClick={() => { isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true) }}>{liveState}</button>
        </div>
    )
}

export default Header;