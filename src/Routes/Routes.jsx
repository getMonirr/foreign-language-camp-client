import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Register/Registration";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../Pages/Dashboard/User/UserHome/SelectedClasses/SelectedClasses";
import Payment from "../Pages/Dashboard/User/UserHome/SelectedClasses/Payment/Payment";
import EnrolledClass from "../Pages/Dashboard/User/UserHome/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/User/UserHome/PaymentHistory/PaymentHistory";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "instructors",
        element: <AllInstructors />,
      },
      {
        path: "classes",
        element: <AllClasses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "selected-classes",
        element: <SelectedClasses />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClass />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default Routes;
