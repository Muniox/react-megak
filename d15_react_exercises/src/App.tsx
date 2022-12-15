// import './App.pcss'
import {UsersList} from "./Components/UsersList";
import {people} from "../data/people";

export const App = () => {

  return (
    <div className="App">


      <UsersList users={people} />
    </div>
  )
}

