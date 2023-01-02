import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 key="main-heading">JSX & React foundations</h1>

const user = {
    firstName: "Satyam",
    lastName: "Pandey"
}

function combineFirstNameandLastName(user){
    return user.firstName + ' ' + user.lastName;
}

const container = (
    <div className="main-heading" id="container" key="container">
        {heading}
        <h3>Hello from {combineFirstNameandLastName(user)} </h3>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)