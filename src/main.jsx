import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; 
import UserLayout from '../Layout/userLayout.jsx'
import UserSignup from '../Components/UserSignup.jsx'
import NotFound from '../Components/Notfound.jsx'
import Login from '../Components/Login.jsx'
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    errorElement: <NotFound />,
    children: [
      {
        path:'/',
        element: <Login />
      },
      {
        path: "signup",
        element: <UserSignup />
      },
      {
        path:'home',
        element:<Home/>
      }
     
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
