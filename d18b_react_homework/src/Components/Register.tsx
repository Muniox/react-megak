import {ChangeEvent, FC, FormEvent, useState} from "react"
import "./RegisterForm.pcss"

export const Register: FC = () => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const nameAndSurnameCheck = (data: string) => {
        if (!data) {
            return "register-form__display";
        } else if (data.length < 3) {
            return "register-form__display register-form__display--error"
        } else if (data.length >= 3) {
            return "register-form__display register-form__display--valid"
        }
    }

    const emailCheck = (data: string) => {
        if (!data) {
            return "register-form__display";
        } else if (!data.split('').includes('@')) {
            return "register-form__display register-form__display--error"
        } else {
            return "register-form__display register-form__display--valid"
        }
    }

    const passwordCheck = (data: string) => {
        if (!data) {
            return "register-form__display";
        } else if (data.length < 8) {
            return "register-form__display register-form__display--error"
        } else if (data.length >= 8) {
            return "register-form__display register-form__display--valid"
        }
    }

    const repeatPasswordCheck = (data: string) => {
        if (!data) {
            return "register-form__display";
        } else if ((data === user.password) && data.length > 8) {
            return "register-form__display register-form__display--valid"
        } else {
            return "register-form__display register-form__display--error"
        }
    }


    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((user) =>({
            ...user,
            [e.target.name]: e.target.value,
        }));
    }

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    }

    return <>
        <form onSubmit={sendForm} className="register-form" noValidate={true}>
            <label htmlFor="name">Imię:</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={inputHandler}
                className={nameAndSurnameCheck(user.name)}
            />

            <label htmlFor="surname">Nazwisko:</label>
            <input
                type="text"
                id="surname"
                name="surname"
                onChange={inputHandler}
                className={nameAndSurnameCheck(user.surname)}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={inputHandler}
                className={emailCheck(user.email)}
            />

            <label htmlFor="password">Hasło:</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={inputHandler}
                className={passwordCheck(user.password)}
            />

            <label htmlFor="repeat-password">Powtórz hasło:</label>
            <input
                type="password"
                id="repeat-password"
                name="repeatPassword"
                onChange={inputHandler}
                className={repeatPasswordCheck(user.repeatPassword)}
            />

            <button>Zarejestruj</button>
        </form>
    </>
}