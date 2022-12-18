import {FC} from "react"

interface Props {
    errorMessage: string;
}

export const RegisterError: FC<Props> = (props) => {

    return (
        <div className="register-form__error-message">{props.errorMessage}</div>
    )
}