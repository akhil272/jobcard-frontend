import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    endAdornmentText: {
        fontSize: 11,
        opacity: 0.5,
    },
    formControl: {
        // display: 'flex',
        // flexDirection: 'row',
        display: 'grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'column',
        alignItems: 'center',
        margin: '.3rem 0rem .3rem 0rem',

        [theme.breakpoints.down('xs')]: { flexDirection: 'column', alignItems: 'initial' },
    },
    textFieldFill: {
        backgroundColor: '#FFFFFF',
    },
}));

export default styles;
