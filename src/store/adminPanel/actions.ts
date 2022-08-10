import fetchAsync from '@Store/api';
import { API_END_POINTS, API_METHODS } from '@Store/api/constants';

import {
    ADMIN_PANEL_BRANCHES_CREATE_FAIL,
    ADMIN_PANEL_BRANCHES_CREATE_INIT,
    ADMIN_PANEL_BRANCHES_CREATE_SUCCESS,
    ADMIN_PANEL_BRANCHES_FETCH_FAIL,
    ADMIN_PANEL_BRANCHES_FETCH_INIT,
    ADMIN_PANEL_BRANCHES_FETCH_SUCCESS,
    ADMIN_PANEL_CATEGORIES_FETCH_FAIL,
    ADMIN_PANEL_CATEGORIES_FETCH_INIT,
    ADMIN_PANEL_CATEGORIES_FETCH_SUCCESS,
    ADMIN_PANEL_CATEGORY_CREATE_FAIL,
    ADMIN_PANEL_CATEGORY_CREATE_INIT,
    ADMIN_PANEL_CATEGORY_CREATE_SUCCESS,
    ADMIN_PANEL_CITIES_CREATE_FAIL,
    ADMIN_PANEL_CITIES_CREATE_INIT,
    ADMIN_PANEL_CITIES_CREATE_SUCCESS,
    ADMIN_PANEL_CITIES_FETCH_FAIL,
    ADMIN_PANEL_CITIES_FETCH_INIT,
    ADMIN_PANEL_CITIES_FETCH_SUCCESS,
    ADMIN_PANEL_COUNTRIES_CREATE_FAIL,
    ADMIN_PANEL_COUNTRIES_CREATE_INIT,
    ADMIN_PANEL_COUNTRIES_CREATE_SUCCESS,
    ADMIN_PANEL_COUNTRIES_FETCH_FAIL,
    ADMIN_PANEL_COUNTRIES_FETCH_INIT,
    ADMIN_PANEL_COUNTRIES_FETCH_SUCCESS,
    ADMIN_PANEL_OVERVIEW_FETCH_FAIL,
    ADMIN_PANEL_OVERVIEW_FETCH_INIT,
    ADMIN_PANEL_OVERVIEW_FETCH_SUCCESS,
    ADMIN_PANEL_SUB_CATEGORIES_FETCH_FAIL,
    ADMIN_PANEL_SUB_CATEGORIES_FETCH_INIT,
    ADMIN_PANEL_SUB_CATEGORIES_FETCH_SUCCESS,
    ADMIN_PANEL_SUB_CATEGORY_CREATE_FAIL,
    ADMIN_PANEL_SUB_CATEGORY_CREATE_INIT,
    ADMIN_PANEL_SUB_CATEGORY_CREATE_SUCCESS,
    ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_FAIL,
    ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_INIT,
    ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_SUCCESS,
    ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_FAIL,
    ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_INIT,
    ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_SUCCESS,
    ADMIN_PANEL_VEHICLE_BRAND_CREATE_FAIL,
    ADMIN_PANEL_VEHICLE_BRAND_CREATE_INIT,
    ADMIN_PANEL_VEHICLE_BRAND_CREATE_SUCCESS,
    ADMIN_PANEL_VEHICLE_BRANDS_FETCH_FAIL,
    ADMIN_PANEL_VEHICLE_BRANDS_FETCH_INIT,
    ADMIN_PANEL_VEHICLE_BRANDS_FETCH_SUCCESS,
    ADMIN_PANEL_VEHICLE_MODEL_CREATE_FAIL,
    ADMIN_PANEL_VEHICLE_MODEL_CREATE_INIT,
    ADMIN_PANEL_VEHICLE_MODEL_CREATE_SUCCESS,
    ADMIN_PANEL_VEHICLE_MODELS_FETCH_FAIL,
    ADMIN_PANEL_VEHICLE_MODELS_FETCH_INIT,
    ADMIN_PANEL_VEHICLE_MODELS_FETCH_SUCCESS,
    ADMIN_PANEL_VEHICLE_TYPE_CREATE_FAIL,
    ADMIN_PANEL_VEHICLE_TYPE_CREATE_INIT,
    ADMIN_PANEL_VEHICLE_TYPE_CREATE_SUCCESS,
    ADMIN_PANEL_VEHICLE_TYPES_FETCH_FAIL,
    ADMIN_PANEL_VEHICLE_TYPES_FETCH_INIT,
    ADMIN_PANEL_VEHICLE_TYPES_FETCH_SUCCESS,
    createBranchPayload,
    createCategoryPayload,
    createCityPayload,
    createCountryPayload,
    createSubCategoryPayload,
    createSubCategoryPricesPayload,
    createVehicleBrandPayload,
    createVehicleModelPayload,
    createVehicleTypePayload,
    getCategoriesPayload,
    getCitiesPayload,
    getCountriesPayload,
    getOverviewPayload,
    getSubCategoriesPayload,
    getVehicleBrandsPayload,
    getVehicleTypesPayload,
} from './types';

