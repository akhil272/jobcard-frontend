import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

export const history = createBrowserHistory();

export default class YourBrowserRouter extends BrowserRouter {
    history;
}
