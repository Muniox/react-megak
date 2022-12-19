import {ChangeEvent, FormEvent, useState} from "react";

export const Select = () => {
    const [gender, setGender] = useState("M");

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(gender)
    }

    return <form onSubmit={sendForm}>
        <div>
            <select
                name="gender"
                id=""
                value={gender}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
            >
                <option value="">-wybierz-</option>
                <option value="W">Woman</option>
                <option value="M">Man</option>
            </select>
        </div>
        <p>Input length is {gender.length}</p>
        <button type="submit">Send</button>
    </form>
}