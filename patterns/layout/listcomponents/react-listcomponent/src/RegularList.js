import RowList from "./RowList"
import ColumnList from "./ColumnList"

export default function RegularList( { persons } ) {
    console.log(persons)
    return (
        <>
            {
                persons.map((item, index) => {
                    return (
                        <>
                            <table style={{ width: "100%" }}>
                                <tr>
                                    <td style={{ width: "30%", color: "blue", fontSize: "20px", padding: "10px", background: "lightgreen"}}><RowList person={item}/></td>
                                    <td style={{ width: "70%",color: "red", fontSize: "20px", padding: "10px", background: "lightblue"}}><ColumnList person={item}/></td>        
                                </tr>
                            </table>
                        </>
                    )
                })
            }
        </>
    )

}