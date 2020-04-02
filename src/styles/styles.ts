import {makeStyles} from '@material-ui/core/styles';
import {TableCell, withStyles} from "@material-ui/core";

const drawerWidth = 270;
export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        maxWidth: `calc(100% - ${240}px)`
    },
    appBar: {
        width: `calc(100% - ${240}px)`,
        marginRight: 240
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export const StyledTableCell = withStyles(theme => ({
    head: {
        background: '#3f51b5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);