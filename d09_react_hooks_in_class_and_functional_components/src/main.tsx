import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {Counter} from './Counter'
import './index.css'
import {Show} from "./FCounter";
import {Numbers} from "./Numbers";
import {Watch} from "./Watch";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
      <Show />
      <Numbers />
      <Watch />
  </React.StrictMode>
)
