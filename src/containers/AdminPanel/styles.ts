import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    background: {
        minHeight: '100vh',
        padding: 20,
        backgroundColor: '#efefefef//',
    },
    headSection: {
        display: 'flex',
        margin: '1rem 0rem',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    timeSection: {
        display: 'flex',
        position: 'relative',
        gap: '0rem .5rem',
    },
    dateBody: {
        display: 'flex',
        padding: '1rem 2rem',
        gap: '0rem 1rem',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 2px 8px',
    },
    dateText: {
        fontWeight: 'bold',
    },
    timeItem: {
        backgroundColor: 'white',
        padding: '.5rem 1rem',
        margin: '0rem .05rem',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 4px 14px',
    },
    areaChartSection: {
        width: '80vw',
        display: 'flex',
        justifyContent: 'space-between',
    },
    lineChartSeaction: {
        margin: '3rem 0rem',
    },
    dateRangePicker: {
        position: 'absolute',
        right: '0rem',
    },
}));

export default styles;
