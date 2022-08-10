import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    background: {
        backgroundColor: 'white',
        padding: '1.5rem',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    main: {
        display: 'grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'column',
        alignItems: 'center',
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
        paddingRight: '2rem',
    },
    leftSection: {
        paddingLeft: '.5rem',
        paddingRight: '1.5rem',
    },
}));

export default styles;
