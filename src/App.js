import './App.css';
import {useSelector, useDispatch} from 'react-redux';  // new hook to access store redux7
import {increment, decrement, signIn, signOut} from './actions';  // no need to add index.js file

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="mainArea">
      <h2>Using redux-hooks!</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>

      <p>Logged In? {isLogged ? 'yes' : 'no'}</p>
      <button onClick={() => dispatch(signIn())} disabled={isLogged}>Sign In</button>
      <button onClick={() => dispatch(signOut())} disabled={!isLogged}>Sign Out</button>
    </div>
  );
}

export default App;
