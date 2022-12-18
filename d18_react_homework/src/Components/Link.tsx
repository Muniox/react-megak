import {FC, MouseEvent} from "react"

export const Link: FC = () => {


    const clickHandler = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

    }

    return <div><a onClick={clickHandler} href="">Logowanie</a></div>
}