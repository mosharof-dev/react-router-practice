import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Components/All Page/Home.jsx'
import Mobile from './Components/All Page/Mobile.jsx'
import { RouterProvider } from 'react-router'
import Product from './Components/All Page/Product.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {index: true, Component:Home},
      {path: 'mobile', Component: Mobile},
      {path: 'product', Component:Product }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
