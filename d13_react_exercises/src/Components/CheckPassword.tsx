import {FC} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons"


export const CheckPassword: FC = () => {
    return  <div>
        <label htmlFor="">Password:</label>
        <input type="password" />
        <FontAwesomeIcon icon={faEye} />
        <FontAwesomeIcon icon={faEyeSlash} />
        <button>Send</button>
    </div>
}