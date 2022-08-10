import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    formControl: {
        display: 'grid',
        gridAutoColumns: '1fr',
        gridAutoFlow: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: { flexDirection: 'column', alignItems: 'initial' },
    },
}));

export default styles;
