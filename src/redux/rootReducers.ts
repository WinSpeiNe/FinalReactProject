// This file includes all the reducers of the project
import {combineReducers} from "redux";
import eventReducer from "./events/eventReducer";
import taskReducer from "./tasks/taskReducer";
import buttonReducer from "./buttons/buttonsReducer";

const rootReducer = combineReducers({
    event: eventReducer,
    task: taskReducer,
    buttons:buttonReducer
});

export default rootReducer;