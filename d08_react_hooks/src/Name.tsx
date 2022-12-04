import { useState, Component, useEffect } from 'react'


export const Name = () => {
    const [person, setPerson] = useState({
        name: 'Bartek',
        email: 'bartek@gmail.com'
    });

    setTimeout(() => {
        setPerson((person) => {
            const personCopy = JSON.parse(JSON.stringify(person))
            personCopy.name = 'Gaweł';
            return personCopy
        });
    }, 2500)

    return (
        <>
            <h1>{person.name}</h1>
        </>
    )
}
