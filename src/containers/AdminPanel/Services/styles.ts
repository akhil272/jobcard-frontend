import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    tableContainer: {
        justifyContent: 'center',
        display: 'flex',
    },
    table: {
        maxWidth: '50rem',
    },
    button: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    dialogBoxTitle: {
        textAlign: 'center',
    },
    dialogBoxCloseBtn: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    dialogActionsStyle: {
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    dialogBoxForm: {
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20,
    },
    dialogBoxButton: {
        marginTop: 20,
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default styles;
