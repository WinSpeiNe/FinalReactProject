import React, {FC} from 'react';
import {taskMiniStore} from "../../../MiniStore";
import {TaskEventState} from "../../../MiniStore";
import {connect, useSelector} from "react-redux";

interface myState {
    TaskList: object[]
}

const TasksTable: FC<myState> = ({TaskList}) => {

    const taskList = useSelector((state: TaskEventState) => taskMiniStore(state).TaskList);
    const data: object[] = [];

    taskList.forEach(task => data.push(task));

    return (
        <div>
            Ok
        </div>
    )
};

const mapStateToProps = (state: TaskEventState) => {
    return {
        TaskList: taskMiniStore(state).TaskList
    }
};
export default connect(mapStateToProps)(TasksTable);





