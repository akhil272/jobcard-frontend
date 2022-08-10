import Button from '@material-ui/core/Button';
// import { useEffect, useState } from 'react';

// import calculateTimer from './CalculateTimer';

interface StopwatchProps {
    // timeInSeconds: number;
    startedAt: string;
    onStart: () => void;
    onPause: () => void;
    onDone: () => void;
    paused?: boolean;
}

const StopWatch = ({
    // timeInSeconds,
    startedAt,
    onStart,
    onPause,
    onDone,
    paused = true,
}: StopwatchProps) => {
    // const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
    // useEffect(() => {
    //     const timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    //     setTimerArray(timeArray);
    // }, [timeInSeconds]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <p>{timerArray[0]}:</p>
            <p>{timerArray[1]}:</p>
            <p>{timerArray[2]}</p> */}

            {new Date(startedAt).toLocaleTimeString(navigator.language, {
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit',
            })}
            <Button onClick={() => (paused ? onStart() : onPause())}>
                {paused ? 'Resume' : 'Pause'}
            </Button>
            <Button onClick={onDone}>Done</Button>
        </div>
    );
};

export default StopWatch;
