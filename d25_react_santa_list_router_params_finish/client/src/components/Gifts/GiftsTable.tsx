import {FC} from "react"
import { GiftEntity } from "types"
import { GiftTableRow } from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => void;
}

export const GiftsTable: FC<Props> = (props) => {
    
    return <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.gifts.map(gift => (<GiftTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange}/>))
                }
            </tbody>
        </table>
        
    </>
}