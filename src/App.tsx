import React, {FC} from 'react';
import './App.css';
import {BoardContainer} from "./components/borad/boardContainer";
import store from "./redux/store";
import {Provider} from "react-redux";

const App: FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <BoardContainer/>
            </div>
        </Provider>
    );
};

export default App;