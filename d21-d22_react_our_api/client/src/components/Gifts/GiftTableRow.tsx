import {FC, MouseEvent} from "react"
import { GiftEntity } from "types"

interface Props {
    gift: GiftEntity
}

export const GiftTableRow: FC<Props> = (props) => {
    
    const deleteGift = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <tr>
            <td>{props.gift.id}</td>
            <td>{props.gift.name}</td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#disable" onClick={deleteGift}>🗑️</a>
            </td>
        </tr>
    )
}