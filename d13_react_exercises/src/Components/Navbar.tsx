import {FC} from "react"
import{Link} from "react-router-dom";

export const Navbar: FC = () => {
    return <nav>
        <div className="nav-logo">
            <h1 className="nav-logo__title">
                <Link to="/" className="nav-logo__link">
                    <span className="nav-logo__letter-m">M</span>
                    <span className="nav-logo__letter-ega">EGA</span> 
                    <span className="nav-logo__letter-k">K</span>
                </Link>
            </h1>
        </div>
        <ul className='nav-list'>
            <li className="nav-list__item">
                <Link to="/password" className="nav-list__link">Password</Link>
            </li>
            <li className="nav-list__item">
                <Link to="/colors" className="nav-list__link">Colors</Link>
            </li>
        </ul>
    </nav>
}