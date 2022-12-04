import React from 'react'
import ReactDOM from 'react-dom/client'
import {Participants} from "./Components/Participants";
import {participantsData} from "../data/aprtycipants"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Participants list={participantsData}/>
  </React.StrictMode>
)
