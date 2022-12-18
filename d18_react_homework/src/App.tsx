import './App.pcss'
import {Login} from "./Components/Login";
import {MouseEvent, useState} from "react";
import {Register} from "./Components/Register";


export const App = () => {
    const [show,setShow] = useState(true);

    const clickHandlerLogin = (e: MouseEvent) => {
        e.preventDefault();
        setShow(true)
    }

    const clickHandlerRegister = (e: MouseEvent) => {
        e.preventDefault();
        setShow(false)
    }

  return (
    <div className="App">
        <nav className="nav">
            <div><a onClick={clickHandlerLogin}>Logowanie</a></div>
            <div><a onClick={clickHandlerRegister}>Rejestracja</a></div>
        </nav>
        {show ? <Login /> : <Register/>}
    </div>
  )
}

