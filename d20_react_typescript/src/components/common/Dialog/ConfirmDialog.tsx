import "./Dialog.pcss"
import {FC, ReactNode} from "react"
import {Dialog} from "./Dialog";

interface Props {
    children?: ReactNode;
    title?: string;
}

export const ConfirmDialog: FC<Props> = props => {
    return(
        <Dialog title={props.title}>
            {props.children}
            <hr/>
            <button>Yes</button> <button>No</button>
        </Dialog>
    )

}