export default function RecursiveComponent ( {structure} ) {
    return (
        <ul>
            {
                structure.map((item, index) => {
                    return (
                        <>
                            <li key={index}>{item.parent}</li>
                            { 'children' in item && <RecursiveComponent structure={item.children}/>}
                        </>
                    )

                })
            }
        </ul>
    )
}