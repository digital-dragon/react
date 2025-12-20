export default function ColumnList( { person } ) {
    return (
        <table style={{ width: "100%" }}>
                <tr>
                    <td>{ person.name }</td>
                    <td>{ person.age }</td>
                    <td>{ person.city }</td>           
                </tr>
        </table>
    )
}