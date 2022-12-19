import {FC, ReactNode} from "react"
import { Button } from "./Button";
import "./Button.pcss"

interface Props {
    children: ReactNode;
}

export const BigButton: FC<Props> = (props) => {

    return <Button padding="30px 60px">{props.children}</Button>
}