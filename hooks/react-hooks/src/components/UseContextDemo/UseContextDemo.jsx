import { createContext } from "react";
import React, { useState } from 'react';

export const ColorContext = createContext();

export default function UseContextDemo({children}) {
    const [color, setColor] = useState('red');
    const [btnText, setBtnText] = useState('Change to Blue');

    const handleBtnClick = () => {
        if (color === 'red') {
            setColor('blue');
            setBtnText('Change to Red');
        } else {
            setColor('red');
            setBtnText('Change to Blue');
        }
    };

    return (
        <>
            <h4>Use Conext Demo</h4>
            <button style={{ backgroundColor: color }} onClick={handleBtnClick}>
                {btnText}
            </button>
            <ColorContext.Provider value={color}>
                {children}
            </ColorContext.Provider>
        </>
    )
        
        
}