import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root'
import ErrorElement from './Components/ErrorElement/ErrorElement'
import Products from './Components/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Statistics from './Components/Statistics/Statistics'
import Dashboard from './Components/Dashboard/Dashboard'
import About_us from './Components/About_us/About_us'
import { HelmetProvider } from 'react-helmet-async'
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
                path:'about_us',
                element:<About_us></About_us>
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
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
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
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader: async ()=>
                    {
                        try
                            {
                                const stat = await fetch('gadget.json');
                                const statDta = await stat.json();
                                return statDta;
                            }
                        catch(e)
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
        <HelmetProvider>
                <RouterProvider router={gadgetRouter}>
                </RouterProvider>
        </HelmetProvider>
  </StrictMode>,
)
