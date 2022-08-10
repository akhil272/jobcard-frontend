import fetchAsync from '@Store/api';
import { API_END_POINTS, API_METHODS } from '@Store/api/constants';

import {
    LOGIN_FAIL,
    LOGIN_INIT,
    LOGIN_SUCCESS,
    loginPayload,
    SEND_OTP_FAIL,
    SEND_OTP_INIT,
    SEND_OTP_SUCCESS,
    sendOtpPayload,
} from './types';

export const sendOtp = async (data: sendOtpPayload) => {
    const { AUTH, OTP, GENERATE } = API_END_POINTS;
    const url = `${AUTH}${OTP}${GENERATE}`;
    const apiArgs = {
        method: API_METHODS.POST,
        data,
        url,
        authRequired: false,
        TYPES: {
            requestType: SEND_OTP_INIT,
            successType: SEND_OTP_SUCCESS,
            failureType: SEND_OTP_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const login = async (data: loginPayload) => {
    const { AUTH, OTP, VALIDATE } = API_END_POINTS;
    const url = `${AUTH}${OTP}${VALIDATE}`;
    const apiArgs = {
        method: API_METHODS.POST,
        data,
        url,
        authRequired: false,
        TYPES: {
            requestType: LOGIN_INIT,
            successType: LOGIN_SUCCESS,
            failureType: LOGIN_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
