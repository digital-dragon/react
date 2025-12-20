import logo from './logo.svg';
import './App.css';
import Modal from './Modal'

function TestChild1 () {
  return <h1>Test Child1</h1>
}

function App() {
  return (
    <div className="App">
              <Modal>
                <TestChild1/>
              </Modal>
    </div>
  );
}

export default App;
