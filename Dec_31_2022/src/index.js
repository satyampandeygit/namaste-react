import React from "react";
import ReactDOM from "react-dom/client";

function HtmlElement () {
    return (
        <div>
            <h1>A basic Parcel App</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HtmlElement />);