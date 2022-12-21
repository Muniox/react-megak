import reactLogo from './assets/react.svg'
import './App.pcss'
import {BitcoinPrice} from "./components/BitcoinPrice";

export const App = () => {


  return (
    <div className="App">
     <BitcoinPrice>
         Aktualna cena Bitcoina do USDT to:
     </BitcoinPrice>
    </div>
  )
}

