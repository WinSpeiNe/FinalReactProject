import {ADD_EVENT} from "./eventTypes";
import data from '../../mockData/mock.json';

export interface EventState {
    EventList: object[]
}

interface actionI {
    type: string,
    payload: {}
}

const initialState: EventState = {
    EventList: data.events
};

const eventReducer = (state: EventState = initialState, action: actionI) => {
    switch (action.type) {
        case ADD_EVENT:
            const tempList = state.EventList;
            tempList.push(action.payload);
            return {
                ...state,
                EventList: tempList
            };
        default:
            return state
    }
};

export default eventReducer;