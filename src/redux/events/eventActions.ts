import {ADD_EVENT, REMOVE_EVENT} from "./eventTypes";

export const addEvent = (event: {}) => {
    return {
        type: ADD_EVENT,
        payload: event
    }
};

export const removeEvent = (id: string) => {
    return {
        type: REMOVE_EVENT,
        payload: {
            id:id
        }
    }
};