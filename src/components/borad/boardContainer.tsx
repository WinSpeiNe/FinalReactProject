import React, {FC} from 'react';
import {SideForm} from "./sideBoard/sideForm";
import {MainBoard} from "./mainBoard/MainBoard";

export const BoardContainer: FC = () => {
    return (
        <form>
            <MainBoard/>
            <SideForm/>
        </form>
    )
};