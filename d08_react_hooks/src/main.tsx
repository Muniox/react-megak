import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import {Name} from "./Name";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
      <Name />
  </React.StrictMode>
)
