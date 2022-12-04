import { useState, Component, useEffect } from 'react'
import './App.css'


export const App = () => {
  const [count, setCount] = useState(0);

    useEffect(() => {
        return () => {
            const interval = setInterval(() => {
                setCount((count) => count + 1);
                clearInterval(interval);
            }, 1000);
        };
    }, [count]);

  return (
    <div className="App">
        {count}
    </div>
  )
}

// export class AppSecond extends Component<any, any> {
//
//
//     render() {
//         return undefined;
//     }
// }


// export const App = () => {
//     const [count, setCount] = useState(0);
//
//     const interval = setInterval(() => {
//         setCount((count) => count + 1);
//         clearInterval(interval);
//     }, 1000);
//
//     return (
//         <div className="App">
//             {count}
//         </div>
//     )
// }
