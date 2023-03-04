import React, {useEffect, useState} from 'react';
import './Timer.scss';

const Timer = () => {
    const [time, setTime] = useState(21600);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const formattedTime = (time) => time < 10 ? `0${time}` : time;

    useEffect(() => {
        const timer = setInterval(() => {
            if (time >= 0) {
                setHours(Math.floor((time / 60 / 60)))
                setMinutes(Math.floor(time / 60 % 60))
                setSeconds(time % 60)
                setTime(prev => prev - 1)
            }
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [time])

    return (
        <div className={'timer'}>
            <div className={'timer-title'}>
                <span>Auction ends in:</span>
            </div>
            <div className={'timer-body'}>
                <div className={'timer-hours'}>
                    <p>{formattedTime(hours)}:</p>
                    <span>Hours</span>
                </div>
                <div className={'timer-minutes'}>
                    <p>{formattedTime(minutes)}:</p>
                    <span>Minutes</span>
                </div>
                <div className={'timer-seconds'}>
                    <p>{formattedTime(seconds)}</p>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;