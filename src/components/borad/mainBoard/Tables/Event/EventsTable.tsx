import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {eventMiniStore, TaskEventState} from "../../../../MiniStore";
import {Table, TableBody, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {EventRow} from "./Row/EventsRow";
import {StyledTableCell} from "../../../../../styles/styles";

export const EventsTable: FC = () => {

    const eventList = useSelector((state: TaskEventState) => eventMiniStore(state).EventList);

    return (
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Color</StyledTableCell>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>From</StyledTableCell>
                        <StyledTableCell>Until</StyledTableCell>
                        <StyledTableCell>Location</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {eventList.map(event => {
                        return <EventRow{...event}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
};