import React, {FC} from "react";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {green, yellow} from '@material-ui/core/colors';

interface ColorInterface {
    color: string
}

export enum EventColors {
    Red = 'Red',
    Blue = 'Blue',
    Yellow = 'Yellow',
    Green = 'Green'
}

export const ColorPicker: FC<ColorInterface> = ({color}) => {
    if (color === EventColors.Red) {
        return (
            <div>
                <Brightness1Icon color={"secondary"}/>
            </div>
        )
    } else if (color === EventColors.Blue) {
        return (
            <div>
                <Brightness1Icon color={"primary"}/>
            </div>
        )
    } else if (color === EventColors.Yellow) {
        return (
            <div>
                <Brightness1Icon style={{color: yellow[500]}}/>
            </div>
        )
    } else if (color === EventColors.Green) {
        return (
            <div>
                <Brightness1Icon style={{color: green[500]}}/>
            </div>
        )
    } else {
        return (
            <div>
                <Brightness1Icon/>
            </div>
        )
    }
};

