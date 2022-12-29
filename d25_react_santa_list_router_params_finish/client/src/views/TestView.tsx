import {FC} from "react"
import { useParams } from "react-router-dom";

export const TestView: FC = () => {
    const {foobar} = useParams();

    console.log(foobar)
    return <>
        <h1>Test!</h1>
        
    </>
}