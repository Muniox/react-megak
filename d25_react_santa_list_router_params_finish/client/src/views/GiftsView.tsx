import {FC} from "react"
import { GiftsList } from "../components/Gifts/GiftsList"
import { AddGift } from "../components/AddGift/AddGift"

export const GiftsView: FC = () => {

    return <>
        <GiftsList/>
        <AddGift/>
    </>
}