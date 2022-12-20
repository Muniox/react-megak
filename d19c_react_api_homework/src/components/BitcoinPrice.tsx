import {FC, useEffect, useState, ReactNode} from "react"

interface Props {
    children?: ReactNode
}


export const BitcoinPrice: FC<Props> = (props) => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const bitcoinIntervalId = setInterval(() => {
            (async () => {
                const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
                const data = await res.json();
                setPrice(data.askPrice)
            })()
        }, 2000);


        return () => clearInterval(bitcoinIntervalId)
    },[])


    return <div>
        {props.children} {price}
    </div>
}
