import theme from '@Components/theme';
import AppRoutes from '@Layouts/AppRoutes';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import store from '@Store/index';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={null}>
                <AppRoutes />
            </Suspense>
        </ThemeProvider>
    </Provider>
);

export default App;
