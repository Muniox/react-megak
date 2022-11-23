import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import { App } from './components/App'
import { Article } from './components/Article'
import { Name } from './components/Name'
import './main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <App />
      <Article />
    </>,
    
  },
  {
    path: "/name",
    element: 
    <>
      <Name />
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
