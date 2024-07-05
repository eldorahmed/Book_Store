
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {
  const user=true

  const routes =createBrowserRouter([
    {
      path:'/',
      element:<ProtectedRoutes user={user}>
        <RootLayout/>
      </ProtectedRoutes>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
      ]
    }
  ])

  return ( <RouterProvider router={routes}/> )
}

export default App
