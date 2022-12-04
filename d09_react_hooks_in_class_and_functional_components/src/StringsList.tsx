interface Props {
    list: number[]
}

export const StringList = (props: Props) => {
    return (
        <div>
            {props.list.join(', ')}
        </div>
    )
}