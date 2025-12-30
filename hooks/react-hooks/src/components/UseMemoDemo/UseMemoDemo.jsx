import { useRef, useState, useMemo, useCallback } from 'react';
export default function UseRefDemo() {
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);

    const doubleNumber = useMemo(() => slowFunction(number), [number]);

    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
            <input type="number" value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))}></input>
            <p>{number}</p>
        </>
    )
}

function slowFunction(num) {
    console.log('Calling Slow Function');
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
}