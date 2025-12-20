import logo from './logo.svg';
import './App.css';
import RegularList from './RegularList';

const people = [
  {
    name: "Alice",
    age: 28,
    city: "New York"
  },
  {
    name: "Bob",
    age: 35,
    city: "London"
  },
  {
    name: "Charlie",
    age: 42,
    city: "Tokyo"
  }
];

function App() {
  return (
    <div className="App">
      <header style={{ background: "lightgray", fontSize: "20px"}}>
        Welcome to React List and List Item Pattern!
        <RegularList persons={people}/>
      </header>
    </div>
  );
}

export default App;
