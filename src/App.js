
import { Increment, Reset } from './Actions/counterActions';
import { Decrement } from './Actions/counterActions';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form'
import { Login, Logout } from './Actions/authAction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.counter);
  const dispatch = useDispatch()


  const changeStatus = () => {
    if (auth.status) {
      dispatch(Logout());
    } else {
      dispatch(Login());
    }

  }


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Form />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </Router>
        <Form />
        {/* <label> {counter} </label>
      <br />
      <button onClick={() => dispatch (Increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch (Decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch (Reset())}>Reset</button> */}
      </header>
    </div>
  );
}


export default App;
