import adminPanelReducer, { initialState as adminPanelState } from '@Store/adminPanel/reducer';
import authReducer, { initialState as authState } from '@Store/auth/reducer';
import jobCardsReducer, { initialState as jobCardsState } from '@Store/jobCards/reducer';
import usersReducer, { initialState as usersState } from '@Store/users/reducer';
import { combineReducers } from 'redux';

export const initialState = {
    auth: authState,
    users: usersState,
    jobCards: jobCardsState,
    adminPanel: adminPanelState,
};

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    jobCards: jobCardsReducer,
    adminPanel: adminPanelReducer,
});
