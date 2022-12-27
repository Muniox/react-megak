import {FC} from "react"
import { GiftsList } from "../components/Gifts/GiftsList"
import { AddGift } from "../components/AddGift/AddGift"
import { Spinner } from "../components/common/Spinner/Spinner"

export const GiftsView: FC = () => {

    return <>
        <GiftsList/>
        <AddGift/>
    </>
}