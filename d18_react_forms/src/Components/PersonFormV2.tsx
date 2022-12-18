import {FC, FormEvent, useState} from "react"

export const PersonFormV2: FC = () => {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: 0
    });


    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(person)
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <p>
                    <label>
                        Imię:<br/>
                        <input
                            type="text"
                            value={person.firstName}
                            onChange={e => setPerson((person) => ({
                                ...person,
                                firstName: e.target.value,
                            }))}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Nazwisko:<br/>
                        <input
                            type="text"
                            value={person.lastName}
                            onChange={e => setPerson((person) => ({
                                ...person,
                                lastName: e.target.value,
                            }))}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Wiek:<br/>
                        <input
                            type="number"
                            value={person.age}
                            onChange={e => setPerson((person) => ({
                                ...person,
                                age: Number(e.target.value),
                            }))}
                        />
                    </label>
                </p>
                <p>
                    <button type="submit">Wyślij</button>
                </p>
            </form>
        </>
    )
}