import { Login, LoginActionTypes, SEND_OTP_FAIL, SEND_OTP_INIT, SEND_OTP_SUCCESS } from './types';

export const initialState: Login = {
    loading: false,
};

const reducer = (state = initialState, action: LoginActionTypes) => {
    switch (action.type) {
        case SEND_OTP_INIT:
            return Object.assign({}, state, { loading: true });
        case SEND_OTP_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case SEND_OTP_FAIL:
            return Object.assign({}, state, { loading: false });
        default:
            return state;
    }
};

export default reducer;
