import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom"

  import { Home }  from './Home'
  import { Login }  from './Login'
  import { Signup }  from './Signup'
  import { Dashboard }  from './Dashboard'
  import { Profile } from "./Dashboard/Profile"

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
    {
      path: "/Profile",
      element: <Profile />,
    },
   
  ]);


  export const Router =() => (
    <RouterProvider router={router} />
  )
