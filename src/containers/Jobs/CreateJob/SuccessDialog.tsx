import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { useHistory } from 'react-router';

import styles from './styles';

const SuccessDialog = () => {
    const [open, setOpen] = useState(true);
    const history = useHistory();
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
                    Job Card Created
                </DialogTitle>

                <DialogActions>
                    <div className={classes.dialog}>
                        <Button
                            style={{ width: '250px', padding: '10px' }}
                            onClick={() => setOpen(!open)}
                            variant="contained"
                            color="primary">
                            UPDATE JOB CARD
                        </Button>
                        <Button
                            onClick={() => history.push('/createjob')}
                            style={{ width: '250px', padding: '10px' }}
                            variant="contained"
                            color="primary">
                            CREATE A NEW JOB CARD
                        </Button>
                        <Button
                            onClick={() => history.push('/estimatejob')}
                            style={{ width: '250px', padding: '10px' }}
                            variant="contained"
                            color="primary">
                            GET ESTIMATE FOR JOB CARD
                        </Button>
                        <Button
                            onClick={() => history.push('/viewjobs')}
                            style={{ width: '250px', padding: '10px' }}
                            variant="contained"
                            color="primary">
                            VIEW JOB CARDS
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SuccessDialog;
