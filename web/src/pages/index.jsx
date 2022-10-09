import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom"

  import { Home }  from './Home'
  import { Login }  from './Login'
  import { Signup }  from './Signup'
  import { Dashboard }  from './Dashboard'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
   
  ]);


  export const Router =() => (
    <RouterProvider router={router} />
  )
