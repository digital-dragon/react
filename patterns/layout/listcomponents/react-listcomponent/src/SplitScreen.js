export default function SplitScreen({left: Left, right: Right}) {
    return (
        <>
            <table style={{ width: "100%" }}>
                <tr>
                    <td style={{ width: "30%", color: "blue", fontSize: "20px", padding: "10px", background: "lightgreen"}}><Left /></td>
                    <td style={{ width: "70%",color: "red", fontSize: "20px", padding: "10px", background: "lightblue"}}><Right /></td>             
                </tr>
            </table>
        </>
    )
}