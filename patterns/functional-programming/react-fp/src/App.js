import logo from './logo.svg';
import './App.css';
import RecursiveComponent from './RecursiveComponent';
import { Pizza, Base, CheeseTopping, PepperoniTopping, VegetableTopping } from './Pizza';
import { HolidaysGreetingCard, XMasGreetingCard } from './PartiallyAppliedComponent';

const structure = [
  { parent : "Antartica"},
  { parent : "Asia",
    children: [
      { parent: "Singapore" },
      { 
        parent: "China",
        children: [
          { parent: "Beijing"},
          { parent: "Shanghai" }
        ]
      }
    ]
  },
  { 
    parent : "Europe",
    children: [
      { 
        parent: "UK",
        children: [
          { parent: "London"},
          { parent: "Birmigham" },
          { parent: "Southampton"}
        ]
      },
      { 
        parent: "France",
        children: [
          { parent: "Paris"},
          { parent: "Lyon" }
        ]
      },
      { parent: "Vatican" },
      { parent: "Monaco"}
    ]
  },
  { 
    parent : "North America",
    children: [
      { 
        parent: "USA",
        children: [
          { parent: "New York"},
          { parent: "Miami" },
          { parent: "Chicago"}
        ]
      },
      { 
        parent: "Canada",
        children: [
          { parent: "Toronto"},
          { parent: "Ottawa" }
        ]
      },
    ]
  }
]

function App() {
  return (
    <div>
      ----------Component composition-----------
      <Pizza>
        <VegetableTopping vegetable="Bell pepper"/>
        <PepperoniTopping pepperoni="Hot"/>
        <CheeseTopping cheese="Quataro Formmaggio"/>
        <Base />
      </Pizza>
      ------------Partially applied component-------
      <HolidaysGreetingCard recipient="Pais" />
      <XMasGreetingCard recipient="Smiths" />
      ------------Recursive component------------
      <RecursiveComponent structure={structure}/>
    </div>
  );
}

export default App;
