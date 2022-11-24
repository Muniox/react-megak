import ReactDOM from "react-dom/client"
// import './index.css'



// export const App = () => {
//   let name = prompt('Please enter your name')

//   const showedName = name !== null ? <h1>Witaj {name}</h1> : <strong>"Brak imienia"</strong> 

//   return (
//     <div className="App">
//       {showedName}
//     </div>
//   )
// }

let name: string | null = prompt('Please enter your name');
const isNameSet: JSX.Element = name !== null ? <h1>Witaj {name}</h1> : <strong>"Brak imienia"</strong> 

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <div>
     {isNameSet}
    </div>
)
