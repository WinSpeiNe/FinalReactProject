import {SHOW_TODAY, SHOW_TASKS, SHOW_EVENTS} from "./buttonsTypes";

export interface ButtonsState {
    isToday: boolean,
    isTasks: boolean,
    isEvents: boolean
}

const initialState: ButtonsState = {
    isToday: true,
    isTasks: false,
    isEvents: false
};

interface actionI {
    type: string
}

const buttonReducer = (state: ButtonsState = initialState, action: actionI) => {
    switch (action.type) {
        case SHOW_TODAY:
            return {
                isToday: true,
                isTasks: false,
                isEvents: false
            };

        case SHOW_TASKS:
            return {
                isTasks: true,
                isEvents: false,
                isToday: false
            };

        case SHOW_EVENTS:
            return {
                isEvents: true,
                isTasks: false,
                isToday: false
            };
        default:
            return state
    }
};

export default buttonReducer;