import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Signup from "../components/Signup";
import Login from "./../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "./../components/ResetPassword";
import SuccessPage from "../components/SuccessPage";
import ContactUs from "./../components/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:id/:token",
        element: <ResetPassword />,
      },
      {
        path: "/success-page",
        element: <SuccessPage />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
