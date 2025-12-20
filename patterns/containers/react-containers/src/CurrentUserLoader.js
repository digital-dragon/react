import React from "react";

export default function CurrentUserLoader({ children}) {

    const user = {
        name: "Digital Dragon"
    }

    return user && React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { user });
        }
        return child;
    })
    
}