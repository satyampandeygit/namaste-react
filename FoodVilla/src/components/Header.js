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
        <div className="flex justify-between bg-pink-50 shadow-50 p-5">
            <Link to="/">
                <img data-testid="logo" className="h-28" src={LOGO} alt="FoodVilla" />
            </Link>

            <ul className="flex">
                <li className="px-2 py-8"><Link to="/">Home</Link></li>
                <li className="px-2 py-8"><Link to="/about"> About </Link></li>
                <li className="px-2 py-8"><Link to="/contact"> Contact </Link></li>
                <li className="px-2 py-8"><Link to="/instamart">Instamart</Link></li>
                <li className="px-2 py-8">Cart</li>
            </ul>

            {/* <button className="login-button" onClick={() => { isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true) }}>{liveState}</button> */}

            {
                !isLoggedIn ? (
                    <Link to="/login">
                        <button data-testid="login-status" className="btn-primary" onClick={() => {setIsLoggedIn(true)}}>Log In</button>
                    </Link>
                ) : (
                    <Link to="/">
                        <button data-testid="login-status" className="btn-primary" onClick={ () => { setIsLoggedIn(false) } }> Log Out</button>
                    </Link>
                )
            }
        </div>
    )
}

export default Header;