import { useEffect } from "react";

interface Props {
    list: number[]
}

export const StringList = (props: Props) => {
    const string = [...props.list].join(', ');

    // useEffect który zadziała na update komponentu
    useEffect(() => {
        console.log('Zmienia się lista.')
    }, [props.list])

    return <p>{string}</p>
}