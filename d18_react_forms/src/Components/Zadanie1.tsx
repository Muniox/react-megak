import {FC, useState} from "react"

export const Zadanie1: FC = () => {
    const [color, setColor] = useState("")


    return(
        <>
            <div>
                <label htmlFor="">Wybierz kolor:</label>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div style={{
                height: "250px",
                width: "250px",
                border: "1px solid white",
                backgroundColor: color
            }}>

            </div>
            <select
                name=""
                id=""
                value={color}
                onChange={(e) => setColor(e.target.value)}
            >
                <option value="">--wybierz--</option>
                <option value="red">Czerwony</option>
                <option value="green">Zielony</option>
                <option value="blue">Niebieski</option>
            </select>
        </>
        ) 

}