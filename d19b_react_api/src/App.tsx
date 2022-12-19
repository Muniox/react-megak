import { FormEvent, useState } from 'react'
import './App.pcss'
import { AgeGuesser } from './assets/components/AgeGuesser/AgeGuesser'
import { AgeGuesserAnswer } from './assets/components/AgeGuesser/AgeGuesserAnswer';

export const App = () => {
  const [name, setName] = useState('');
  const [check, setCheck] = useState(false);

  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCheck(true);
  };

  if (check) {
    return <AgeGuesserAnswer name={name}/>
  }

  return (
    <form onSubmit={sendForm}>
      <label>
        Podaj imię: <br />
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type='submit'>Zgadnij mój wiek</button>
    </form>
  )
}

