import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {NumberList} from "./Components/NumberList";
import {Clock} from "./Components/Clock";
import {ClockF} from "./Components/ClockF";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <div>
          <NumberList />
          <Clock />
          <ClockF />
      </div>
  </React.StrictMode>
)
