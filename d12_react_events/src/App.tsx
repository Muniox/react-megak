import {FC, BaseSyntheticEvent,} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ProgressBar} from "./Components/ProgressBar";
import {AnimatedProgressBar} from "./Components/AnimatedProgressBar";
import {ClassComponent} from "./Components/ClassComponent";

export const App: FC = () => {

    const sendForm = (e: BaseSyntheticEvent) => {
        e.preventDefault();
    }

    const clicked = (e: BaseSyntheticEvent) => {

        alert("Kliknięto!");
        console.log(e);

    }

  return (
      <>
        <div className="App">
          {/*<AnimatedProgressBar />*/}
        </div>
          <form action="" onSubmit={sendForm}>
              <div>
                  <label htmlFor="my-input"> Mój input:</label>
                  <input type="text" id="my-input"/>
              </div>

              <button onClick={clicked}>
                  Click me!
              </button>
          </form>
          <ClassComponent />
      </>
  );
}
