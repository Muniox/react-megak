import {RandomUser} from "./components/RandomUser"
import './App.pcss'
import {BitcoinPrice} from "./components/BitcoinPrice";

export const App = () => {


  return (
    <div className="App">
      <RandomUser/>
     <BitcoinPrice>
         Aktualna cena Bitcoina do USDT to:
     </BitcoinPrice>
    </div>
  )
}

