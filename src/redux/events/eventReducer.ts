import {ADD_EVENT, REMOVE_EVENT} from "./eventTypes";
import data from '../../mockData/mock.json';
import {EventInterface} from "../../components/borad/mainBoard/Tables/Event/EventsInterface";

export interface EventState {
    EventList: EventInterface[]
}

interface actionI {
    type: string,
    payload: {
        event:{},
        id:string
    }
}

const initialState: EventState = {
    EventList: data.events
};

const eventReducer = (state: EventState = initialState, action: actionI) => {
    switch (action.type) {
        case ADD_EVENT:
            const tempList = state.EventList;
            return {
                ...state,
                EventList: tempList
            };
        case REMOVE_EVENT:
            return {
                EventList: state.EventList.filter(event => event.id !== action.payload.id)
            };
        default:
            return state
    }
};

export default eventReducer;