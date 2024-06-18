import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Products from '../pages/Products.jsx';
import AddToCart from '../pages/AddToCart.jsx';
import ReturnStatus from '../pages/ReturnStatus.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true, 
        element: <Products />,
      },
      {
        path: 'product',
        element: <Products />,
      },
      {
        path: 'add-to-cart',
        element: <AddToCart />,
      },
      {
        path: 'return',
        element: <ReturnStatus />,
      },
    ],
  },
]);


