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
    path: "test",
    element: (
      <Navbar />
    ),
  },
  {
    path: "test/password",
    element:( 
      <>
        <Navbar />
        <CheckPassword />
      </>
    )
  },
  {
    path: "test/colors",
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
