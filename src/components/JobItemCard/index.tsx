/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Dropdown from '@Components/Dropdown';
import StopWatch from '@Components/StopWatch';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import { JobCardItemStatus } from '@Utils/enums';
import {
    Key,
    ReactChild,
    ReactFragment,
    ReactPortal,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { useHistory } from 'react-router';

import styles from './styles';

interface jobCardTimer {
    elapsedTime: number;
    paused: boolean;
    intervalId?: number;
}

const JobItemCard = ({
    registrationNumber,
    subCategories,
    assignedEmployee,
    status,
    assignees,
    item,
    currentUser,
    pauseJobCardItem,
    resumeJobCardItem,
    updateJobCardItem,
    handleOnChange,
}: any) => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push(`/jobs/${item.jobCardId}/bill/generate`);
    };
    const classes = styles();
    // const [timer, setTimer] = useState<jobCardTimer | null>(null);
    let registerNumberClass = classes.vehicleNumberInQue;
    if (status === 'IN_PROGRESS') {
        registerNumberClass = classes.vehicleNumberWip;
    }
    if (status === 'COMPLETED') {
        registerNumberClass = classes.vehicleNumberCompleted;
    }

    // const onStart = useCallback(() => {
    //     // const intervalId: any = setInterval(() => {
    //     //     setTimer((previousState: any) => ({
    //     //         ...previousState,
    //     //         elapsedTime: (previousState?.elapsedTime || 0) + 1,
    //     //         paused: false,
    //     //     }));
    //     // }, 1000);
    //     // if (timer?.intervalId) {
    //     //     clearInterval(timer.intervalId);
    //     // }
    //     setTimer((previousState: any) => ({
    //         ...previousState,
    //         intervalId,
    //     }));
    // }, []);

    const onPause = async () => {
        const response = await pauseJobCardItem(item.id);
        if (response.success) {
            // clearInterval(timer?.intervalId);
            // setTimer((previousState: any) => ({
            //     elapsedTime: previousState.elapsedTime,
            //     paused: true,
            // }));
        }
    };

    const onResume = async () => {
        const response = await resumeJobCardItem(item.id);
        const eT = response.data?.elapsedTime;
        const rT = response.data?.updatedAt;
        if (response.success) {
            // onStart();
        }
    };

    const onDone = () => {
        if (currentUser) {
            updateJobCardItem({
                id: item.id,
                status: JobCardItemStatus.COMPLETED,
                employeeId: currentUser,
            });
        }
    };

    // useEffect(() => {
    //     let initialTimer = null;
    //     if (item.status === JobCardItemStatus.IN_PROGRESS) {
    //         const paused = !!item.elapsedTime && !item.resumedAt;
    //         initialTimer = {
    //             elapsedTime: Math.round(
    //                 (Math.abs(item.elapsedTime) +
    //                     (!paused && (item.resumedAt || item.startedAt)
    //                         ? new Date().getTime() -
    //                           new Date(item.resumedAt ?? item.startedAt ?? '').getTime()
    //                         : 0)) /
    //                     1000,
    //             ),
    //             paused,
    //         };
    //         console.log({
    //             item,
    //             paused,
    //             'timer.paused': timer?.paused,
    //             'timer.intervalId': timer?.intervalId,
    //         });
    //         if (!paused) {
    //             onStart();
    //         } else if (!timer?.paused) {
    //             clearInterval(timer?.intervalId);
    //             setTimer((previousState: any) => ({
    //                 ...previousState,
    //                 intervalId: undefined,
    //             }));
    //         }
    //     }
    //     setTimer(initialTimer);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [item, onStart]);

    // useEffect(() => () => clearInterval(timer?.intervalId), [timer?.intervalId]);

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={registerNumberClass} gutterBottom>
                    {registrationNumber}
                </Typography>
                {subCategories.map(
                    (subCategory: {
                        id: Key | null | undefined;
                        name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                    }) => (
                        <Typography
                            style={{ paddingLeft: '5px' }}
                            key={subCategory.id}
                            className={classes.serviceListName}
                            color="textSecondary">
                            {subCategory.name}
                        </Typography>
                    ),
                )}
            </CardContent>
            {status === 'PENDING' && (
                <div className={classes.addSupervisor}>
                    <PersonAddOutlinedIcon />
                    <Dropdown
                        label="Supervisor Name"
                        freeSolo
                        placeholder="Enter supervisor name"
                        options={assignees}
                        onChange={(selectedEmployee) => handleOnChange(selectedEmployee, item)}
                    />
                </div>
            )}
            {status === 'IN_PROGRESS' && (
                <div className={classes.addSupervisor}>
                    <TimerOutlinedIcon />
                    <StopWatch
                        // timeInSeconds={timer?.elapsedTime || 0}
                        startedAt={item.startedAt}
                        paused={!!item.elapsedTime && !item.resumedAt}
                        onStart={onResume}
                        onPause={onPause}
                        onDone={onDone}
                    />
                </div>
            )}
            {status === 'COMPLETED' && (
                <div className={classes.addSupervisor}>
                    <DescriptionOutlinedIcon />
                    <Button onClick={() => handleOnClick()} size="large">
                        Generate Bill
                    </Button>

                    <Typography>{assignedEmployee} </Typography>
                </div>
            )}
        </Card>
    );
};

export default JobItemCard;
