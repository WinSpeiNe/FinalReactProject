import React, {FC} from "react";
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {eventMiniStore} from "../../../../MiniStore";
import {taskMiniStore} from "../../../../MiniStore";
import {TaskEventState} from "../../../../MiniStore";
import {useSelector} from "react-redux";
import {StyledTableCell} from "../../../../../styles/styles";
import {TodayRow} from "./Row/TodayRow";

export const TodayTable: FC = () => {

    const eventList = useSelector((state: TaskEventState) => eventMiniStore(state).EventList);
    const taskList = useSelector((state: TaskEventState) => taskMiniStore(state).TaskList);
    const data: object[] = [];

    eventList.forEach(event => data.push(event));
    taskList.forEach(task => data.push(task));

    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Type</StyledTableCell>
                        <StyledTableCell>Priority</StyledTableCell>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Other</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item => {
                        return <TodayRow{...item}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

