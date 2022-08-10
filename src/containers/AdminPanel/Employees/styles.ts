import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    background: {
        minHeight: '100vh',
        padding: 20,
        backgroundColor: '#efefef',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 2px 8px',
        backgroundColor: 'white',
        padding: '2rem 2rem',
        gap: '1rem 0rem',
        [theme.breakpoints.down('xs')]: { width: '100vw', padding: '1rem 1rem', gap: '.5rem 0rem' },
    },
}));

export default styles;
