import { createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
// import "fontsource-poppins";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1D84EF',
        },
        secondary: {
            main: '#EF1D1D',
        },

        error: {
            main: red.A400,
        },
        background: {
            default: '#FCFDFE',
        },
        divider: '#9DA8C5',
        text: {
            primary: '#646F8A',
            secondary: '#8B92A6',
            disabled: '#9DA8C5',
        },
        action: {
            active: '#1D84EF',
            hover: '#EF1D1D',
        },
    },

    typography: {
        fontFamily: ['Poppins'].join(','),
    },
    overrides: {
        MuiFormGroup: {
            root: {
                flexDirection: 'row',
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1024,
            xl: 1200,
        },
    },
});

export default theme;
