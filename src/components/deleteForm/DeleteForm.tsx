import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from "@material-ui/icons/Delete";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {removeEvent, removeTask} from "../../redux";

export interface DeleteInterface {
    title: string,
    id: string
}

export interface handleActions {
    id: string,
    title: string
}

export const DeleteForm: FC<handleActions> = ({id, title}) => {

    const dispatch: Dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        if (parseInt(id) < 1) {
            dispatch(removeEvent(id))
        } else {
            dispatch(removeTask(id))
        }
    };

    return (
        <div>
            <DeleteIcon onClick={handleClickOpen}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Item"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete: {title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No, Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Yes, Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
