import {FC} from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'


export const Header: FC = () => {
    const colorfOfLink = ({isActive}: {isActive: boolean})=> ({color: isActive ? 'red' : 'green'})

    return <>
        <h1>Santa App</h1>
        Menu: 
        <NavLink 
            style={colorfOfLink} 
            to="/gift"
        >
            Gifts
        </NavLink> 
            |
        <NavLink 
            to="/test"
            style={colorfOfLink}
        >
            Test
        </NavLink>
        <hr />
    </>
}




