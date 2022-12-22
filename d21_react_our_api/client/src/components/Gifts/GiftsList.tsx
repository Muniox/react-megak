import {FC, useEffect, useState} from "react"
import { GiftEntity } from "../../types/gifts";
import { GiftsTable } from "./GiftsTable";


export const GiftsList: FC = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/gift');
            const data = await res.json();
            setGiftsList(data.giftList);
        })();
    },[])

    if (giftsList === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        <h1>Gifts</h1>
        <GiftsTable gifts={giftsList}/>
    </>
}