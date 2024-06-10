//import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import User from "./pages/User.jsx";
import Buy from "./pages/Buy";
import Message from "./pages/Message";
import Sell from "./pages/Sell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/buy',
        element: <Buy />
      },
      {
        path: '/sell',
        element: <Sell />
      },
      {
        path: '/message/',
        element: <Message />
      },      
      {
        path: '/user/:userId',
        element: <User />
      }, 
      {
        path: '/profiles/me',
        element: <Profile />
      }, 
      

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

