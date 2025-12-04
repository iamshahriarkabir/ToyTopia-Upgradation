import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ForgotPassword from "../pages/Login/ForgotPassword";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
// Note: We will create AllToys page in the next step, importing it now
import AllToys from "../pages/AllToys/AllToys"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            // Requirement: All Items Page must be public
            {
                path: "/all-toys",
                element: <AllToys />, 
                loader: () => fetch('/toys.json') // Pre-loading data
            },
            // Requirement: Toy Details Page must be public
            {
                path: "/toy/:id",
                element: <ToyDetails />, 
                loader: () => fetch('/toys.json')
            },
            // Private Routes (Only for user specific actions)
            {
                path: "/my-profile",
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            }
        ]
    }
]);

export default router;