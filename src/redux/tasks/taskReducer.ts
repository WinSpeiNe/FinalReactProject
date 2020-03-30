import {ADD_TASK} from "./taskTypes";
import data from '../../mockData/mock.json';

export interface TaskState {
    TaskList: object[]
}

interface actionI {
    type: string,
    payload: {}
}

const initialState: TaskState = {
    TaskList: data.tasks
};

const taskReducer = (state: TaskState = initialState, action: actionI) => {
    switch (action.type) {
        case ADD_TASK:
            const tempList = state.TaskList;
            tempList.push(action.payload);
            return {
                ...state,
                TaskList: tempList
            };
        default:
            return state
    }
};

export default taskReducer;