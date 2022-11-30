import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'

/**
 * Componenty mogą zwrócić
 * inny coomponent
 * element jak <p></p>
 * oraz null
 * 
 * Wyróżniamy dwa typy komponentów:
 * funkcyjny
 * klasowy
 */

interface AppProps {
  name: string;
}

//komponent funkcyjny
export const App = (props: AppProps) => {
  
  return (
    <div className="App">
      hello {props.name}
    </div>
  )
}

//komponent klasowy
// export class App2AppProps2 extends Component<{My props},{My state}> 
export class App2 extends Component<{name: string},{}> {
   
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
}