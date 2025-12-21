export const extendTheBase = ( Component) => props =>{
    return (
        <>
            <h4>Added by HOC</h4>
            <Component {...props}/>
        </> 
    )
}
