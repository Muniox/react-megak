import {FC, useEffect, useState} from "react"

type Error = null | string

interface Props {
    name: string;
}

export const AgeGuesserAnswer: FC<Props> = (props) => {
    const [age, setAge] = useState(null);
    const [error, setError] = useState<Error>(null)
    const getYear = new Date().getFullYear();

    useEffect(() => {
        (async () => {
            try{
                setError(null)
                const res = await fetch(`https://api.agify.io/?name=${props.name}`);
                const data = await res.json();
                setAge(data.age);
            } catch(e) {
                setError('Błąd wczytywania!');
            }
        })()
    },[])

    if (error) {
        return <p>{error}</p>
    }


    if(age === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        {}
        <p>Twój wiek {age}</p>
        <p>Twoja data urodzenia to: {getYear - Number(age)}</p>
    </>
}