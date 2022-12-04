import {StringList} from "./StringList";
import {Records} from "./RecordsCount";

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
            <Records count={props.list.length} />
        </>
    )
}