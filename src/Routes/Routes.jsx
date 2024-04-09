import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Apartment from "../components/Apartment/Apartment";
import House from "../components/House/House";
import Villa from "../components/Villa/Villa";
import HomeProperties from "../components/HomeProperties/HomeProperties";

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
          },
          {
            path: "/house",
            element: <House />,
          },
          {
            path: "/villa",
            element: <Villa />,
          },
        ],
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
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
