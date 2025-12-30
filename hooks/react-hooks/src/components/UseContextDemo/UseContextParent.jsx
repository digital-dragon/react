import UseContextDemo from "./UseContextDemo";
import UseContextSiblingI from "./UseContextSiblingI";
import UseContextSiblingII from "./UseContextSiblingII";

export default function UseContextParent () {

    return (
        <>
            <h4>Use Context Parent</h4>
            <UseContextDemo>
                <UseContextSiblingI />
                <UseContextSiblingII /> 
            </UseContextDemo>
        </>
    )
        
        
}