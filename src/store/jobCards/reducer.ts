import {
    JOB_CARD_GENERATE_BILL_FAIL,
    JOB_CARD_GENERATE_BILL_INIT,
    JOB_CARD_GENERATE_BILL_SUCCESS,
    JOB_CARD_ITEM_UPDATE_STORE_SUCCESS,
    JOB_CARD_ITEMS_ASSIGNEES_FETCH_FAIL,
    JOB_CARD_ITEMS_ASSIGNEES_FETCH_INIT,
    JOB_CARD_ITEMS_ASSIGNEES_FETCH_SUCCESS,
    JOB_CARD_ITEMS_FETCH_FAIL,
    JOB_CARD_ITEMS_FETCH_INIT,
    JOB_CARD_ITEMS_FETCH_SUCCESS,
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
    // JobCardItem,
    // jobCardItemResponse,
    JobCards,
    JobCardsActionTypes,
} from './types';

// const TYRE_SERVICES_CATEGORY_ID = 1;

export const initialState: JobCards = {
    loading: false,
    vehicleTypes: [],
    vehicleModels: [],
    rimSizes: [],
    services: [],
    loadingVehicles: false,
    vehicles: [],
    jobCardItems: [],
    assignees: [],
    jobCardDetails: null,
};

// const formatJobCardItems = (items: jobCardItemResponse[]) =>
//     items.reduce((acc: JobCardItem[], cur: jobCardItemResponse) => {
//         if (cur.subCategory.categoryId !== TYRE_SERVICES_CATEGORY_ID) {
//             return [
//                 ...acc,
//                 {
//                     ...cur,
//                     categoryId: cur.subCategory.categoryId,
//                     subCategory: [cur.subCategory],
//                 },
//             ];
//         }
//         const existingItem = acc.find(
//             (s) =>
//                 s.registrationNumber === cur.registrationNumber &&
//                 cur.subCategory.categoryId === s.categoryId,
//         );
//         return [
//             ...acc.filter(
//                 (s) =>
//                     s.registrationNumber !== cur.registrationNumber ||
//                     cur.subCategory.categoryId !== s.categoryId,
//             ),
//             {
//                 ...(existingItem ?? cur),
//                 categoryId: existingItem?.categoryId ?? cur.subCategory.categoryId,

//                 subCategory: existingItem?.subCategory
//                     ? [...existingItem.subCategory, cur.subCategory]
//                     : [cur.subCategory],
//             },
//         ];
//     }, []);

const reducer = (state = initialState, action: JobCardsActionTypes) => {
    switch (action.type) {
        case JOB_CARD_ITEMS_ASSIGNEES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_ITEMS_ASSIGNEES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                assignees: action.payload.data?.map((employee) => ({
                    label: employee.user.firstName,
                    value: employee.id,
                })),
            };
        case JOB_CARD_ITEMS_ASSIGNEES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case JOB_CARD_VEHICLE_TYPES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_VEHICLE_TYPES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicleTypes: action.payload.data?.map((vehicleType) => ({
                    label: vehicleType.name,
                    value: vehicleType.id,
                })),
            };
        case JOB_CARD_VEHICLE_TYPES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case JOB_CARD_VEHICLE_MODELS_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_VEHICLE_MODELS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicleModels: action.payload.data?.map((vehicleModel) => ({
                    label: vehicleModel.name,
                    value: vehicleModel.id,
                })),
            };
        case JOB_CARD_VEHICLE_MODELS_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case JOB_CARD_RIM_SIZES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_RIM_SIZES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                rimSizes: action.payload.data?.map((rimSize) => ({
                    label: rimSize.size,
                    value: rimSize.id,
                })),
            };
        case JOB_CARD_RIM_SIZES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case JOB_CARD_SERVICES_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_SERVICES_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                services: action.payload.data?.map((c) => ({
                    ...c,
                    subCategories: c.subCategories.map((s) => ({
                        label: s.subCategory,
                        value: s.id,
                        price: s.price,
                    })),
                })),
            };
        case JOB_CARD_SERVICES_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case JOB_CARD_VEHICLES_FETCH_INIT:
            return {
                ...state,
                loadingVehicles: true,
            };
        case JOB_CARD_VEHICLES_FETCH_SUCCESS:
            return {
                ...state,
                loadingVehicles: false,
                vehicles: action.payload.data?.map((vehicle) => ({
                    ...vehicle,
                    label: vehicle.registrationNumber,
                    value: vehicle.id,
                })),
            };
        case JOB_CARD_VEHICLES_FETCH_FAIL:
            return {
                ...state,
                loadingVehicles: false,
            };
        case JOB_CARD_ITEMS_FETCH_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_ITEMS_FETCH_SUCCESS: {
            // const items = action.payload.data?.length
            //     ? formatJobCardItems(action.payload.data)
            //     : [];
            const jobCardItems = action.payload.data?.map((s) => ({
                ...s,
                categoryId: s.subCategory.categoryId,
                subCategory: [s.subCategory],
            }));
            return {
                ...state,
                loading: false,
                jobCardItems,
            };
        }
        case JOB_CARD_ITEMS_FETCH_FAIL:
            return {
                ...state,
                loading: false,
            };
        case JOB_CARD_ITEM_UPDATE_STORE_SUCCESS: {
            const jobCardItem = action.payload.data;
            let previousJobCardItemIndex;
            state.jobCardItems.forEach((item, index) => {
                if (item.id === jobCardItem.id) {
                    previousJobCardItemIndex = index;
                }
            });
            const previousJobCardItems = [...state.jobCardItems];
            if (typeof previousJobCardItemIndex === 'number' && previousJobCardItemIndex > -1) {
                previousJobCardItems.splice(previousJobCardItemIndex, 1, {
                    ...jobCardItem,
                    categoryId: jobCardItem.subCategory.categoryId,
                    subCategory: [jobCardItem.subCategory],
                });
            }
            return {
                ...state,
                loading: false,
                jobCardItems: previousJobCardItems,
            };
        }
        case JOB_CARD_GENERATE_BILL_INIT:
            return {
                ...state,
                loading: true,
            };
        case JOB_CARD_GENERATE_BILL_SUCCESS:
            return {
                ...state,
                loading: false,
                jobCardDetails: action.payload.data,
            };
        case JOB_CARD_GENERATE_BILL_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
