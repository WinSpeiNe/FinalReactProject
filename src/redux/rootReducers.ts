// This file includes all the reducers of the project
import {combineReducers} from "redux";
import eventReducer from "./events/eventReducer";
import taskReducer from "./tasks/taskReducer";

const rootReducer = combineReducers({
    event: eventReducer,
    task: taskReducer
});

export default rootReducer;