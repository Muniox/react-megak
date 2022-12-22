import {FC} from "react"
import { GiftEntity } from "../../types/gifts"

interface Props {
    gift: GiftEntity
}

export const GiftTableRow: FC<Props> = (props) => {
    return (
        <tr>
            <td>{props.gift.id}</td>
            <td>{props.gift.name}</td>
            <td>{props.gift.count}</td>
        </tr>
    )
}