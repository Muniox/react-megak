import { useEffect, useState } from "react"

export const Clock = () => {
    const [dt, setDt] = useState(new Date());

    
    //===================================================

    // useEffect(() => {
        
    //     const intervalId = setInterval(() => {
    //         setDt(new Date());
    //     }, 1000);

    // }, []);

    // useEffect(() => {
    //     console.log('czas się zmienił!');
    // }, [dt])
    
    //===================================================

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDt(new Date());
        }, 1000);

        // sprzątanie po sobie
        return () => {
            clearInterval(intervalId);
        }
    }, [])


    // uruchomii się wyłącznie raz na samym początku
    // useEffect(() => {}, []);

    // uruchomii się wyłącznie przy zaktualizowaniu komponentu
    // useEffect(() => {}, [value])

    // po return uruchomi się wszystko przy odmontowaniu(usunięciu) komponentu 
    // useEffect(() => {
    //     --to co ma się wykonać
    //     return () => {
    //          -- to co ma się wykonać po usunięciu
    //     } 
    // }, [])


    return <p>{dt.toLocaleString()}</p>
}