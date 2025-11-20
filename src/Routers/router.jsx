import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Coverage from "../Pages/Coverage";
import AboutUs from "../Pages/AboutUs";
import MainLayOut from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Rider from "../Pages/Rider";
import Login from "../AuthPages/Login";
import Register from "../AuthPages/Register";
import AuthLayout from "../Layouts/AuthLayOut";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Pages/SendParcel";
import MyParcels from "../Pages/Dashboard/MyParcels";
import DashboardLayout from "../Layouts/DashboardLayout";
import Payment from "../Pages/Dashboard/Payment";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/PaymentCancelled";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        index:true, 
        path: "/",
        element:<Home></Home>,
      },
      {
            path: 'coverage',
            element:<Coverage></Coverage>,
            loader: () => fetch('/serviceCenters.json').then(res => res.json())
        },
      {
            path: 'about-us',
            element:<AboutUs></AboutUs>,
              
            
        },
      {
            path: 'rider',
            element:<PrivateRoute><Rider></Rider></PrivateRoute>,
            
        },
      {
            path: 'send-parcel',
            element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
            loader: () => fetch('/serviceCenters.json').then(res => res.json())
            
        },
    ]
  },
  {
    path:"/",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
            path: 'login',
            element:<Login></Login>,
            
        },
         {
            path: 'register',
            element:<Register></Register>,
            
        }
    ]
  },{
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-parcels', 
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component:Payment
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      }, 
      {
        path: 'payment-cancelled', 
        Component: PaymentCancelled
      }
    ]
  },
      {
            path: '*',
            element:<Error></Error>,
            
        }
]);