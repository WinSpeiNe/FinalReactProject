import {ADD_EVENT} from "../events/eventTypes";

export const addTask = (task: {}) => {
    return {
        type: ADD_EVENT,
        payload: task
    }
};