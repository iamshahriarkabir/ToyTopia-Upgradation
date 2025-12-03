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
import MyToys from "../pages/MyToys/MyToys";

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
                path: "/toy/:id",
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch('/toys.json')
            },
            {
                path: "/my-profile",
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys /></PrivateRoute>
            }
        ]
    }
]);

export default router;