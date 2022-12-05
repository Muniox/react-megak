interface Props {
    background
}

export const CrazyColor = () => {
    const [inputType, setInputType] = useState('password');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setInputType((inputType) => (
                inputType === 'password' ? 'text' : 'password'
            ));

            /**
             * password
             * =>
             * text
             * =>
             * password
             */


        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <input style={{backgroundColor}} />;
}