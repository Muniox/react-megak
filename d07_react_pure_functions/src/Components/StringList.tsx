interface StringListProps {
    list: string[] | number[];
}

export const StringList = (props: StringListProps) => {
    // props.list.pop(); //zmienia tablice, funkcję mają nie mutować propsów
    // Natomiast, jeśli chcemy zmienić tablicę, należy użyć slice
    // albo zrobić kopię tablicy poprzez [...props.list]
    const newAr = [...props.list]
    newAr.push(props.list.length)

    const string = newAr.join(', ');

    /**
     * Jak skopiować obiekt?
     *
     * możliwe będzie wykorzystanie w przyszłości structuredClone( obiekt )
     * albo JSON.parse(JSON.stringify(obiekt)) niestety nie wszystkie przeglądarki z tego skorzystają, będą wymagać polyfillów
     * najlepiej wykorzystać paczkę lodash i użyć funkcji _.cloneDeep( value )
     * */


    return (
        <>
            <p>
                { string }
            </p>
        </>
    )
}