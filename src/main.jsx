import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Ser from './servic/Ser';
import AddNew from './servic/AddNew';
import Check from './servic/Check';
import Contact from './Login/Contact';
import Blog from './Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element:  <Login></Login>,
      },
      {
        path: "/sign",
        element: <SignUp></SignUp>,
      },
      {
        path: "/ser",
        element: <Ser></Ser>,
      },
      {
        path: "/new",
        element: <AddNew></AddNew>,
      },
      {
        path: "/check",
        element: <Check></Check>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      
      
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
