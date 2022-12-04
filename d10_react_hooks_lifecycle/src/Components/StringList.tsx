interface Props {
    list: number[]
}

export const StringList = (props: Props) => {
    const string = [...props.list].join(', ')

    return <p>{string}</p>
}