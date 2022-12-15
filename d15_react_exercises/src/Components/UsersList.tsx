import {FC} from "react"
import {User, Users} from "../../data/people";
import {UserListItem} from "./UserListItem";

interface Props {
    users: Users
}

export const UsersList: FC<Props> = (props) => {
    const sortedUserList = [...props.users].sort((a: User, b: User) => {
        // return a.username < b.username ? -1 : 1
        return a.username.localeCompare(b.username);
    })

    const Users = sortedUserList.map(user => <UserListItem user={user} key={user.username}/>)

    return <div>
        {Users}
    </div>
};