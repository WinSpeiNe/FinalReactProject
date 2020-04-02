import React, {FC} from 'react';
import {taskMiniStore} from "../../../../MiniStore";
import {TaskEventState} from "../../../../MiniStore";
import {useSelector} from "react-redux";
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {TaskRow} from "./Row/TaskRow";
import {StyledTableCell} from "../../../../../styles/styles";

export const TasksTable: FC = () => {

    const taskList = useSelector((state: TaskEventState) => taskMiniStore(state).TaskList);

    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Type</StyledTableCell>
                        <StyledTableCell>Priority</StyledTableCell>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Statue</StyledTableCell>
                        <StyledTableCell>Estimated Time</StyledTableCell>
                        <StyledTableCell>Other</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {taskList.map(task => {
                        return <TaskRow{...task}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

