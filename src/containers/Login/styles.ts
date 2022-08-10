import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContents: 'center',

        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#FCFDFE',
    },
    main: {
        boxShadow: '5px 5px 20px',
    },
    ctn: {
        height: '700px',
        backgroundColor: 'white',
    },
    paper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    mobileLogo: {
        margin: '50px',
        height: '16%',
        backgroundRepeat: 'no-repeat',
    },
}));

export default useStyles;
