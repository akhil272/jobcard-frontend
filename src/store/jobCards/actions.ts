import fetchAsync from '@Store/api';
import { API_END_POINTS, API_METHODS } from '@Store/api/constants';

import {
    AddJobCardItemDiscount,
    AddOtherItems,
    createJobCardPayload,
    getAssigneesPayload,
    getRimSizesPayload,
    getVehicleModelsPayload,
    getVehiclesPayload,
    getVehicleTypesPayload,
    JOB_CARD_CREATE_FAIL,
    JOB_CARD_CREATE_INIT,
    JOB_CARD_CREATE_SUCCESS,
    JOB_CARD_GENERATE_BILL_FAIL,
    JOB_CARD_GENERATE_BILL_INIT,
    JOB_CARD_GENERATE_BILL_SUCCESS,
    JOB_CARD_ITEM_ADD_DISCOUNT_FAIL,
    JOB_CARD_ITEM_ADD_DISCOUNT_INIT,
    JOB_CARD_ITEM_ADD_DISCOUNT_SUCCESS,
    JOB_CARD_ITEM_ADD_OTHER_ITEMS_FAIL,
    JOB_CARD_ITEM_ADD_OTHER_ITEMS_INIT,
    JOB_CARD_ITEM_ADD_OTHER_ITEMS_SUCCESS,
    JOB_CARD_ITEM_PAUSE_FAIL,
    JOB_CARD_ITEM_PAUSE_INIT,
    JOB_CARD_ITEM_PAUSE_SUCCESS,
    JOB_CARD_ITEM_RESUME_FAIL,
    JOB_CARD_ITEM_RESUME_INIT,
    JOB_CARD_ITEM_RESUME_SUCCESS,
    JOB_CARD_ITEM_UPDATE_FAIL,
    JOB_CARD_ITEM_UPDATE_INIT,
    JOB_CARD_ITEM_UPDATE_SUCCESS,
    JOB_CARD_ITEMS_ASSIGNEES_FETCH_FAIL,
    JOB_CARD_ITEMS_ASSIGNEES_FETCH_INIT,
    JOB_CARD_ITEMS_ASSIGNEES_FETCH_SUCCESS,
    JOB_CARD_ITEMS_FETCH_FAIL,
    JOB_CARD_ITEMS_FETCH_INIT,
    JOB_CARD_ITEMS_FETCH_SUCCESS,
    JOB_CARD_PAY_UPDATE_FAIL,
    JOB_CARD_PAY_UPDATE_INIT,
    JOB_CARD_PAY_UPDATE_SUCCESS,
    JOB_CARD_RIM_SIZES_FETCH_FAIL,
    JOB_CARD_RIM_SIZES_FETCH_INIT,
    JOB_CARD_RIM_SIZES_FETCH_SUCCESS,
    JOB_CARD_SERVICES_FETCH_FAIL,
    JOB_CARD_SERVICES_FETCH_INIT,
    JOB_CARD_SERVICES_FETCH_SUCCESS,
    JOB_CARD_VEHICLE_MODELS_FETCH_FAIL,
    JOB_CARD_VEHICLE_MODELS_FETCH_INIT,
    JOB_CARD_VEHICLE_MODELS_FETCH_SUCCESS,
    JOB_CARD_VEHICLE_TYPES_FETCH_FAIL,
    JOB_CARD_VEHICLE_TYPES_FETCH_INIT,
    JOB_CARD_VEHICLE_TYPES_FETCH_SUCCESS,
    JOB_CARD_VEHICLES_FETCH_FAIL,
    JOB_CARD_VEHICLES_FETCH_INIT,
    JOB_CARD_VEHICLES_FETCH_SUCCESS,
    UpdateJobCardAmountPayload,
    UpdateJobCardItemPayload,
} from './types';

