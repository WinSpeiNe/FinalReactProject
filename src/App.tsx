import React from 'react';
import './App.css';
import {useDispatch, useSelector, connect} from "react-redux";
import {increment} from "./actions";
import {decrement} from "./actions";
import {singIn} from "./actions";

interface stateA {
    counter: number,
    isLogged: boolean
}

function App() {

    const tempCounter = (state: stateA) => state.counter;
    const tempLogged = (state: stateA) => state.isLogged;

    const counter = useSelector(tempCounter);
    const isLogged = useSelector(tempLogged);

    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>📌 Counter: {counter} 📌</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(singIn())}> Log In / Sing Out</button>
            {isLogged && <h3> You Logged In!  </h3>}
        </div>
    );
}

export default App;