export const createSubCategoryPrice = async (data: createSubCategoryPricesPayload) => {
    const { SUB_CATEGORY_PRICES } = API_END_POINTS;

    const url = `${SUB_CATEGORY_PRICES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_INIT,
            successType: ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getSubCategoryPrices = async () => {
    const { SUB_CATEGORY_PRICES, ALL } = API_END_POINTS;
    const pathname = `${SUB_CATEGORY_PRICES}${ALL}`;
    const url = `${pathname}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_INIT,
            successType: ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const createSubCategory = async (data: createSubCategoryPayload) => {
    const { SUB_CATEGORIES } = API_END_POINTS;

    const url = `${SUB_CATEGORIES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_SUB_CATEGORY_CREATE_INIT,
            successType: ADMIN_PANEL_SUB_CATEGORY_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_SUB_CATEGORY_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getSubCategories = async (payload: getSubCategoriesPayload) => {
    const { SUB_CATEGORIES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${SUB_CATEGORIES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_SUB_CATEGORIES_FETCH_INIT,
            successType: ADMIN_PANEL_SUB_CATEGORIES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_SUB_CATEGORIES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const createCategory = async (data: createCategoryPayload) => {
    const { CATEGORIES } = API_END_POINTS;

    const url = `${CATEGORIES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_CATEGORY_CREATE_INIT,
            successType: ADMIN_PANEL_CATEGORY_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_CATEGORY_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getCategories = async (payload: getCategoriesPayload) => {
    const { CATEGORIES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${CATEGORIES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_CATEGORIES_FETCH_INIT,
            successType: ADMIN_PANEL_CATEGORIES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_CATEGORIES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getVehicleModels = async () => {
    const { VEHICLE_MODELS } = API_END_POINTS;
    const url = `${VEHICLE_MODELS}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_VEHICLE_MODELS_FETCH_INIT,
            successType: ADMIN_PANEL_VEHICLE_MODELS_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_VEHICLE_MODELS_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

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
            requestType: ADMIN_PANEL_VEHICLE_TYPES_FETCH_INIT,
            successType: ADMIN_PANEL_VEHICLE_TYPES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_VEHICLE_TYPES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getVehicleBrands = async (payload: getVehicleBrandsPayload) => {
    const { VEHICLE_BRAND, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${VEHICLE_BRAND}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_VEHICLE_BRANDS_FETCH_INIT,
            successType: ADMIN_PANEL_VEHICLE_BRANDS_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_VEHICLE_BRANDS_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getOverviews = async (payload: getOverviewPayload) => {
    const { JOB_CARDS, OVERVIEW } = API_END_POINTS;
    const { startDate, endDate } = payload;
    const pathname = `${JOB_CARDS}${OVERVIEW}`;

    const url = `${pathname}?startDate=${startDate}&endDate=${endDate}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_OVERVIEW_FETCH_INIT,
            successType: ADMIN_PANEL_OVERVIEW_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_OVERVIEW_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getCities = async (payload: getCitiesPayload) => {
    const { CITIES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${CITIES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_CITIES_FETCH_INIT,
            successType: ADMIN_PANEL_CITIES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_CITIES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const getCountries = async (payload: getCountriesPayload) => {
    const { COUNTRIES, SEARCH } = API_END_POINTS;
    const { search = '' } = payload;
    const pathname = `${COUNTRIES}`;
    const urlParams = new URLSearchParams();
    if (search) {
        urlParams.append(SEARCH, search);
    }
    const url = `${pathname}?${urlParams.toString()}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_COUNTRIES_FETCH_INIT,
            successType: ADMIN_PANEL_COUNTRIES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_COUNTRIES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const getAllBranches = async () => {
    const { BRANCHES } = API_END_POINTS;
    const url = `${BRANCHES}`;
    const apiArgs = {
        method: API_METHODS.GET,
        url,
        TYPES: {
            requestType: ADMIN_PANEL_BRANCHES_FETCH_INIT,
            successType: ADMIN_PANEL_BRANCHES_FETCH_SUCCESS,
            failureType: ADMIN_PANEL_BRANCHES_FETCH_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const createVehicleModel = async (data: createVehicleModelPayload) => {
    const { VEHICLE_MODELS } = API_END_POINTS;

    const url = `${VEHICLE_MODELS}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_VEHICLE_MODEL_CREATE_INIT,
            successType: ADMIN_PANEL_VEHICLE_MODEL_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_VEHICLE_MODEL_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};

export const createVehicleType = async (data: createVehicleTypePayload) => {
    const { VEHICLE_TYPES } = API_END_POINTS;

    const url = `${VEHICLE_TYPES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_VEHICLE_TYPE_CREATE_INIT,
            successType: ADMIN_PANEL_VEHICLE_TYPE_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_VEHICLE_TYPE_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const createVehicleBrand = async (data: createVehicleBrandPayload) => {
    const { VEHICLE_BRAND } = API_END_POINTS;

    const url = `${VEHICLE_BRAND}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_VEHICLE_BRAND_CREATE_INIT,
            successType: ADMIN_PANEL_VEHICLE_BRAND_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_VEHICLE_BRAND_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const createBranch = async (data: createBranchPayload) => {
    const { BRANCHES } = API_END_POINTS;

    const url = `${BRANCHES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_BRANCHES_CREATE_INIT,
            successType: ADMIN_PANEL_BRANCHES_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_BRANCHES_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const createCity = async (data: createCityPayload) => {
    const { CITIES } = API_END_POINTS;

    const url = `${CITIES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_CITIES_CREATE_INIT,
            successType: ADMIN_PANEL_CITIES_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_CITIES_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
export const createCountry = async (data: createCountryPayload) => {
    const { COUNTRIES } = API_END_POINTS;

    const url = `${COUNTRIES}`;

    const apiArgs = {
        method: API_METHODS.POST,
        url,
        data,
        TYPES: {
            requestType: ADMIN_PANEL_COUNTRIES_CREATE_INIT,
            successType: ADMIN_PANEL_COUNTRIES_CREATE_SUCCESS,
            failureType: ADMIN_PANEL_COUNTRIES_CREATE_FAIL,
        },
    };
    return fetchAsync(apiArgs);
};
