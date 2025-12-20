import React, { useEffect, useState } from "react";

export const users = [
    { name: "Johan" , nationality: "German", greeting: "Hallo"},
    { name: "John" , nationality: "English", greeting: "Hello"},
    { name: "Jean" , nationality: "French", greeting: "Bojour"},
]

export const cities = [
    { name: "Munich" , country: "Germany", greeting: "Hallo"},
    { name: "London" , country: "England", greeting: "Hello"},
    { name: "Paris" , country: "France", greeting: "Bojour"},
]

export default function DataLoader({ getData = () => {}, resourceName, children, }) {
    const [ data, setData ] = useState({});

    useEffect(() => {
        let newData = getData();
        setData(newData);
    }, []);

    return data && React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName] : data });
        }
        return child;
    })
    
}