export default function RowList( { person } ) {
    return (
        <ul>
            <li>{ person.name }</li>
            <li>{ person.age }</li>
            <li>{ person.city }</li>
        </ul>
    )
}