import './App.css'
import { Clock } from './Components/Clock'
import { CrazyInput } from './Components/CrazyInput'
import { NumberList } from './Components/NumberList'
import {CrazyColor} from "./Components/CrazyColor";

export const App = () => {


  return (
    <div className="App">
      {/* <Clock /> zadanie przerobione z klasowego na funkcyjny */}
      {/* <NumberList /> zadanie przerobionez klasowego na funkcyjny */}
      <CrazyInput />
      <div style={{
        backgroundColor: 'red'
        }}>Sialalala</div>
        <CrazyColor />
    </div>

  )
}
