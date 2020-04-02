import React, {FC} from "react";
import {Divider, TableCell, TableRow} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import {Actions} from "../../../Actions";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import EventIcon from "@material-ui/icons/Event";

interface TaskAndEventInterface {
    id?: string,
    priority?: string,
    title?: string,
    status?: string,
    estimatedTime?: string,
    timeSpent?: string,
    beginningTime?: string,
    endingTime?: string,
    location?: string
    untilDate?: string
}

export const TodayRow: FC<TaskAndEventInterface> =
    ({
         id, priority, title, status, estimatedTime,
         timeSpent, location, beginningTime, endingTime, untilDate
     }) => {
        return (
            <TableRow key={id}>
                <TableCell>
                    {priority ? <AssignmentLateIcon/> : <EventIcon/>}
                </TableCell>
                <TableCell>
                    {priority ? priority : <RemoveIcon/>}
                </TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>
                    {status ?
                        <div>
                            Status : {status}
                            <Divider/>
                        </div> : ''}

                    {estimatedTime ?
                        <div>
                            Estimated Time : {estimatedTime}
                            <Divider/>
                        </div> : ''}

                    {untilDate ?
                        <div>
                            Until Date : {new Date(untilDate).toLocaleString()}
                            <Divider/>
                        </div> : ''}

                    {timeSpent ?
                        <div>
                            Time Spent : {timeSpent}
                            <Divider/>
                        </div> : ''}

                    {beginningTime ?
                        <div>
                            From : {new Date(beginningTime).toLocaleString()}
                            <Divider/>
                        </div> : ''}

                    {endingTime ?
                        <div>
                            Until :{new Date(endingTime).toLocaleString()}
                            <Divider/>
                        </div> : ''}

                    {location ?
                        <div>
                            Location :{location}
                            <Divider/>
                        </div> : ''}
                </TableCell>
                <Actions id={id||''} title={title||''}/>
            </TableRow>
        )
    };