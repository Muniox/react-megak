import {FC} from "react"
import {api} from "../api"

interface Props {
    api: api | null;
}

export const OneRandomItem: FC<Props> = (props) => {

    if (!props.api) {
        return <div>Wczytywanie...</div>
    }

    return <li>
        <img src={props.api.results[0].picture.medium} alt={props.api.results[0].name.first} />
        <div>name: {props.api.results[0].name.first}</div>
        <div>surname: {props.api.results[0].name.last}</div>
    </li>
}