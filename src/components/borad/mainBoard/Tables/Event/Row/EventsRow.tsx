import React, {FC} from "react";
import {TableCell, TableRow} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import {Actions} from "../../../Actions";
import {EventInterface} from "../EventsInterface";
import {ColorPicker} from "../Color/ColorPicker";

export const EventRow: FC<EventInterface> = ({id, title, description, beginningTime, location, color, endingTime, notificationTime}) => {
    return (
        <TableRow key={id}>
            <TableCell>
                <ColorPicker color={color}/>
            </TableCell>
            <TableCell>
                {title}
            </TableCell>
            <TableCell>
                {new Date(beginningTime).toLocaleString()}
            </TableCell>
            <TableCell>
                {new Date(endingTime).toLocaleString()}
            </TableCell>
            <TableCell>
                {location ? location :  <RemoveIcon/>}
            </TableCell>
            <Actions id={id} title={title}/>
        </TableRow>
    )
};