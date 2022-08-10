import { ApiReturnType } from '@Store/api';

export const GET_USER_INIT = 'GET:USER:INIT';
export const GET_USER_SUCCESS = 'GET:USER:SUCCESS';
export const GET_USER_FAIL = 'GET:USER:FAIL';

type UserPayload = {
    addressLine1: string | null;
    addressLine2: string | null;
    cityId: number | null;
    createdAt: string;
    createdById: number | null;
    email: string;
    employeeId: number | null;
    firstName: string;
    id: number;
    lastName: string;
    middleName: string | null;
    password: string;
    phoneNumber: string;
    pinNumber: number | null;
    role: string;
    salt: string;
    updatedAt: string;
};

export type User = UserPayload;

export type Users = {
    loading: boolean;
    user: User | null;
};

type GetUserInitAction = {
    type: typeof GET_USER_INIT;
};

type GetUserSuccessAction = {
    type: typeof GET_USER_SUCCESS;
    payload: ApiReturnType<UserPayload>;
};

type GetUserFailAction = {
    type: typeof GET_USER_FAIL;
};

export type UsersActionTypes = GetUserInitAction | GetUserSuccessAction | GetUserFailAction;
