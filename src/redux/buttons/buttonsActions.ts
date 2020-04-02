import {SHOW_TODAY, SHOW_EVENTS, SHOW_TASKS} from "./buttonsTypes";

export const showToday = () => {
    return {
        type: SHOW_TODAY
    }
};

export const showEvents = () => {
    return {
        type: SHOW_EVENTS
    }
};

export const showTasks = () => {
    return {
        type: SHOW_TASKS
    }
};
