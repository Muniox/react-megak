import {ChangeEvent, FC, FormEvent, useState} from "react"
import "./LoginForm.pcss"
import {LoginSuccess} from "./LoginSuccess";
import {LoginFail} from "./LoginFail";

export const Login: FC = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const [valid, setValid] = useState(false)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin((login) => ({
            ...login,
            [e.target.name]: e.target.value,
        }));
        setValid(false);
    }

    const loginRespond = (login.email === 'a@b.c' && login.password === '1234') ?
        <LoginSuccess/> : <LoginFail/>

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValid(true);
        console.log(login)
    }

    return <>
        {valid && loginRespond}
        <form onSubmit={sendForm} className="login-form">
            <div className="login-form__email-container">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="login-form__email"
                    name="email"
                    onChange={inputHandler}
                />
            </div>
            <div className="login-form__password-container">
                <label htmlFor="password">Hasło:</label>
                <input
                    type="password"
                    id="password"
                    className="login-form__password"
                    name="password"
                    onChange={inputHandler}
                />
            </div>
            <button type="submit">Zaloguj</button>
        </form>
    </>
}