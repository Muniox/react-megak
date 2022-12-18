import {ChangeEvent, FC, FormEvent, useState} from "react"

export const PersonForm: FC = () => {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: 0
    });


    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(person)
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => setPerson((person) => ({
        ...person,
        [e.target.name]: e.target.value,
    }));

    return (
        <>
            <form onSubmit={sendForm}>
                <p>
                    <label>
                        Imię:<br/>
                        <input
                            type="text"
                            value={person.firstName}
                            name="firstName"
                            onChange={inputHandler}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Nazwisko:<br/>
                        <input
                            type="text"
                            value={person.lastName}
                            name="lastName"
                            onChange={inputHandler}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Wiek:<br/>
                        <input
                            type="number"
                            value={person.age}
                            name="age"
                            onChange={inputHandler}
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