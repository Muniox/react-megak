import './App.css'
import { useState, Component, useEffect } from 'react'


// export const App = () => {
//     const [name, setName] = useState('Foo');
//
//     setTimeout(() => {
//        setName( 'Bar');
//     }, 2500);
//
//     return <h1>{name}</h1>
// }

export class App extends Component<any, any>{
    state = {
        name: 'Foo',
        lastName: 'Xxx',
    }

    componentDidMount() {
        console.log('Pierwsze zamontowanie komponentu w DOM.');

        setTimeout(() => {

            this.setState({
                name: 'Bar'
            });

        }, 2500);
    }

    componentDidUpdate() {
        console.log('Aktualizowanie DOMu...');
    }

    componentWillUnmount() {
        console.log('Odmontowywanie komponentu');
    }

    render() {
        const {name} = this.state;
        console.log('Renderowanie...');
        return <h1>{name}</h1>
    }
}

