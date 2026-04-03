import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Components/All Page/Home.jsx'
import Mobile from './Components/All Page/Mobile.jsx'
import { RouterProvider } from 'react-router'
import Product from './Components/All Page/Product.jsx'
import Users from './Components/All Page/Users.jsx'
import Use from './Components/All Page/Use.jsx'
import Details from './Components/All Page/Details.jsx'

const usePromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {path:"Home", Component:Home},
      {path: 'mobile', Component: Mobile},
      {path: 'product', Component:Product },
      {path:"Users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
       Component: Users},
       {path:'Use', element: <Suspense fallback={<h1>Loading Data..</h1>
       }>
          <Use usePromise={usePromise}></Use>
       </Suspense>},
       {
        path:'user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: Details
       }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
