import {createStore} from 'redux';
import rootReducer from "./rootReducers";

// do this for using redux-devtools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: () => any
    }
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;