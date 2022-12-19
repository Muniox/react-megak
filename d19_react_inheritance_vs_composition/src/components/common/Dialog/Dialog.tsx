import "./Dialog.pcss"
import {FC, } from "react"

interface Props {
    children?: JSX.Element | JSX.Element[] | string | string[]
    title?: string;
}

export const Dialog: FC<Props> = (props) => {

    return <div className="Dialog__container">
        {
            props.title && <div className="Dialog__title">{props.title}</div>
        }
        <div className="Dialog__content">
            {props.children}
        </div>

    </div>
}