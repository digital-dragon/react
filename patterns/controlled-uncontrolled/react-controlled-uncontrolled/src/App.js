import { useState } from 'react';
import './App.css';
import UncontrolledForm from './UnconrtolledForm';
import ControlledForm from './ControlledForm';
import UncontrolledModal from './UncontrolledModal';
import ControlledModal from './ControlledModal';



function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <UncontrolledForm />
      <ControlledForm nm="John Doe" em="johndoe@doe.com"/>
      <div>******Uncontrolled Modal start*****</div>
      <UncontrolledModal>
        <p>Test Child of Uncontrolled Modal</p>
      </UncontrolledModal>
      <div>******Controlled Modal end*****</div>
      <button onClick={() => setShow(true)}>Show Controlled Modal</button>
      <ControlledModal show={show} closeModalFn={() =>setShow(prev => !prev)}>
        <p>Test Child of Controlled Modal</p>
      </ControlledModal>
    </>
  );
}

export default App;
