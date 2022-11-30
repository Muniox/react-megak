import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, App2 } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App name="functional component"/>
    <App2 name="class component" />
  </React.StrictMode>
)
