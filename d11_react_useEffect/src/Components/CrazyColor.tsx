import {useState, useEffect} from "react";

export const CrazyColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundColor((backgroundColor) => (
                backgroundColor === 'white' ? 'yellow' : 'white'
            ));

            /**
             * password
             * =>
             * text
             * =>
             * password
             */


        }, 500)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <input style={{backgroundColor}} />;
}