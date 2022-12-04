import {Component} from "react";
import "./number-list.scss";
import {StringList} from "./StringList";

interface State {
    numbers: number[];
}

export class NumberList extends Component<any, any>{
    state: State = {
        numbers: [1],
    };
    private intervalId: number | undefined;

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