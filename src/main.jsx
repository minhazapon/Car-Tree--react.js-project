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
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
