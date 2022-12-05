import { useEffect, useState } from "react";

interface Props {
    // type: 'text' | 'password',
    isPwd: boolean
}


export const CrazyInput = () => {
    const [inputType, setInputType] = useState('password');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setInputType((inputType) => (
                inputType === 'password' ? 'text' : 'password'
            ));

            /**
             * password
             * =>
             * text
             * =>
             * password
             */


        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <input type={inputType} />;
}