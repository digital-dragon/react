import logo from './logo.svg';
import './App.css';
import Base from './Base';
import { colorTheBase } from './colorTheBase';
import { extendTheBase } from './ExtendTheBase';

function App() {
  const BlueBase = colorTheBase(Base, "lightblue");
  const GreenBase = colorTheBase(Base, "lightgreen");
  const ExtendedBase = extendTheBase(Base);

  return (
    
    <div className="App">
      <p style={{background: "lightyellow"}}>Welcome to Higher Order Components!!!</p>
      <Base type="base" color="yellow"></Base>
      <BlueBase />
      <GreenBase />
      <ExtendedBase />
    </div>
  );
}

export default App;
