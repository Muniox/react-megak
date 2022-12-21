import {FC, useEffect, useState} from "react"
import {OneRandomItem} from "./OneRandomItem"
import {api} from "../api"


export const RandomUser: FC = () => {
    const [user, setUser] = useState<api | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try{
                const res = await fetch('https://randomuser.me/api/', {
                    signal: abortController.signal,
                });
                const data = await res.json() as api;
                setUser(data);
            } catch(e: any) {
                if (e.name !== "AbortError") {
                    
                  }
            }
            return () => abortController.abort();
        })()
        console.log("once");

        return () => {
            console.log('cos nie tak')
        }
    }, []);


    return <ul>
        <OneRandomItem api={user}/>
    </ul>
}