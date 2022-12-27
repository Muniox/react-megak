import {FC, useEffect, useState} from "react"
import { GiftEntity } from "types";
import { GiftsTable } from "./GiftsTable";


export const GiftsList: FC = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    const refreshGifts = async () => {
        setGiftsList(null);
        const res = await fetch('http://localhost:3000/gift');
        const data = await res.json();
        setGiftsList(data.giftList);
    };

    useEffect(() => {
        refreshGifts();
    },[]);

    if (giftsList === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        <h1>Gifts</h1>
        <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts}/>
    </>
}