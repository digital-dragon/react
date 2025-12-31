import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './state/store';
import { decrement, increment, incrementAsync, incrementByAmount } from './state/counter/counterSlice';

function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h3>React - Redux App</h3>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment by 10
        </button>
      </div>
    </>
  )
}

export default App
