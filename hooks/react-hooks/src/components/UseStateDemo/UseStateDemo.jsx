import React, { useState, useRef, useEffect } from 'react';
export default function UseStateDemo() {
    const [color, setColor] = useState('red');
    const [btnText, setBtnText] = useState('Change to Blue');
    const renderCount = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        renderCount.current += 1;
    });

    const handleBtnClick = () => {
        if (color === 'red') {
            setColor('blue');
            setBtnText('Change to Red');
        } else {
            setColor('red');
            setBtnText('Change to Blue');
        }
        inputRef.current.focus();
    };

    return (
        <>
            <h4>Use State Demo</h4>
            <button style={{ backgroundColor: color }} onClick={handleBtnClick}>
                {btnText}
            </button>
            <p>Render Count: {renderCount.current}</p>
            <input ref={inputRef} type="text" />
            
        </>

    )
}