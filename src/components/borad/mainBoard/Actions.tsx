import React,{FC} from 'react';
import {TableCell} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EditIcon from "@material-ui/icons/Edit";
import {DeleteForm} from "../../deleteForm/DeleteForm";
import {handleActions} from "../../deleteForm/DeleteForm";

export const Actions: FC<handleActions> = ({id,title}) => {
    return(
        <TableCell align={'center'}>
            <IconButton aria-label="file">
                <InsertDriveFileIcon/>
            </IconButton>
            <IconButton aria-label="edit">
                <EditIcon/>
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteForm id={id} title={title}/>
            </IconButton>
        </TableCell>
    )
};