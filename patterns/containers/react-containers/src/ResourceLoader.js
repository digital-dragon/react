import React, { useEffect, useState } from "react";

const users = [
    { name: "Johan" , nationality: "German", greeting: "Hallo"},
    { name: "John" , nationality: "English", greeting: "Hello"},
    { name: "Jean" , nationality: "French", greeting: "Bojour"},
]

const cities = [
    { name: "Munich" , country: "Germany", greeting: "Hallo"},
    { name: "London" , country: "England", greeting: "Hello"},
    { name: "Paris" , country: "France", greeting: "Bojour"},
]

export default function ResourceLoader({ resourceName, resourceId, children, }) {
    const [ resource, setResource ] = useState({});

    useEffect(() => {
        let resource = {};
        if (resourceName === "city") {
            resource = cities.find(city => city.country = resourceId);
        }

        if (resourceName === "user") {
            resource = users.find(u => u.nationality === resourceId);
        }
        setResource(resource);
    }, []);

    return resource && React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName] : resource });
        }
        return child;
    })
    
}