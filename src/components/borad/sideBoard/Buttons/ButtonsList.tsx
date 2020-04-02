import React, {FC} from "react";
import {useDispatch} from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import EventIcon from "@material-ui/icons/Event";
import {Dispatch} from "redux";

import {showEvents, showTasks, showToday} from "../../../../redux/buttons/buttonsActions";

export const ButtonsList: FC = () => {

    const dispatch: Dispatch = useDispatch();

    return (<List>
        <ListItem button onClick={()=>dispatch(showToday())}>
            <ListItemIcon>
                <ListAltIcon/>
            </ListItemIcon>
            <ListItemText primary={'Today Tasks & Events'}/>
        </ListItem>

        <ListItem button onClick={()=>dispatch(showTasks())}>
            <ListItemIcon>
                <AssignmentLateIcon/>
            </ListItemIcon>
            <ListItemText primary={'Tasks List'}/>
        </ListItem>

        <ListItem button onClick={()=>dispatch(showEvents())}>
            <ListItemIcon>
                <EventIcon/>
            </ListItemIcon>
            <ListItemText primary={'Events List'}/>
        </ListItem>
    </List>)
};