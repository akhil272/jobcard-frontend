import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2, 2),
    },
    main: {
        display: 'grid',
        padding: theme.spacing(1, 1, 3),
        width: '50vw',
        [theme.breakpoints.down('xs')]: { width: '100vw' },
        rowGap: '6px',
    },
    vehicleDetails: {
        display: 'grid',
        padding: theme.spacing(0, 0, 2),
    },
    contactDetails: {
        display: 'grid',
        padding: theme.spacing(0, 0, 2),
    },
    serviceDetails: {
        display: 'grid',
        padding: theme.spacing(0, 0, 2),
    },

    ctn: {
        height: '700px',
        backgroundColor: 'white',
    },

    service: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: { flexDirection: 'column', alignItems: 'initial' },
    },
    serviceList: {
        padding: theme.spacing(2, 2, 2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        margin: '10px',
        justifyContent: 'flex-start',
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    button: {
        padding: theme.spacing(2, 2, 2),
        display: 'grid',
        justifyContent: 'center',
    },
    pickUpSection: {
        display: 'grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'column',
        alignItems: 'center',
    },
    dialog: {
        width: '100vw',
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '40px',
    },
    jobHistoryRoot: {
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
    },
    jobHistorySummary: {
        rowGap: '10px',
        width: '300px',
        padding: '10px',
    },
    jobHistoryDialog: {
        width: '100vw',
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '40px',
    },
}));

export default useStyles;
