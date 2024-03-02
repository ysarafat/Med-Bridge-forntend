import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import AboutUs from "@/pages/AboutUs/AboutUs";
import GratitudeWall from "@/pages/Community/GratitudeWall";
import AddSupply from "@/pages/Dashboard/AddSupply";
import CreateTestimonial from "@/pages/Dashboard/CreateTestimonial";
import Dashboard from "@/pages/Dashboard/Dashboard";
import DonatedPost from "@/pages/Dashboard/DonatedPost";
import Supplies from "@/pages/Dashboard/Supplies";
import UpdatePost from "@/pages/Dashboard/UpdatePost";

import NotFound from "@/pages/Error/NotFound";
import Leaderboard from "@/pages/Leaderboard/Leaderboard";
import Volunteer from "@/pages/Volunteer/Volunteer";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import SuppliesCards from "@/pages/supplies/SuppliesCards";
import SupplyPostDetails from "@/pages/supplyPostDetails/SupplyPostDetails";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <SuppliesCards />,
      },
      {
        path: "supplies/:id",
        element: <SupplyPostDetails />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/community",
        element: <GratitudeWall />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <AddSupply />,
      },
      {
        path: "update-supply/:id",
        element: <UpdatePost />,
      },
      {
        path: "create-testimonial",
        element: <DonatedPost />,
      },
      {
        path: "create-testimonial/:id",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
