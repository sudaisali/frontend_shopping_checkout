import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {CartProvider} from './context/Cart.jsx'
import {RouterProvider,} from "react-router-dom";
import { router } from './routes/route.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
