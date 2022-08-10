import { history } from '@Layouts/helpers/history';
import fetchAsync, { ApiPayload, ApiReturnType } from '@Store/api';
import { API_END_POINTS, API_METHODS } from '@Store/api/constants';
import storage from '@Utils/storage';

const failureResponse: ApiReturnType = {
    success: false,
    status: 401,
    message: 'Unauthorized',
    data: null,
};

const refreshSession = async (payload: ApiPayload): Promise<ApiReturnType> => {
    const { AUTH, REFRESH } = API_END_POINTS;
    const accessToken = storage().getAccessToken();
    const refreshToken = storage().getRefreshToken();
    if (!accessToken || !refreshToken) {
        storage().clear();
        history.push('/login');
        return failureResponse;
    }
    const API_URL = `${process.env.REACT_APP_BASE_URL}${AUTH}${REFRESH}`;
    const refreshTokenPayload = {
        method: API_METHODS.POST,
        body: JSON.stringify({
            refreshToken,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await fetch(API_URL, refreshTokenPayload);
        const responseJson = await response.json();
        if (responseJson?.data?.accessToken) {
            storage().setAccessToken(responseJson?.data?.accessToken);
            storage().setRefreshToken(responseJson?.data?.refreshToken);
            history.replace('/');
            const apiArgs = {
                ...payload,
                retried: true,
            };
            return await fetchAsync(apiArgs);
        } else {
            storage().clear();
            history.push('/login');
            return failureResponse;
        }
    } catch (err) {
        storage().clear();
        history.push('/login');
        return failureResponse;
    }
};

export default refreshSession;
