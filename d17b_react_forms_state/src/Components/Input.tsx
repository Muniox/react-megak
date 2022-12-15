import {ChangeEvent, useState} from "react";

export const Input = () => {
    const [firstName, setFirstName] = useState("");

    // const changeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    //     setFirstName(e.target.value)
    // }

    const borderColor = firstName[0] === '@' ? 'green' : 'red'



    return <>
        <h1>Hello, {firstName}</h1>
        <input
            style={{border: `1px solid ${borderColor}`}}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <p>You're entered {firstName.length} characters</p>
    </>


}