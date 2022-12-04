import {useState, useEffect} from "react";

// interface Props {
//
// }

export const ClockF = () => {
    const [dt, setDt] = useState(new Date());

    useEffect(() => {

            setInterval( () => {
                setDt(new Date());
            },1000)

    }, []);


    return <p>{dt.toLocaleString()}</p>
};