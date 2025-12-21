export const colorTheBase = ( Component, color ) => {
    return (props) => {
        const newProps = {...props, color: color, type: "HOC" } ;
        return <Component {...newProps} />   
    }
}