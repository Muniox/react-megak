interface RecordsProps {
    count: number
}



export const Records = (props: RecordsProps ) => {
    return (
        <>
            <p>
                Razem: { props.count } rekordów.
            </p>
        </>
    )
}