import logo from './logo.svg';
import './App.css';
import SplitScreen from './SplitScreen';

const Left = () => <h4>Left</h4>
const Right = () => <h4>Right</h4>

function App() {
  return (
    <div>
      <header style={{ background: "lightgray", fontSize: "20px"}}>
        Welcome to React Layout Pattern!
        <SplitScreen left={Left} right={Right}/>
      </header>
    </div>
  );
}

export default App;
