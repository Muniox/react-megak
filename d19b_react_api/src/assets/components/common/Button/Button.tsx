import {FC, ReactNode} from "react"
import "./Button.pcss"

interface Props {
    children: ReactNode;
    padding: string;
}

export const Button: FC<Props> = (props) => {

    return <button className="Button" style={{padding: props.padding}}>{props.children}</button>
}