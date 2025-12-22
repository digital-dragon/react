import { Component } from "react";

export const GreetingCard = ({ recipient, greeting, occassion}) => <div>{greeting} {occassion} to {recipient}</div>;

export const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}

export const HolidaysGreetingCard = partiallyApply(GreetingCard, { greeting: "Happy", occassion: "Holidays"});

export const XMasGreetingCard = partiallyApply(GreetingCard, { greeting: "Merry", occassion: "Christmas"});