import React, {FC} from 'react';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import {green} from '@material-ui/core/colors';

interface PriorityInterface {
    priority: string
}

export enum Priority {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export const PriorityColors: FC<PriorityInterface> = ({priority}) => {
    switch (priority) {
        case Priority.High:
            return (<AssignmentLateIcon color={"secondary"}/>);
        case Priority.Medium:
            return (<AssignmentLateIcon/>);
        default:
            return (<AssignmentLateIcon style={{color: green[500]}}/>);
    }
};