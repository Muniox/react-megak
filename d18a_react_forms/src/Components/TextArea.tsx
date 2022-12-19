import {ChangeEvent, FormEvent, useState} from "react";

export const TextArea = () => {
    const [firstName, setFirstName] = useState("");

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    // textarea zachowuje się dokładnie ja input
    return <form onSubmit={sendForm}>
        <div>
            <label htmlFor="my-area">Mój Formularz: </label>
            <textarea
                name="secondName"
                id="my-area"
                cols={30}
                rows={10}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            >
            </textarea>

        </div>
        <button type="submit">Send</button>
    </form>


}