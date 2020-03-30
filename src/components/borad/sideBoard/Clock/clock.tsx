import React, {useState, useEffect, FC} from 'react';

export const Clock: FC = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const tick = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(tick);
        }
    });
    return (
        <h1>
            {date.toLocaleString()}
        </h1>
    );
};