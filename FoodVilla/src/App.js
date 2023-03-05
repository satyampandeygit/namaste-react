import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

// Chunking
// Code Splitting
// Dynamic Loading
// Lazy Loading
// On Demand Loading
//Dynamic import

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const Profile = lazy(() => import("./components/ProfileClass"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(()=> import("./components/RestaurantMenu"));
const Login = lazy(()=> import("./components/Login"));


const App = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <Suspense><About /></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Suspense><Profile name={"Satyam"} /></Suspense>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Suspense><Contact /></Suspense>
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurant/:id",
                element: <Suspense><RestaurantMenu /></Suspense>
            },
            {
                path: "/login",
                element: <Suspense><Login /></Suspense>
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);