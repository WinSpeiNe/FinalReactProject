import React, {FC} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "../../../styles/styles";

export const MainBoard: FC = () => {
    const classes = useStyles();

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
                </Typography>
                <Typography paragraph>
                    <table/>//TODO: add the list of the tasks and the events
                </Typography>
            </main>
        </div>
    )
};