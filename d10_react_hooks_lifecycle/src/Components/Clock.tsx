import {Component} from "react";

interface State {
    dt: Date;
}

export class Clock extends Component<any, any>{
    state = {
        dt: new Date(),
    }
    intervalId: number | undefined;

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prev: State) => {
                return {
                    dt: new Date(),
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return <p>
            {this.state.dt.toLocaleString()}
        </p>;
    }
}