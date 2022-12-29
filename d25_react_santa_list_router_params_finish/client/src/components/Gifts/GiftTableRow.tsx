import {FC, MouseEvent} from "react"
import { Link } from "react-router-dom";
import { GiftEntity } from "types"

interface Props {
    gift: GiftEntity
    onGiftsChange: () => void;
}

export const GiftTableRow: FC<Props> = (props) => {
    
    const deleteGift = async (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        e.preventDefault();

        if (!confirm(`Are you sure you want to remove ${props.gift.name}?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3000/gift/${props.gift.id}`, {
            method: 'DELETE',
        });

        if ([400, 500, 404].includes(res.status)) {
            const error = await res.json();
            alert(`Error occured: ${error.message}`)
        }

        props.onGiftsChange();
    };

    return (
        <tr>
            <td>
                <Link to={`/gift/${props.gift.id}`}>{props.gift.name}</Link>
            </td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>🗑️</a>
            </td>
        </tr>
    )
}