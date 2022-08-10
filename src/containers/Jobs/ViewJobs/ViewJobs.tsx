/* eslint-disable @typescript-eslint/no-explicit-any */
import JobItemCard from '@Components/JobItemCard';
import { AppBar, Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import { SelectOption } from '@Store/common/types';
import { JobCardItem, ViewJobsProps } from '@Store/jobCards/types';
import { JobCardItemStatus } from '@Utils/enums';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

// eslint-disable-next-line no-use-before-define
import styles from './styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

// interface jobCardItemId {
//     timeInSeconds: number;
//     intervalId: number;
//     paused: boolean;
// }

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const a11yProps = (index: number) => {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
};

const ViewJobs = ({
    assignees,
    getAssignees,
    getJobCardItems,
    jobCardItems,
    updateJobCardItem,
    resumeJobCardItem,
    pauseJobCardItem,
    currentUser,
}: ViewJobsProps) => {
    const classes = styles();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [employeeSelected, setEmployeeSelected] = useState<string | SelectOption | null>(null);
    const [jobCardItem, setJobCardItem] = useState<JobCardItem | null>(null);
    // const [jobCardTimer, setJobCardTimer] = useState<jobCardTimer>({});
    const history = useHistory();

    // stop watch

    // const onStart = useCallback(
    //     ({ jobCardItemId }: any) => {
    //         // eslint-disable-next-line @typescript-eslint/no-explicit-any

    //         const interval: any = setInterval(() => {
    //             setJobCardTimer((previousState: any) => ({
    //                 ...previousState,
    //                 [jobCardItemId]: {
    //                     ...previousState[jobCardItemId],
    //                     timeInSeconds: (previousState[jobCardItemId]?.timeInSeconds || 0) + 1,
    //                     paused: false,
    //                 },
    //             }));
    //         }, 1000);
    //         if (jobCardTimer[jobCardItemId]?.intervalId) {
    //             clearInterval(jobCardTimer[jobCardItemId]?.intervalId);
    //         }
    //         setJobCardTimer((previousState: any) => ({
    //             ...previousState,
    //             [jobCardItemId]: {
    //                 ...previousState[jobCardItemId],
    //                 intervalId: interval,
    //             },
    //         }));
    //     },
    //     [jobCardTimer],
    // );

    // useEffect(() => {
    //     const initialJobCardTimer: jobCardTimer = {};
    //     jobCardItems.forEach((item) => {
    //         if (item.status === JobCardItemStatus.IN_PROGRESS) {
    //             const paused = !!item.elapsedTime && !item.resumedAt;
    //             initialJobCardTimer[item.id] = {
    //                 timeInSeconds: Math.round(
    //                     (Math.abs(item.elapsedTime) +
    //                         (!paused && (item.resumedAt || item.startedAt)
    //                             ? new Date().getTime() -
    //                               new Date(item.resumedAt ?? item.startedAt ?? '').getTime()
    //                             : 0)) /
    //                         1000,
    //                 ),
    //                 paused,
    //             };
    //             if (!paused) {
    //                 onStart({ jobCardItemId: item.id });
    //             }
    //         }
    //     });
    //     setJobCardTimer(initialJobCardTimer);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [jobCardItems]);

    // stopwatch ends

    const handleGenerateBill = () => {
        history.push('/generatebill');
    };
    useEffect(() => {
        getAssignees({ search: '' });
    }, [getAssignees]);

    useEffect(() => {
        getJobCardItems();
    }, [getJobCardItems]);

    // tab panel
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    // dialog box
    const handleDisagree = () => {
        setOpen(false);
    };
    const handleAgree = async () => {
        setOpen(false);
        if (jobCardItem && (employeeSelected as SelectOption).value) {
            const response = await updateJobCardItem({
                id: jobCardItem?.id,
                status: JobCardItemStatus.IN_PROGRESS,
                employeeId: Number((employeeSelected as SelectOption).value),
            });
            if (response.success) {
                // onStart({ jobCardItemId: jobCardItem.id });
            }
        }
    };
    // dialog box end

    // pending jobs employee assignment
    const handleOnChange = (selectedEmployee: string | SelectOption, item: JobCardItem) => {
        setEmployeeSelected(selectedEmployee);
        setJobCardItem(item);
        console.log(selectedEmployee);
        setOpen(true);
    };

    const inQues = () =>
        jobCardItems
            .filter((j) => j.status === JobCardItemStatus.PENDING)
            .map((item) => (
                <div key={item.id}>
                    <JobItemCard
                        registrationNumber={item.registrationNumber}
                        subCategories={item.subCategory}
                        assignedEmployee={item.assignedEmployee?.firstName}
                        status="PENDING"
                        assignees={assignees}
                        item={item}
                        handleOnChange={handleOnChange}
                    />
                </div>
            ));

    const workInProgress = () =>
        jobCardItems
            .filter((j) => j.status === JobCardItemStatus.IN_PROGRESS)
            .map((item) => (
                <div key={item.id}>
                    <JobItemCard
                        registrationNumber={item.registrationNumber}
                        subCategories={item.subCategory}
                        status="IN_PROGRESS"
                        currentUser={currentUser}
                        item={item}
                        pauseJobCardItem={pauseJobCardItem}
                        resumeJobCardItem={resumeJobCardItem}
                        updateJobCardItem={updateJobCardItem}
                    />
                    <div className={classes.addSupervisor}>
                        {/* task : need to show elapsed time */}
                        <Typography>{item.assignedEmployee?.firstName} </Typography>
                    </div>
                </div>
            ));
    const jobsCompleted = () =>
        jobCardItems
            .filter((j) => j.status === JobCardItemStatus.COMPLETED)
            .reduce((acc, cur) => {
                const jobCard = acc.find((j) => j.jobCardId === cur.jobCardId);
                if (jobCard) {
                    if (!jobCard.subCategory.find((s) => s.id === cur.subCategory[0].id)) {
                        jobCard.subCategory.push(cur.subCategory[0]);
                    }
                } else {
                    acc.push(cur);
                }
                return acc;
            }, [] as JobCardItem[])
            .map((item) => (
                <div key={item.id}>
                    <JobItemCard
                        registrationNumber={item.registrationNumber}
                        subCategories={item.subCategory}
                        assignedEmployee={item.assignedEmployee?.firstName}
                        status="COMPLETED"
                        item={item}
                        handleOnClick={handleGenerateBill}
                    />
                </div>
            ));

    return (
        <>
            <div className={classes.desktopWrap}>
                <Grid container className={classes.root}>
                    <Grid item className={classes.container}>
                        <Typography component="h4" variant="h4">
                            <QueueOutlinedIcon /> IN QUE
                        </Typography>
                        {inQues()}
                    </Grid>
                    <Grid item className={classes.container}>
                        <Typography component="h4" variant="h4">
                            <CachedOutlinedIcon /> WORK IN PROGRESS
                        </Typography>
                        {workInProgress()}
                    </Grid>
                    <Grid item className={classes.container}>
                        <Typography component="h4" variant="h4">
                            <CheckCircleOutlinedIcon /> COMPLETED
                        </Typography>
                        {jobsCompleted()}
                    </Grid>
                </Grid>
            </div>
            <div className={classes.mobileWrap}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example">
                        <Tab label="In Que" /* icon={<QueueOutlinedIcon />} */ {...a11yProps(0)} />
                        <Tab
                            label="Work In Progress"
                            /* icon={<CachedOutlinedIcon />} */
                            {...a11yProps(1)}
                        />
                        <Tab
                            label="Completed"
                            /* icon={<CheckCircleOutlinedIcon />} */
                            {...a11yProps(2)}
                        />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    {inQues()}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {workInProgress()}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {jobsCompleted()}
                </TabPanel>
            </div>
            <Dialog
                open={open}
                onClose={handleDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {`Confirm Job Assignment of ${jobCardItem?.registrationNumber}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please confirm before starting the work.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDisagree} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleAgree} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ViewJobs;
