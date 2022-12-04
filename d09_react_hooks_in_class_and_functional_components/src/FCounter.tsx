import {useState} from "react";
import {Counter} from "./Counter"

export const Show = () => {
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false);
    }, 5000);

    return show
        ? <Counter />
        : null;
}