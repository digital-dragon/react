import { useEffect, useState, useCallback } from 'react';

function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('Updating Items');
        setItems(getItems());
    }, [getItems]);

    return items.map((item, index) => <div key={index}>{item}</div>);

}

export default function UseCallbackDemo() {
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    return (
        <>
            <input type="number"     value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
            <input type="number" value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))}></input>
            <p>{number}</p>
            <List getItems={getItems} />
        </>
    )
}