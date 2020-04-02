import React, {FC} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "../../../styles/styles";
import {TodayTable} from "./Tables/Today/TodayTable";
import {EventsTable} from "./Tables/Event/EventsTable";
import {TasksTable} from "./Tables/Task/TasksTable";
import {useSelector} from "react-redux";
import {buttonsMiniStore, TodayTasksEventsState} from "../../MiniStore";

export const MainBoard: FC = () => {
    const classes = useStyles();
    const buttons = useSelector((state: TodayTasksEventsState) => buttonsMiniStore(state));
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" noWrap>
                        Blue Calender
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph>
                    <input/>//TODO: add search
                    {buttons.isToday ? <TodayTable/> : null}
                    {buttons.isTasks? <TasksTable/> : null}
                    {buttons.isEvents? <EventsTable/> : null}
                </Typography>
            </main>
        </div>
    )
};