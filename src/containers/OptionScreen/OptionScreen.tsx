import createJobImage from '@Assets/img/OptionScreen/CreateNewJobArt.svg';
import estimateJobImage from '@Assets/img/OptionScreen/GetEstimate.jpg';
import signOutImage from '@Assets/img/OptionScreen/SignOut.jpg';
import viewJobImage from '@Assets/img/OptionScreen/ViewJobs.jpg';
import storage from '@Utils/storage';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

import MenuCard from './MenuCard';
import styles from './styles';

export default function OptionScreen() {
    const classes = styles();
    const history = useHistory();
    const onClickCreateNewJob = () => {
        history.push('/jobs/create');
    };
    const onClickEstimateNewJob = () => {
        history.push('/estimatejob');
    };
    const onClickViewJobs = () => {
        history.push('/jobs');
    };
    const onClickSignOut = useCallback(() => {
        storage().clear();
        history.push('/login');
    }, [history]);
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.listItem}>
                    <MenuCard
                        menuTitle="Create New Job"
                        menuImage={createJobImage}
                        onClick={onClickCreateNewJob}
                    />

                    <MenuCard
                        menuTitle="Estimate New Job"
                        menuImage={estimateJobImage}
                        onClick={onClickEstimateNewJob}
                    />
                </div>
                <div className={classes.listItem}>
                    <MenuCard
                        menuTitle="View Job"
                        menuImage={viewJobImage}
                        onClick={onClickViewJobs}
                    />

                    <MenuCard
                        menuTitle="Sign Out"
                        menuImage={signOutImage}
                        onClick={onClickSignOut}
                    />
                </div>
            </div>
        </div>
    );
}
