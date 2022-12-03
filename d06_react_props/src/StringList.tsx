interface StringListProps {
    list: string[]
}

export const StringList = (props: StringListProps) => {
    const string = props.list.join(', ');

    return (
        <>
            <p>
                { string }
            </p>
        </>
    )
}