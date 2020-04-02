// TODO: import the eventState and taskState from the reducers
import {TaskState} from "../redux/tasks/taskReducer";
import {EventState} from "../redux/events/eventReducer";
import {ButtonsState} from "../redux/buttons/buttonsReducer";

export interface TaskEventState {
    task: TaskState,
    event: EventState,
}

export interface TodayTasksEventsState {
    buttons:ButtonsState
}

export const taskMiniStore = (state: TaskEventState) => state.task;
export const eventMiniStore = (state: TaskEventState) => state.event;
export const buttonsMiniStore = (state: TodayTasksEventsState) => state.buttons;
