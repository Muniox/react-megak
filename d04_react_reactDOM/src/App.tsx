import ReactDOM from "react-dom/client"
import './App.css'



// export const App = () => {
//   let name = prompt('Please enter your name')

//   const showedName = name !== null ? <h1>Witaj {name}</h1> : <strong>"Brak imienia"</strong> 

//   return (
//     <div className="App">
//       {showedName}
//     </div>
//   )
// }

let name = prompt('Please enter your name')

ReactDOM.createRoot(document.querySelector('root') as HTMLElement).render(
    

    <div className="App">
     {name !== null ? <h1>Witaj {name}</h1> : <strong>"Brak imienia"</strong> }
    </div>
)