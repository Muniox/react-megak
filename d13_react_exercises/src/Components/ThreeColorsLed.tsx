import {FC} from "react"

export const ThreeColorsLed: FC = () => {
    return <div className="container">
        <div className="colors-card">
            <div className="colors-card__box"/>
            <div className="button-container">
                <button>Red</button>
                <button>Green</button>
                <button>blue</button>
            </div>
        </div>
    </div>

}