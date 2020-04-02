import {BasicInterface} from "../../basicInterface";

export enum EventColors {
    Red = 'Red',
    Blue = 'Blue',
    Yellow = 'Yellow',
    Green = 'Green'
}

// export interface EventInterface extends BasicInterface {
//     beginningTime: Date,
//     endingTime: Date,
//     color: EventColors,
//     invitedGuests?: string[],
//     location?: string,
//     notificationTime?: Date
// }

export interface EventInterface extends BasicInterface {
    beginningTime: string,
    endingTime: string,
    color: string,
    invitedGuests?: string[],
    location?: string,
    notificationTime?: string,
}