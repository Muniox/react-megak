import {FC, ReactNode, useEffect, useState} from "react"

interface Props {
    children?: ReactNode
}

interface API {
    symbol: string;
    askPrice: string;
    highPrice: string;
    lowPrice: string;
}


export const BitcoinPrice: FC<Props> = (props) => {
    const [price, setPrice] = useState<string | null>(null);

    useEffect(() => {
        const bitcoinIntervalId = setInterval(() => {

            (async (): Promise<void> => {
                const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
                const data = (await res.json()) as API;
                setPrice(data.askPrice)
                console.log(data.askPrice)
            })();

        }, 2000);

        return () => clearInterval(bitcoinIntervalId)
    },[])



    return <div>
        {props.children} {price === null ? 'wczytywanie...' : Number(price).toFixed(2)}
    </div>
}
