import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'initial',
        },
    },
    textFieldFill: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        height: '40px',
    },
}));

export default styles;
