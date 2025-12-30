import { useContext } from "react";
import { ColorContext } from "./UseContextDemo";

export default function UseContextSiblingII () {
    const color = useContext(ColorContext);
    return (
        <>
            <h4 style={{ backgroundColor: color }}>Use Context Sibling II</h4>
        </>
    )
}