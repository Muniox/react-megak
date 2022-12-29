import {FC, useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetSingleGiftRes} from 'types'

export const SingleGiftView: FC = () => {
    const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null)

    const {idOfGift} = useParams();
    //użyć dotenv aby wszędzie nie pisać localhost:3000
    //https://vitejs.dev/guide/env-and-mode.html
    //https://medium.com/frontend-handbooks/use-dotenv-to-configure-environment-variables-ae53ca098ac4
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3000/gift/${idOfGift}`);
            setGiftInfo(await res.json());
        })();
    },[])

    if (giftInfo === null) {
        return null
    }

    return <>
        <h1>{giftInfo.gift.name}</h1>
        <p>This gift has ID <strong>{giftInfo.gift.id}</strong>. We had
        <strong> {giftInfo.gift.count}</strong> of this item and 
        <strong> {giftInfo.givenCount} were already given</strong></p>
        <p>
            <Link to="/gift">Go back to list</Link>
        </p>
    </>
}