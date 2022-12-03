import {StringList} from "./StringList";

interface Participant {
    name: string;
    email: string;
}

interface ListProps {
    list: Participant[];
}

export const Participants = (props: ListProps) => {
    const names = props.list.map(person => person.name)

    return (
        <>
            <StringList list={names} />
            <p>
                Razem: { props.list.length } rekordów.
            </p>
        </>
    )
}