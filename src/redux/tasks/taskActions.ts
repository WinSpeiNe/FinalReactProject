import {ADD_TASK, REMOVE_TASK} from "./taskTypes";

export const addTask = (task: {}) => {
    return {
        type: ADD_TASK,
        payload: task
    }
};

export const removeTask = (id: string) => {
    return {
        type: REMOVE_TASK,
        payload: {
            id:id
        }
    }
};