import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    background: {
        display: 'flex',
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    lineChartSection: {
        width: '80%',
    },
    title: {
        fontWeight: 'normal',
        fontSize: '1.5rem',
    },
    mainValue: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    subtitle: {
        fontWeight: 'normal',
        fontSize: '.8rem',
    },
    rightSection: {
        paddingRight: '.5rem',
    },
    leftSection: {
        paddingLeft: '.5rem',
        paddingRight: '.5rem',
    },
    infoCard: {
        width: '20%',
    },
    infoCardMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '.1rem solid gray',
        margin: '.2rem 0rem',
    },
    infoCardTitle: {
        fontWeight: 'normal',
        fontSize: '1rem',
    },
    infoCardData: {
        fontWeight: 'bold',
        fontSize: '2.5rem',
    },
}));

export default styles;
