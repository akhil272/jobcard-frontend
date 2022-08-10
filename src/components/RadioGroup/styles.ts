import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    formControl: {
        display: 'grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'column',
        alignItems: 'center',
    },
    textFieldFill: {
        display: 'flex',
    },
}));

export default styles;
