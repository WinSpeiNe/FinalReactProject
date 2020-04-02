import React, {FC} from 'react';
import {TaskInterface} from "../TasksInterface";
import {Divider, TableCell, TableRow} from "@material-ui/core";
import {Actions} from "../../../Actions";
import {PriorityColors} from "../PrioriryColors/PriorityColors";

export const TaskRow: FC<TaskInterface> = ({id, title, description, priority, status, estimatedTime, timeSpent, untilDate}) => {
    return (<TableRow key={id}>
            <TableCell align={'center'}>
               <PriorityColors priority={priority}/>
            </TableCell>
            <TableCell>
                {priority}
            </TableCell>
            <TableCell>
                {title}
            </TableCell>
            <TableCell>
                {status}
            </TableCell>
            <TableCell align={'center'}>
                {estimatedTime}
            </TableCell>
            <TableCell>
                {timeSpent ?
                    <div>
                        Time Spent :{timeSpent}
                        <Divider/>
                    </div> : ''}
                {untilDate ?
                    <div>
                        Until Date :{new Date(untilDate).toLocaleString()}
                        <Divider/>
                    </div> : ''}
            </TableCell>
            <Actions id={id} title={title}/>
        </TableRow>
    )
};