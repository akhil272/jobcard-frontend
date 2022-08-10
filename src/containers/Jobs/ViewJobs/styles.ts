import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mobileWrap: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    desktopWrap: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    vehicleNumberInQue: {
        fontSize: 20,
        backgroundColor: '#FFF1F4',
        color: '#FB748D',
        display: 'inline-block',
        paddingRight: '5px',
        paddingLeft: '5px',
    },
    vehicleNumberWip: {
        fontSize: 20,
        backgroundColor: '#EFF4FF',
        color: '#3C77FA',
        display: 'inline-block',
        paddingRight: '5px',
        paddingLeft: '5px',
    },
    vehicleNumberCompleted: {
        fontSize: 20,
        backgroundColor: '#EDF8F2',
        color: '#2EAE67',
        display: 'inline-block',
        paddingRight: '5px',
        paddingLeft: '5px',
    },
    card: {
        backgroundColor: '#FFFFF',
        boxShadow: '0px 3px 15px rgba(0,0,0,0.1)',
        marginBottom: '10px',
        paddingBottom: '18px',
        '&:hover': {
            transition: '.6s ease-in-out',
            boxShadow: '0px 20px 15px rgba(0,0,0,0.1)',
        },
    },
    addSupervisor: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '10px',
        marginLeft: '18px',
    },
    serviceListName: {
        marginBottom: 2,
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: theme.spacing(2, 2),
        backgroundColor: '#F9F9F9',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginRight: '50px',
        padding: '20px',
        rowGap: '20px',
        backgroundColor: '#F4F8FB',
        flex: '1',
        borderRadius: '2px',
    },
}));

export default useStyles;
