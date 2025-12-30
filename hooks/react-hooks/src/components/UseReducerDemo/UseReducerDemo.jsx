import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
}

const initialState = { count: 0 };

export default function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);    
    return (
        <>
            <h4>Use Reducer Demo</h4>   
            <p>Count: {state.count}</p>
            <form>
                <input type="number" defaultValue={1} id="step" />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    const step = parseInt(document.getElementById('step').value, 10);
                    dispatch({ type: 'increment', payload: step });
                }}>Submit</button>
            </form>
        </>
    )
}

