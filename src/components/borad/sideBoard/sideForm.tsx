import React, {FC} from 'react';
import {Clock} from "./Clock/clock";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "../../../styles/styles";
import EventIcon from '@material-ui/icons/Event';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
// TODO: add Blue torch logo

export const SideForm: FC = () => {
    const classes = useStyles();
    const logo = require('./logo/blueCaledner.jpeg');

    return (
        <form>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <Clock/>
                <img alt={'logo'} src={logo}/>
                <Divider/>
                <List>
                    <ListItem style={{cursor: "pointer"}}>
                        <ListItemIcon>
                            <ListAltIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Today Tasks & Events'}/>
                    </ListItem>

                    <ListItem style={{cursor: "pointer"}}>
                        <ListItemIcon>
                            <AssignmentLateIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Tasks List'}/>
                    </ListItem>

                    <ListItem style={{cursor: "pointer"}}>
                        <ListItemIcon>
                            <EventIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Events List'}/>
                    </ListItem>
                </List>
            </Drawer>
        </form>
    )
};
