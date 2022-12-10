import {FC, useEffect, useState} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons"


export const CheckPassword: FC = () => {
    const [isPreview, setIsPreview] = useState(false);

    const showPreview = () => {
        setIsPreview(true);
    }

    const hidePreview = () => {
        setIsPreview(false);
    }

    return  <div className="container">
            <div className="login-card">
            <label htmlFor="password">Password:</label>
            <div className="login-card__password-input">
                <input type={isPreview ? 'text' : 'password'} id="password"/>
                {   
                    isPreview ?
                    <FontAwesomeIcon icon={faEyeSlash} 
                        className="login-card__icon login-card__icon--lock"
                        onMouseUp={hidePreview}
                        onMouseLeave={hidePreview}
                    /> 
                    :
                    <FontAwesomeIcon 
                        icon={faEye} 
                        className="login-card__icon login-card__icon--unlock" 
                        onMouseDown={showPreview}
                    />
                }
            </div>
            <button>Send</button>
        </div>
    </div>
    
}