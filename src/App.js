import './App.css';
import {useSelector, useDispatch} from 'react-redux';  // new hook to access store redux7
import {increment, decrement} from './actions';  // no need to add index.js file


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Using redux-hooks!</h2>
      <p>counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      <button onClick={() => dispatch(increment(5))}>+5</button>

      <p>Logged Info: {isLogged ? 'yes' : 'no'}</p>
    </div>
  );
}

export default App;
