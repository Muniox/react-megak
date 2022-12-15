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
      <div className="UserListOneItem__user-info">
          <p className="UserListOneItem__name-surname"><span>{capitalLetter(props.user.first_name)}</span>  <span>{capitalLetter(props.user.last_name)}</span></p>
          <p className="UserListOneItem__username">{props.user.username}</p>
      </div>
  </li>
}