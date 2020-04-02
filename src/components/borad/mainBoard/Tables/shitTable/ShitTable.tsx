import React, {FC, Fragment} from "react";
import {useSelector} from "react-redux";
import {eventMiniStore, TaskEventState} from "../../../../MiniStore";
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {StyledTableCell} from "../../../../../styles/styles";

const eventList = useSelector((state: TaskEventState) => eventMiniStore(state).EventList);

export const ShitTable: FC = () => {

    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Type</StyledTableCell>
                        <StyledTableCell>Priority</StyledTableCell>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell>Estimated Time</StyledTableCell>
                        <StyledTableCell>Other</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
            </Table>
        </TableContainer>

    )
};