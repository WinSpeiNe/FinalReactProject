// TODO: import the eventState and taskState from the reducers


export interface TaskEventState {
    task: '', // TODO: put the taskState
    event: '' // TODO: put the eventState
}

export const taskMiniStore = (state: TaskEventState) => state.task;
export const eventMiniStore = (state: TaskEventState) => state.event;