import React, {FC} from "react";
import {Table} from "@material-ui/core";
import {eventMiniStore} from "../../../MiniStore";
import {taskMiniStore} from "../../../MiniStore";
import {TaskEventState} from "../../../MiniStore";
import {useSelector} from "react-redux";

interface myState {

}

export const TodayTable: FC = () => {

    const eventList = useSelector((state: TaskEventState) => eventMiniStore(state).EventList);
    const taskList = useSelector((state: TaskEventState) => taskMiniStore(state).TaskList);
    const data: object[] = [];

    eventList.forEach(event => data.push(event));
    taskList.forEach(task => data.push(task));

    return (
        <div>
            TODO: add table of Event and Tasks for today
        </div>
    )
};

