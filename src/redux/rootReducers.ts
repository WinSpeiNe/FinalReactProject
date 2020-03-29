// This file includes all the reducers of the project
import {combineReducers} from "redux";
import eventReducer from "../components/events/eventReducer";
import taskReducer from "../components/tasks/taskReducer";

const rootReducer = combineReducers({
    event: eventReducer,
    task: taskReducer
});

export default rootReducer;