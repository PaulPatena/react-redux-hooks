import './App.css';
import {useSelector, useDispatch} from 'react-redux';  // new hook to access store redux7
import {increment, decrement, signIn, signOut} from './actions';  // no need to add index.js file

function App() {
  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch();

  return (
    <div className="mainArea">
      <h2>Using redux-hooks!</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>

      <p>Logged In? {isLoggedIn ? 'yes' : 'no'}</p>
      <button onClick={() => dispatch(signIn())} disabled={isLoggedIn}>Sign In</button>
      <button onClick={() => dispatch(signOut())} disabled={!isLoggedIn}>Sign Out</button>
    </div>
  );
}

export default App;
