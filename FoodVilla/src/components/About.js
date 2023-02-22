import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
    return (
        <>
            <h1>About Us </h1>
            <p>We deliver food made with love to you.</p>

            <Profile name={"Satyam"}/>
            <Outlet/>
        </>
    )
}

export default About;