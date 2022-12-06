import {useState, FC} from "react";
import "./Progressbar.scss"

interface Props {
    percentage: number;
}

export const ProgressBar: FC<Props> = (props: Props) => {



    return (
        <div
            className="Progressbar"
            style={{
                width: `${props.percentage}vw`
            }}
        >
            {
                props.percentage > 10 && <p>{props.percentage}%</p>
            }

        </div>
    )
}