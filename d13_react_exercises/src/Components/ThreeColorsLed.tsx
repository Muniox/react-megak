import {FC, useState} from "react"

export const ThreeColorsLed: FC = () => {
    const [color,setColor] = useState('white');

    const colors = ['red', 'green', 'blue'];

    return <div className="container">
        <div className="colors-card">
            <div
                className="colors-card__box"
                style={{backgroundColor: color}}
            />
            <div className="button-container">
                {
                    colors.map(color => <button onClick={() => setColor(color)}>{color}</button>)
                }
            </div>
        </div>
    </div>

}