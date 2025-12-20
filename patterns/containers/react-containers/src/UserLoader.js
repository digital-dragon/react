import React, { useEffect, useState } from "react";

const users = [
    { name: "Johan" , nationality: "German", greeting: "Hallo Herr"},
    { name: "John" , nationality: "English", greeting: "Hello Mr"},
    { name: "Jean" , nationality: "French", greeting: "Bonjour Monsieur"},
]

export default function UserLoader({ children, nationality}) {
    const [ user, setUser ] = useState({});

    useEffect(() => {
        const usr = users.find(u => u.nationality === nationality);
        setUser(usr);
    }, []);

    return user && React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { user });
        }
        return child;
    })
    
}