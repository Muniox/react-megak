import "./Dialog.pcss"
import {FC, } from "react"
import {Dialog} from "./Dialog";

interface Props {
    children?: JSX.Element | JSX.Element[] ;
    title?: string;
}

export const ConfirmDialog: FC<Props> = (props) => {
    return(
        <Dialog>
            {props.children}
            <hr/>
            <button></button>
        </Dialog>
    )

}