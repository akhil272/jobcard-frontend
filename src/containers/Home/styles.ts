import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    page: {
        width: '100%',
        minHeight: '100vh',
        padding: 20,
        background: 'linear-gradient(bottom, #f77062, #fe5196)',
    },
    header: {
        fontSize: '80px',
        color: '#fff',
        lineHeight: '1.2',
        textTransform: 'uppercase',
    },
    comingSoon: {
        fontSize: '60px',
        color: '#fff',
        lineHeight: '1.2',
        textTransform: 'uppercase',
    },
    underConstruction: {
        fontSize: '24px',
        color: '#fff',
        lineHeight: '1.5',
    },
    footer: {
        fontSize: '14px',
        color: '#fff',
        lineHeight: '1.5',
    },
}));

export default styles;
