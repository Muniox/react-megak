import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Participants } from './Participants'
import { participantsData } from '../data/aprtycipants'
import './main.css'

export interface Person {
  name: string;
  lastName: string;
  age: number;
}

const person: Person = {
  name: 'John',
  lastName: 'Doe',
  age: 123,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<>
  <App person = {person} />
  <App person = {{
      name: 'John',
      lastName: 'Doe',
      age: 123,
    }} 
  />
    <Participants list={participantsData} />
</>
)
