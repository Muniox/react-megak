import {MouseEvent, FC, useState} from "react"
import {User, Users} from "../../data/people"
import {UserListItem} from "./UserListItem"
import "./UsersList.pcss"

interface Props {
    users: Users
}

export const UsersList: FC<Props> = (props) => {
    const [list, setList] = useState(props.users);



    const sortedUserList = [...list].sort((a: User, b: User) => {
        // return a.username < b.username ? -1 : 1
        return a.username.localeCompare(b.username);
    })

    const removeItem = (username: string) => {
        // console.log('Usuń element!', username)
        setList((list) => list.filter((user) => user.username !== username ) )
    };

    const Users = sortedUserList.map(user => {
        return <UserListItem
            user={user}
            key={user.username}
            onRemoveItem={removeItem}
        />
    })

    return <ul className="UsersList" >
        {Users}
    </ul>
};