import { ApiReturnType } from '@Store/api';
import { RouteComponentProps } from '@Store/common/types';

export const SEND_OTP_INIT = 'SEND_OTP:INIT';
export const SEND_OTP_SUCCESS = 'SEND_OTP:SUCCESS';
export const SEND_OTP_FAIL = 'SEND_OTP:FAIL';
export const LOGIN_INIT = 'LOGIN:INIT';
export const LOGIN_SUCCESS = 'LOGIN:SUCCESS';
export const LOGIN_FAIL = 'LOGIN:FAIL';

export type Login = {
    loading: boolean;
};

export type LoginFormData = {
    phoneNumber: string;
    otp: string;
};

export type sendOtpPayload = {
    phoneNumber: string;
};

export type loginPayload = {
    phoneNumber: string;
    otp: string;
};

export type loginApiResponse = {
    accessToken: string;
    refreshToken: string;
};

export type LoginDispatchProps = {
    sendOtp: (payload: sendOtpPayload) => Promise<ApiReturnType<{}>>;
    login: (payload: loginPayload) => Promise<ApiReturnType<loginApiResponse>>;
};

export type LoginProps = RouteComponentProps & LoginDispatchProps;

type SendOtpInitAction = {
    type: typeof SEND_OTP_INIT;
};

type SendOtpSuccessAction = {
    type: typeof SEND_OTP_SUCCESS;
};

type SendOtpFailAction = {
    type: typeof SEND_OTP_FAIL;
};

type LoginInitAction = {
    type: typeof LOGIN_INIT;
};

type LoginSuccessAction = {
    type: typeof LOGIN_SUCCESS;
};

type LoginFailAction = {
    type: typeof LOGIN_FAIL;
};

export type LoginActionTypes =
    | SendOtpInitAction
    | SendOtpSuccessAction
    | SendOtpFailAction
    | LoginInitAction
    | LoginSuccessAction
    | LoginFailAction;
