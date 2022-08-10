import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCFDFE',
    },
    container: {
        boxShadow: '5px 5px 20px',
        backgroundColor: '#F4F8FB',
        justifyContent: 'center',
        alignItems: 'center',
        width: '900px',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '50px',
            paddingBottom: '50px',
            boxShadow: '0px',
            width: '100%',
            borderRadius: '0px',
        },
    },
    listItem: {
        display: 'flex',
        gap: '20px',
        [theme.breakpoints.down('xs')]: { flexDirection: 'column' },
    },
}));

export default useStyles;
