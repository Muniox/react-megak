import {FC} from "react";
import {capitalLetter} from "../../utils/first-big-letter";
import {people, User} from "../../data/people";
import "./UserListItem.pcss"

interface Props {
  user: User;
}

export const UserListItem: FC<Props>  = (props) => {
  return <li className="UserListOneItem">
     <img
         className="UserListOneItem__photo"
         src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
         alt={`Photo of ${props.user.first_name}`}
     />
    {props.user.username} {capitalLetter(props.user.first_name)} {capitalLetter(props.user.last_name)}
  </li>
}