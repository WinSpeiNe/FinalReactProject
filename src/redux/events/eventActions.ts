import {ADD_EVENT} from "./eventTypes";

export const addEvent = (event: {}) => {
    return {
        type: ADD_EVENT,
        payload: event
    }
};