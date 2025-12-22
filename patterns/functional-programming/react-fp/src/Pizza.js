export const Pizza = ({ children }) => <div style={{ width: "10%"}}> {children} </div>;

export const Base = () => <div style={{ background: "beige"}}>Pizza base</div>;

export const CheeseTopping = ({ cheese  }) => <div style={{ background: "yellow"}}>{cheese}</div>;

export const PepperoniTopping = ({ pepperoni }) => <div style={{ background: "red"}}>{pepperoni}</div>;

export const VegetableTopping = ({ vegetable }) => <div style={{ background: "green"}}>{vegetable}</div>;
