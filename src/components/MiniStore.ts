// TODO: import the eventState and taskState from the reducers
import {TaskState} from "../redux/tasks/taskReducer";
import {EventState} from "../redux/events/eventReducer";

export interface TaskEventState {
    task: TaskState,
    event: EventState
}

export const taskMiniStore = (state: TaskEventState) => state.task;
export const eventMiniStore = (state: TaskEventState) => state.event;