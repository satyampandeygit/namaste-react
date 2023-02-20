import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {

    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);