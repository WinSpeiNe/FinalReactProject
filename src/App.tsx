import React, {FC} from 'react';
import './App.css';
import {BoardContainer} from "./components/borad/boardContainer";

const App: FC = () => {
    return (
        <div className="App">
            <BoardContainer/>
        </div>
    );
};

export default App;