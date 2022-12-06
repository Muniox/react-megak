import {BaseSyntheticEvent, Component} from "react";

export class ClassComponent extends Component<any, any> {
    state = {
        isSent: false
    }

    sendForm = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        console.log(this);

        this.setState({
            isSent: true
        });
    }

    render() {
        return (
            <form action="" onSubmit={this.sendForm}>
                <p>{this.state.isSent ? 'Wysłano!' : 'Proszę wpisać dane'}</p>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        )
    }
}