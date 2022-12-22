import {FC} from "react";
import {BinanceOneCryptoPairData} from "../../../types/crypto-data"

interface Props {
    onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOfOnePair: FC<Props> = (props) => {
    return <p style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}>
        {props.onePair.symbol} aktualnie jest handlowane za średnioważoną cenę {props.onePair.weightedAvgPrice}
    </p>
};