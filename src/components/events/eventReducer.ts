import {addEvent} from "./eventActions";
import {ADD_EVENT} from "./eventTypes";

export interface EventState {
    EventList: []
}

const initialState: EventState = {
    EventList: []
};

interface actionI {
    type: string,
    payload:{}
}

const eventReducer = (state: EventState = initialState, action: actionI) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                EventList: []// TODO: learn how to add new object to the array
            };
        default:
            return state
    }
};

export default eventReducer;