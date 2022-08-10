import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    // Generate Bill
    gbroot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight: '10rem',
        paddingLeft: '10rem',
        backgroundColor: '#F9F9F9',
        width: '100vw',
    },
    gbbillto: {
        display: 'flex',
        width: '100%',
        padding: '2rem 0rem ',
    },
    gbtable: {
        width: '100%',
    },
    gbnotes: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '1rem 0rem ',
    },
    gbtotal: {
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '2rem',
    },
    gbsubtotal: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    gbpayment: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    gbUserFirstName: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
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

export default useStyles;
