import {Component, useEffect, useState} from "react";
import {StringList} from "./StringList";

interface State {
    numbers: number[];
}

// functional component
export const NumberList = () => {
    const [numbers, setNumbers] = useState([1]);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setNumbers((numbers) => {
                return [...numbers, numbers.length + 1]
            });
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>
            <StringList list={numbers}/>
        </div>
    )
}

// class component
export class NumberList2 extends Component<any, any>{
    state: State = {
        numbers: [1],
    };
    intervalId: NodeJS.Timer | undefined;
    

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState( (prev: State) => {
                return {
                    numbers: [...prev.numbers, prev.numbers.length + 1]
                }
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }


    render() {
        return (
            <div>
                <StringList list={this.state.numbers}/>
            </div>
        )
    }
}