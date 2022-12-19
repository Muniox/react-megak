import './App.pcss'
import {Input} from "./Components/Input";
import {Select} from "./Components/Select";
import {TextArea} from "./Components/TextArea";
import {CheckBox} from "./Components/CheckBox";
import {Zadanie1} from "./Components/Zadanie1";
import {PersonFormV1} from "./Components/PersonFormV1";
import {PersonFormV2} from "./Components/PersonFormV2";
import {PersonForm} from "./Components/PersonForm";



export const App = () => {

  return (
    <div className="App">
      {/*<Input />*/}
      {/*  <Select />*/}
      {/*  <TextArea/>*/}
      {/*  <CheckBox />*/}
      {/*  <Zadanie1/>*/}
      {/*  <PersonFormV1/>*/}
      {/*<PersonFormV2/>*/}
        <PersonForm/>
    </div>
  )
}

