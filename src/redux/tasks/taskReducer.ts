import {ADD_TASK, REMOVE_TASK} from "./taskTypes";
import data from '../../mockData/mock.json';
import {TaskInterface} from "../../components/borad/mainBoard/Tables/Task/TasksInterface";

export interface TaskState {
    TaskList: TaskInterface[]
}

interface actionI {
    type: string,
    payload: {
        id: string,
        task: TaskInterface
    }
}

const initialState: TaskState = {
    TaskList: data.tasks
};

const taskReducer = (state: TaskState = initialState, action: actionI) => {
    switch (action.type) {
        case ADD_TASK:
            const tempList: TaskInterface[] = state.TaskList;
            tempList.push(action.payload.task);
            return {
                TaskList: tempList
            };
        case REMOVE_TASK:
            return {
                TaskList: state.TaskList.filter(task => task.id !== action.payload.id)
            };
        default:
            return state
    }
};

export default taskReducer;