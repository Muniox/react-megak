import {Component} from "react";
import {StringList} from "./StringsList";

interface State {
    arrayNumber: number[];
}

export class Numbers extends Component<any, any>{
    state: State = {
        arrayNumber: [1],
    }
    private intervalId: number | undefined;
    
    
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prev: State) => ({
                arrayNumber: [...prev.arrayNumber, prev.arrayNumber.length + 1]
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <StringList list={this.state.arrayNumber} />
    }
}