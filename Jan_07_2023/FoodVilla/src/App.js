import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * - Header 
 *  - Logo(Title)
 *  - Nav Items(right)
 *  - Cart
 * 
 * Body
 *  - Search bar
 *  - RestrauntList
 *      - Restraunt Card(many cards)
 *          - Image
 *          - Name
 *          - Cuisines
 *          - Rating
 * 
 * Footer
 *  - links
 *  - Copyright
 * 
 */

// Config Driven UI

function App(){
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);