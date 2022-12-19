import {ChangeEvent, FormEvent, useState} from "react";

export const CheckBox = () => {
    const [agreementChecked, setAgreementChecked] = useState(false);

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(agreementChecked)
    }

    return <form onSubmit={sendForm}>
        <div>
            <label >
                <input
                    type="checkbox"
                    checked={agreementChecked}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAgreementChecked(e.target.checked)}
                /> I agree
            </label>
        </div>
        <p>{agreementChecked ? 'You will receive something...' : 'We will no send you anything'}</p>
        <button type="submit">Send</button>
    </form>
}