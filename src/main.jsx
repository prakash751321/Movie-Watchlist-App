import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from './components/pages/SignUp/SignUp'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />
      },
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "signup",
        element: <SignUp />
      },
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
