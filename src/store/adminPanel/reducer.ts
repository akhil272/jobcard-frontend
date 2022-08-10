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
    AdminPanel,
    AdminPanelActionTypes,
} from './types';

export const initialState: AdminPanel = {
    loading: false,
    cities: [],
    branches: [],
    countries: [],
    vehicleBrands: [],
    vehicleTypes: [],
    vehicleModels: [],
    overview: {
        pending: {
            1: { jobCards: [], branch: '' },
        },
        inProgress: { 1: { jobCards: [], branch: '' } },
        paid: { 1: { jobCards: [], branch: '' } },
        partiallyPaid: { 1: { jobCards: [], branch: '' } },
        totalRevenue: 0,
    },
    categories: [],
    subCategories: [],
    subCategoryPrices: [],
};

const reducer = (state = initialState, action: AdminPanelActionTypes) => {
    switch (action.type) {
        case ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                subCategoryPrices: action.payload?.data,
            };
        case ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_SUB_CATEGORIES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_SUB_CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                subCategories: action.payload?.data?.map((subCategory) => ({
                    name: subCategory.name,
                    id: subCategory.id,
                    categoryId: subCategory.categoryId,
                    category: subCategory.category,
                })),
            };
        case ADMIN_PANEL_SUB_CATEGORIES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_CATEGORIES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_CATEGORIES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload?.data?.map((category) => ({
                    label: category.name,
                    value: category.id,
                    id: category.id,
                    name: category.name,
                })),
            };
        case ADMIN_PANEL_CATEGORIES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_VEHICLE_TYPES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_VEHICLE_TYPES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicleTypes: action.payload?.data?.map((type) => ({
                    label: type.name,
                    value: type.id,
                })),
            };
        case ADMIN_PANEL_VEHICLE_TYPES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_VEHICLE_BRANDS_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_VEHICLE_BRANDS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicleBrands: action.payload?.data?.map((brand) => ({
                    label: brand.name,
                    value: brand.id,
                })),
            };
        case ADMIN_PANEL_VEHICLE_BRANDS_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_CITIES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_CITIES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload?.data?.map((city) => ({
                    label: city.name,
                    value: city.id,
                    countryId: city.countryId,
                    country: city,
                })),
            };
        case ADMIN_PANEL_CITIES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_COUNTRIES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case ADMIN_PANEL_COUNTRIES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                countries: action.payload?.data?.map((country) => ({
                    label: country.name,
                    value: country.id,
                    currencyCode: country.currencyCode,
                    currency: country.currency,
                    currencySymbol: country.currencySymbol,
                })),
            };
        case ADMIN_PANEL_COUNTRIES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ADMIN_PANEL_VEHICLE_MODELS_FETCH_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_VEHICLE_MODELS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                vehicleModels: action.payload?.data,
            });
        case ADMIN_PANEL_VEHICLE_MODELS_FETCH_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_SUB_CATEGORY_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_SUB_CATEGORY_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_SUB_CATEGORY_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_CATEGORY_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_CATEGORY_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_CATEGORY_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_VEHICLE_MODEL_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_VEHICLE_MODEL_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_VEHICLE_MODEL_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_OVERVIEW_FETCH_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_OVERVIEW_FETCH_SUCCESS:
            return Object.assign({}, state, { loading: false, overview: action.payload?.data });
        case ADMIN_PANEL_OVERVIEW_FETCH_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_BRANCHES_FETCH_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_BRANCHES_FETCH_SUCCESS:
            return Object.assign({}, state, { loading: false, branches: action.payload?.data });
        case ADMIN_PANEL_BRANCHES_FETCH_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_VEHICLE_TYPE_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_VEHICLE_TYPE_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_VEHICLE_TYPE_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_VEHICLE_BRAND_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_VEHICLE_BRAND_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_VEHICLE_BRAND_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_CITIES_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_CITIES_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_CITIES_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_COUNTRIES_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_COUNTRIES_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_COUNTRIES_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_BRANCHES_CREATE_INIT:
            return Object.assign({}, state, { loading: true });
        case ADMIN_PANEL_BRANCHES_CREATE_SUCCESS:
            return Object.assign({}, state, { loading: false });
        case ADMIN_PANEL_BRANCHES_CREATE_FAIL:
            return Object.assign({}, state, { loading: false });

        default:
            return state;
    }
};

export default reducer;
