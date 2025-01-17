import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Apartment from "../components/Apartment/Apartment";
import House from "../components/House/House";
import Villa from "../components/Villa/Villa";
import HomeProperties from "../components/HomeProperties/HomeProperties";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import Agents from "../Pages/Agents/Agents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <HomeProperties />,
            loader: () => fetch("../properties.json"),
          },

          {
            path: "/apartment",
            element: <Apartment />,
            loader: () => fetch("../properties.json"),
          },
          {
            path: "/house",
            element: <House />,
            loader: () => fetch("../properties.json"),
          },
          {
            path: "/villa",
            element: <Villa />,
            loader: () => fetch("../properties.json"),
          },
        ],
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../properties.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("../blogs.json"),
      },
      {
        path: "/agents",
        element: (
          <PrivateRoute>
            <Agents />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
