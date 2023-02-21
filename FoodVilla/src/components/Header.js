import { useEffect, useState } from "react";
import { LOGO } from "./Constants";
import { Link } from "react-router-dom";


const Header = () => {

    const [liveState, setLiveState] = useState("Log In");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {

        isLoggedIn ? setLiveState("Log Out") : setLiveState("Log In");

    }, [isLoggedIn])

    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={LOGO} alt="FoodVilla" />
            </Link>

            <ul className="nav-item">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/contact"> Contact </Link></li>
                <li>Cart</li>
            </ul>

            {/* <button className="login-button" onClick={() => { isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true) }}>{liveState}</button> */}

            {
                !isLoggedIn ? (
                    <Link to="/login">
                        <button className="login-button" onClick={() => {setIsLoggedIn(true)}}>Log In</button>
                    </Link>
                ) : (
                    <Link to="/">
                        <button className="login-button" onClick={ () => { setIsLoggedIn(false) } }> Log Out</button>
                    </Link>
                )
            }
        </div>
    )
}

export default Header;