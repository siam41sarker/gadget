import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root'
import ErrorElement from './Components/ErrorElement/ErrorElement'
import Products from './Components/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Statistics from './Components/Statistics/Statistics'
const gadgetRouter =  createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/:det',
                element:<ProductDetails></ProductDetails>,
                loader: async () =>
                    {
                        try
                          {
                              const response = await fetch('gadget.json');
                              const allData = await response.json();
                              return allData;
                          }
                        catch(e)
                            {
                                console.log(e);
                            }
                    }
            },
            {
                path:'/',
                element:<Products></Products>,
                loader: async () =>
                    {
                        try
                          {
                              const response = await fetch('gadget.json');
                              const allData = await response.json();
                              return allData;
                          }
                        catch(e)
                            {
                                console.log(e);
                            }
                    }
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader: async () =>
                    {
                        try
                            {
                                const res = await fetch('gadget.json');
                                const data = await res.json();
                                return data;
                            }
                        catch (e) 
                              {
                                 return console.log(e);
                              }
                    }
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={gadgetRouter}></RouterProvider>
  </StrictMode>,
)
