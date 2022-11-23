import {FC} from "react"

export const Name: FC = () => {
    const checkName = () => {
        const name = prompt('Podaj imie');
        return name === 'Kuba' ? 'BAN!' : name;
    }
    return (
        <>
            <div>{checkName()}</div>
        </>
    )
}