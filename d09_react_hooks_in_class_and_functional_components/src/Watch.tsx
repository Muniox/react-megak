import {useState, useEffect} from "react"

export const Watch = () => {

    const [watch, setWatch] = useState((new Date()).toLocaleTimeString());

    // useEffect(() => {
    //     return () => {
    //         const intervalId = setInterval(() => {
    //             const time = new Date();
    //             setWatch((watch) => watch = time.toLocaleTimeString())
    //             clearInterval(intervalId);
    //         }, 1000);
    //     };
    // }, [watch]);

    const intervalId = setInterval(() => {
        const time = new Date();
        setWatch((watch) => watch = time.toLocaleTimeString())
        clearInterval(intervalId);
    }, 1000);

    return (
        <div>
            {watch}
        </div>
    )
}