import React, {FC} from 'react';
import {Clock} from "./Clock/clock";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {useStyles} from "../../../styles/styles";
import {ButtonsList} from "./Buttons/ButtonsList";
// TODO: add Blue torch logo

export const SideForm: FC = () => {
    const classes = useStyles();
    const logo = require('./logo/blueCaledner.jpeg');

    return (
        <form>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="right"
            >
                <Divider/>
                <Clock/>
                <img alt={'logo'} src={logo}/>
                <Divider/>
                <ButtonsList/>
            </Drawer>
        </form>
    )
};
