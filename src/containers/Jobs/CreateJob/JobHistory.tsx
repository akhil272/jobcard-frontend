import { Grid, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

import styles from './styles';

const JobHistory = () => {
    const [open, setOpen] = useState(true);
    const classes = styles();

    return (
        <div>
            <Dialog
                maxWidth="lg"
                fullWidth
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle style={{ textAlign: 'center' }} id="alert-dialog-title">
                    <Typography variant="h6">Job History</Typography>
                </DialogTitle>
                <Grid container className={classes.jobHistoryRoot}>
                    <Grid container>
                        <Grid item container>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Vehicle Number</Typography>

                                <Typography variant="subtitle1">Vehicle Model</Typography>

                                <Typography variant="subtitle1">Buld: </Typography>
                                <Typography variant="subtitle1">Type</Typography>
                                <Typography variant="subtitle1">Rims</Typography>
                                <Typography variant="subtitle1">Owner</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">KL</Typography>
                                <Typography variant="subtitle1">Honda City</Typography>
                                <Typography variant="subtitle1">2020 New</Typography>
                                <Typography variant="subtitle1">Sedan</Typography>
                                <Typography variant="subtitle1">12</Typography>
                                <Typography variant="subtitle1">Aravind Suresh</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Paper style={{ backgroundColor: '#F4F8FB', marginBottom: '20px' }}>
                        <Grid item container>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="h6">Date</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="h6">24/12/2020</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Odermeter</Typography>
                                <Typography variant="body2">25046</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Service Type</Typography>
                                <Typography variant="body2">Premium Wash</Typography>
                                <Typography variant="body2">Tyre Change</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Notes</Typography>
                                <Typography variant="body2">Hey Dude</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper style={{ backgroundColor: '#F4F8FB' }}>
                        <Grid item container>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="h6">Date</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="h6">24/12/2020</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Odermeter</Typography>
                                <Typography variant="body2">25046</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Service Type</Typography>
                                <Typography variant="body2">Premium Wash</Typography>
                                <Typography variant="body2">Tyre Change</Typography>
                                <Typography variant="body2">Wheel Alignment</Typography>
                                <Typography variant="body2">Wheel Balancing</Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                md={2}
                                xs={6}
                                className={classes.jobHistorySummary}>
                                <Typography variant="subtitle1">Notes</Typography>
                                <Typography variant="body2">Hey Dude</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <DialogActions>
                    <div className={classes.jobHistoryDialog}>
                        <Button
                            style={{ width: '250px', padding: '10px' }}
                            onClick={() => setOpen(!open)}
                            variant="contained"
                            color="primary">
                            Back to Job Card
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default JobHistory;
