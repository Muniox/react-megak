import {Component} from "react";

interface Prev {
    count: number;
}

export class Counter extends Component<any, any> {
    state = {
        count: 0
    }
    intervalId: number | undefined;

    componentDidMount() {
        this.intervalId = setInterval( () => {

            this.setState((prev: Prev) => ({
                count: prev.count + 1
            }));

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                {this.state.count}
            </>
        )
    }
}

