import {BasicInterface} from "../../basicInterface";

export enum Status {
    Open = 'Open',
    InProgress = 'InProgress',
    Done = 'Done'
}

export enum Priority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export interface TaskInterface extends BasicInterface {
    estimatedTime: string,
    status: string,
    priority: string,
    untilDate?: string,
    review?: string,
    timeSpent?: string
}