export const getVehicleTypes = async (payload: getVehicleTypesPayload) => {
    const { VEHICLE_TYPES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${VEHICLE_TYPES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_VEHICLE_TYPES_FETCH_INIT,
            successType: JOB_CARD_VEHICLE_TYPES_FETCH_SUCCESS,
            failureType: JOB_CARD_VEHICLE_TYPES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getAssignees = async (payload: getAssigneesPayload) => {
    const { EMPLOYEES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${EMPLOYEES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_ITEMS_ASSIGNEES_FETCH_INIT,
            successType: JOB_CARD_ITEMS_ASSIGNEES_FETCH_SUCCESS,
            failureType: JOB_CARD_ITEMS_ASSIGNEES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getVehicleModels = async (payload: getVehicleModelsPayload) => {
    const { VEHICLE_MODELS, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${VEHICLE_MODELS}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_VEHICLE_MODELS_FETCH_INIT,
            successType: JOB_CARD_VEHICLE_MODELS_FETCH_SUCCESS,
            failureType: JOB_CARD_VEHICLE_MODELS_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getRimSizes = async (payload: getRimSizesPayload) => {
    const { RIM_SIZES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${RIM_SIZES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_RIM_SIZES_FETCH_INIT,
            successType: JOB_CARD_RIM_SIZES_FETCH_SUCCESS,
            failureType: JOB_CARD_RIM_SIZES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getServices = async () => {
    const { SUB_CATEGORY_PRICES, ALL } = API_END_POINTS;

    const pathname = `${SUB_CATEGORY_PRICES}${ALL}`;

    const url = `${pathname}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_SERVICES_FETCH_INIT,
            successType: JOB_CARD_SERVICES_FETCH_SUCCESS,
            failureType: JOB_CARD_SERVICES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const createJobCard = async (data: createJobCardPayload) => {
    const { JOB_CARDS } = API_END_POINTS;

    const pathname = JOB_CARDS;

    const url = `${pathname}`;
    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: JOB_CARD_CREATE_INIT,
            successType: JOB_CARD_CREATE_SUCCESS,
            failureType: JOB_CARD_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getVehicles = async (payload: getVehiclesPayload) => {
    const { VEHICLES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${VEHICLES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_VEHICLES_FETCH_INIT,
            successType: JOB_CARD_VEHICLES_FETCH_SUCCESS,
            failureType: JOB_CARD_VEHICLES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getJobCardItems = async () => {
    const { JOB_CARDS, BRANCH, ITEMS } = API_END_POINTS;

    const url = `${JOB_CARDS}${BRANCH}${ITEMS}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,

        TYPES: {
            requestType: JOB_CARD_ITEMS_FETCH_INIT,
            successType: JOB_CARD_ITEMS_FETCH_SUCCESS,
            failureType: JOB_CARD_ITEMS_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const updateJobCardItem = async ({ id, ...data }: UpdateJobCardItemPayload) => {
    const { JOB_CARD_ITEMS, STATUS } = API_END_POINTS;

    const url = `${JOB_CARD_ITEMS}/${id}${STATUS}`;
    const apiArgs = {
        method: API_METHODS.PATCH,
        url,
        data,
        TYPES: {
            requestType: JOB_CARD_ITEM_UPDATE_INIT,
            successType: JOB_CARD_ITEM_UPDATE_SUCCESS,
            failureType: JOB_CARD_ITEM_UPDATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const pauseJobCardItem = async (id: number) => {
    const { JOB_CARD_ITEMS, PAUSE } = API_END_POINTS;

    const url = `${JOB_CARD_ITEMS}/${id}${PAUSE}`;
    const apiArgs = {
        method: API_METHODS.PATCH,
        url,
        TYPES: {
            requestType: JOB_CARD_ITEM_PAUSE_INIT,
            successType: JOB_CARD_ITEM_PAUSE_SUCCESS,
            failureType: JOB_CARD_ITEM_PAUSE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const resumeJobCardItem = async (id: number) => {
    const { JOB_CARD_ITEMS, RESUME } = API_END_POINTS;

    const url = `${JOB_CARD_ITEMS}/${id}${RESUME}`;
    const apiArgs = {
        method: API_METHODS.PATCH,
        url,
        TYPES: {
            requestType: JOB_CARD_ITEM_RESUME_INIT,
            successType: JOB_CARD_ITEM_RESUME_SUCCESS,
            failureType: JOB_CARD_ITEM_RESUME_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const generateBill = async (id: string) => {
    const { JOB_CARDS } = API_END_POINTS;

    const url = `${JOB_CARDS}/${id}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: JOB_CARD_GENERATE_BILL_INIT,
            successType: JOB_CARD_GENERATE_BILL_SUCCESS,
            failureType: JOB_CARD_GENERATE_BILL_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const addOtherItems = async (data: AddOtherItems) => {
    const { ADD_OTHER_ITEMS } = API_END_POINTS;
    const url = `${ADD_OTHER_ITEMS}`;
    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: JOB_CARD_ITEM_ADD_OTHER_ITEMS_INIT,
            successType: JOB_CARD_ITEM_ADD_OTHER_ITEMS_SUCCESS,
            failureType: JOB_CARD_ITEM_ADD_OTHER_ITEMS_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const addJobCardItemDiscount = async (data: AddJobCardItemDiscount) => {
    const { JOB_CARD_DISCOUNTS } = API_END_POINTS;
    const url = `${JOB_CARD_DISCOUNTS}`;
    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: JOB_CARD_ITEM_ADD_DISCOUNT_INIT,
            successType: JOB_CARD_ITEM_ADD_DISCOUNT_SUCCESS,
            failureType: JOB_CARD_ITEM_ADD_DISCOUNT_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const updatePay = async ({ id, ...data }: UpdateJobCardAmountPayload) => {
    const { JOB_CARDS, PAY } = API_END_POINTS;

    const url = `${JOB_CARDS}/${id}${PAY}`;
    const apiArgs = {
        method: API_METHODS.PATCH,
        url,
        data,
        TYPES: {
            requestType: JOB_CARD_PAY_UPDATE_INIT,
            successType: JOB_CARD_PAY_UPDATE_SUCCESS,
            failureType: JOB_CARD_PAY_UPDATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
