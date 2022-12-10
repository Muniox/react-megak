import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { CheckPassword } from './Components/CheckPassword'
import { Navbar } from './Components/Navbar';
import { ThreeColorsLed } from "./Components/ThreeColorsLed";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar />
    ),
  },
  {
    path: "password",
    element:( 
      <>
        <Navbar />
        <CheckPassword />
      </>
    )
  },
  {
    path: "colors",
    element:( 
      <>
        <Navbar />
        <ThreeColorsLed />
      </>
    )
  },
]);


export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
