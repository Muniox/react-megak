import {ChangeEvent, FormEvent, useState} from "react";

export const Input = () => {
    const [firstName, setFirstName] = useState("");

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return <form onSubmit={sendForm}>
        <div>

            <label htmlFor="my-area">Mój Formularz: </label>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="my-form"
            />
        </div>
        <button type="submit">Send</button>
    </form>
}