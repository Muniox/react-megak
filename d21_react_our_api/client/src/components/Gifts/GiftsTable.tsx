import {FC} from "react"
import { GiftEntity } from "../../types/gifts"
import { GiftTableRow } from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
}

export const GiftsTable: FC<Props> = (props) => {
    
    return <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.gifts.map(gift => <GiftTableRow gift={gift} key={gift.id}/>)
                }
            </tbody>
        </table>
        
    </>
}