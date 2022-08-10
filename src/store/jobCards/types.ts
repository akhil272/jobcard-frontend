import { ApiReturnType } from '@Store/api';
import { RouteComponentProps, SelectOption } from '@Store/common/types';
import { JobCardItemStatus } from '@Utils/enums';

export const JOB_CARD_GENERATE_BILL_INIT = 'JOB_CARD:GENERATE_BILL:INIT';
export const JOB_CARD_GENERATE_BILL_SUCCESS = 'JOB_CARD:GENERATE_BILL:SUCCESS';
export const JOB_CARD_GENERATE_BILL_FAIL = 'JOB_CARD:GENERATE_BILL:FAIL';
export const JOB_CARD_VEHICLE_MODELS_FETCH_INIT = 'JOB_CARD:VEHICLE_MODEL:FETCH:INIT';
export const JOB_CARD_VEHICLE_MODELS_FETCH_SUCCESS = 'JOB_CARD:VEHICLE_MODEL:FETCH:SUCCESS';
export const JOB_CARD_VEHICLE_MODELS_FETCH_FAIL = 'JOB_CARD:VEHICLE_MODEL:FETCH:FAIL';
export const JOB_CARD_VEHICLE_TYPES_FETCH_INIT = 'JOB_CARD:VEHICLE_TYPES:FETCH:INIT';
export const JOB_CARD_VEHICLE_TYPES_FETCH_SUCCESS = 'JOB_CARD:VEHICLE_TYPES:FETCH:SUCCESS';
export const JOB_CARD_VEHICLE_TYPES_FETCH_FAIL = 'JOB_CARD:VEHICLE_TYPES:FETCH:FAIL';
export const JOB_CARD_RIM_SIZES_FETCH_INIT = 'JOB_CARD:RIM_SIZES:FETCH:INIT';
export const JOB_CARD_RIM_SIZES_FETCH_SUCCESS = 'JOB_CARD:RIM_SIZES:FETCH:SUCCESS';
export const JOB_CARD_RIM_SIZES_FETCH_FAIL = 'JOB_CARD:RIM_SIZES:FETCH:FAIL';
export const JOB_CARD_SERVICES_FETCH_INIT = 'JOB_CARD:SERVICES:FETCH:INIT';
export const JOB_CARD_SERVICES_FETCH_SUCCESS = 'JOB_CARD:SERVICES:FETCH:SUCCESS';
export const JOB_CARD_SERVICES_FETCH_FAIL = 'JOB_CARD:SERVICES:FETCH:FAIL';
export const JOB_CARD_CREATE_FAIL = 'JOB_CARD:CREATE:INIT';
export const JOB_CARD_CREATE_SUCCESS = 'JOB_CARD:CREATE:SUCCESS';
export const JOB_CARD_CREATE_INIT = 'JOB_CARD:CREATE:FAIL';

export const JOB_CARD_VEHICLES_FETCH_INIT = 'JOB_CARD:VEHICLES:FETCH:INIT';
export const JOB_CARD_VEHICLES_FETCH_SUCCESS = 'JOB_CARD:VEHICLES:FETCH:SUCCESS';
export const JOB_CARD_VEHICLES_FETCH_FAIL = 'JOB_CARD:VEHICLES:FETCH:FAIL';

export const JOB_CARD_ITEMS_FETCH_INIT = 'JOB_CARD:JOB_CARD_ITEMS:FETCH:INIT';
export const JOB_CARD_ITEMS_FETCH_SUCCESS = 'JOB_CARD:JOB_CARD_ITEMS:FETCH:SUCCESS';
export const JOB_CARD_ITEMS_FETCH_FAIL = 'JOB_CARD:JOB_CARD_ITEMS:FETCH:FAIL';

export const JOB_CARD_ITEMS_ASSIGNEES_FETCH_INIT = 'JOB_CARD:JOB_CARD_ITEMS_ASSIGNEE:FETCH:INIT';
export const JOB_CARD_ITEMS_ASSIGNEES_FETCH_SUCCESS =
    'JOB_CARD:JOB_CARD_ITEMS_ASSIGNEE:FETCH:SUCCESS';
export const JOB_CARD_ITEMS_ASSIGNEES_FETCH_FAIL = 'JOB_CARD:JOB_CARD_ITEMS_ASSIGNEE:FETCH:FAIL';
export const JOB_CARD_ITEM_UPDATE_INIT = 'JOB_CARD:JOB_CARD_ITEM:UPDATE:INIT';
export const JOB_CARD_ITEM_UPDATE_SUCCESS = 'JOB_CARD:JOB_CARD_ITEM:UPDATE:SUCCESS';
export const JOB_CARD_ITEM_UPDATE_FAIL = 'JOB_CARD:JOB_CARD_ITEM:UPDATE:FAIL';
export const JOB_CARD_ITEM_PAUSE_INIT = 'JOB_CARD:JOB_CARD_ITEM:PAUSE:INIT';
export const JOB_CARD_ITEM_PAUSE_SUCCESS = 'JOB_CARD:JOB_CARD_ITEM:PAUSE:SUCCESS';
export const JOB_CARD_ITEM_PAUSE_FAIL = 'JOB_CARD:JOB_CARD_ITEM:PAUSE:FAIL';
export const JOB_CARD_ITEM_RESUME_INIT = 'JOB_CARD:JOB_CARD_ITEM:RESUME:INIT';
export const JOB_CARD_ITEM_RESUME_SUCCESS = 'JOB_CARD:JOB_CARD_ITEM:RESUME:SUCCESS';
export const JOB_CARD_ITEM_RESUME_FAIL = 'JOB_CARD:JOB_CARD_ITEM:RESUME:FAIL';
export const JOB_CARD_ITEM_UPDATE_STORE_SUCCESS = 'JOB_CARD:JOB_CARD_ITEM:UPDATE_STORE:SUCCESS';

export const JOB_CARD_ITEM_ADD_OTHER_ITEMS_INIT = 'JOB_CARD:JOB_CARD_ITEM:ADD_OTHER_ITEMS:INIT';
export const JOB_CARD_ITEM_ADD_OTHER_ITEMS_SUCCESS =
    'JOB_CARD:JOB_CARD_ITEM:ADD_OTHER_ITEMS:SUCCESS';
export const JOB_CARD_ITEM_ADD_OTHER_ITEMS_FAIL = 'JOB_CARD:JOB_CARD_ITEM:ADD_OTHER_ITEMS:FAIL';
export const JOB_CARD_ITEM_ADD_DISCOUNT_INIT = 'JOB_CARD:JOB_CARD_ITEM:ADD_DISCOUNT:INIT';
export const JOB_CARD_ITEM_ADD_DISCOUNT_SUCCESS = 'JOB_CARD:JOB_CARD_ITEM:ADD_DISCOUNT:SUCCESS';
export const JOB_CARD_ITEM_ADD_DISCOUNT_FAIL = 'JOB_CARD:JOB_CARD_ITEM:ADD_DISCOUNT:FAIL';

export const JOB_CARD_PAY_UPDATE_INIT = 'JOB_CARD:JOB_CARD_PAY:UPDATE:INIT';
export const JOB_CARD_PAY_UPDATE_SUCCESS = 'JOB_CARD:JOB_CARD_PAY:UPDATE:SUCCESS';
export const JOB_CARD_PAY_UPDATE_FAIL = 'JOB_CARD:JOB_CARD_PAY:UPDATE:FAIL';

export type AddOtherItems = {
    jobCardId: number;
    title: string;
    price: number;
    quantity: number;
};
export type AddJobCardItemDiscount = {
    jobCardId: number;
    discount: number;
    employeeId: number;
    notes?: string;
};

export type UpdateJobCardAmountPayload = {
    id: number;
    amountPaid: number;
};

export type VehicleType = SelectOption;
export type Assignee = SelectOption;

export type VehicleModel = SelectOption;
export type RimSize = SelectOption;
export type Service = SelectOption & { price: number };
export type Category = { id: number; category: string; subCategories: Service[] };
export type JobCardItem = {
    id: number;
    jobCardId: number;
    status: JobCardItemStatus;
    startedAt: string | null;
    elapsedTime: number;
    resumedAt: string | null;
    categoryId: number;
    subCategory: Array<{
        id: number;
        categoryId: number;
        name: string;
    }>;
    completedAt: string | null;
    assignedEmployee?: {
        id: number;
        firstName?: string;
        middleName?: string;
        lastName?: string;
    };
    registrationNumber: string;
};

export type JobCardSubCategoryItems = [
    { id: number; amount: number; subCategory: { name: string } },
];

export type JobCardDiscount = {
    discount: number;
    notes?: string;
};

export type JobCard = {
    id: number;
    registrationNumber: string;
    items: JobCardSubCategoryItems;
    totalAmount: number;
    pickupUserFirstName: string;
    pickupUserPhone: string;
    pickupUserEmail: string;
    additionalItems: AddOtherItems[];
    discount: JobCardDiscount;
};

export type JobCards = {
    loading: boolean;
    vehicleTypes: VehicleType[];
    vehicleModels: VehicleModel[];
    rimSizes: RimSize[];
    services: Category[];
    vehicles: SelectOption[];
    loadingVehicles: boolean;
    jobCardItems: JobCardItem[];
    assignees: Assignee[];
    jobCardDetails: JobCard | null;
};

export type getAssigneesPayload = {
    search: string;
};

export type AssigneePayload = {
    user: { firstName: string };
    id: number;
    name: string;
};

export type getVehicleTypesPayload = {
    search: string;
};
export type getVehicleModelsPayload = {
    search: string;
};
export type getRimSizesPayload = {
    search: string;
};

export type VehicleTypePayload = {
    id: number;
    name: string;
};
export type VehicleModelPayload = {
    id: number;
    name: string;
};
export type RimSizePayload = {
    id: number;
    size: string;
};

export type ServicePayload = {
    id: number;
    price: number;
    subCategory: string;
};
export type CategoryPayload = {
    id: number;
    category: string;
    subCategories: ServicePayload[];
};

export type CreateJobStateProps = {
    vehicleTypes: VehicleType[];
    vehicleModels: VehicleModel[];
    rimSizes: RimSize[];
    services: Category[];
    vehicles: SelectOption[];
};

export type getVehiclesPayload = {
    search: string;
};

export type JobCardPayload = {
    id: number;
};

export type GenerateBillProps = {
    jobCardDetails: JobCard | null;
    assignees: Assignee[];
    addJobCardItemDiscount: (data: AddJobCardItemDiscount) => Promise<ApiReturnType<void>>;
    addOtherItems: (data: AddOtherItems) => Promise<ApiReturnType<void>>;
    getAssignees: (payload: getAssigneesPayload) => Promise<ApiReturnType<AssigneePayload[]>>;
    updatePay: (data: UpdateJobCardAmountPayload) => Promise<ApiReturnType<void>>;
    generateBill: (id: string) => Promise<ApiReturnType<JobCardPayload>>;
};

type createJobResponse = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type createJobCardPayload = any;

type vehicleResponse = { registrationNumber: string; id: number };

export type CreateJobDispatchProps = RouteComponentProps & {
    getVehicleTypes: (
        payload: getVehicleTypesPayload,
    ) => Promise<ApiReturnType<VehicleTypePayload[]>>;
    getVehicleModels: (
        payload: getVehicleModelsPayload,
    ) => Promise<ApiReturnType<VehicleModelPayload[]>>;
    getRimSizes: (payload: getRimSizesPayload) => Promise<ApiReturnType<RimSizePayload[]>>;
    getServices: () => Promise<ApiReturnType<CategoryPayload[]>>;
    createJobCard: (data: createJobCardPayload) => Promise<ApiReturnType<createJobResponse>>;
    getVehicles: (payload: getVehiclesPayload) => Promise<ApiReturnType<vehicleResponse[]>>;
};

export type jobCardItemResponse = {
    id: number;
    createdAt: string;
    updatedAt: string;
    jobCardId: number;
    subCategory: {
        id: number;
        categoryId: number;
        name: string;
    };
    startedAt: string | null;
    completedAt: string | null;
    resumedAt: string | null;
    elapsedTime: number;
    status: JobCardItemStatus;
    assignedEmployee?: {
        id: number;
        firstName?: string;
        middleName?: string;
        lastName?: string;
    };
    registrationNumber: string;
};

export type UpdateJobCardItemPayload = {
    id: number;
    status: JobCardItemStatus;
    employeeId: number;
};

export type ViewJobsDispatchProps = {
    getJobCardItems: () => Promise<ApiReturnType<jobCardItemResponse[]>>;
    getAssignees: (payload: getAssigneesPayload) => Promise<ApiReturnType<AssigneePayload[]>>;
    updateJobCardItem: (
        payload: UpdateJobCardItemPayload,
    ) => Promise<ApiReturnType<jobCardItemResponse>>;
    pauseJobCardItem: (id: number) => Promise<ApiReturnType<jobCardItemResponse>>;
    resumeJobCardItem: (id: number) => Promise<ApiReturnType<jobCardItemResponse>>;
};

export type ViewJobsStateProps = {
    jobCardItems: JobCardItem[];
    assignees: Assignee[];
    currentUser?: number | null;
};

export type ViewJobsProps = ViewJobsStateProps & ViewJobsDispatchProps;

export type CreateJobProps = CreateJobStateProps & CreateJobDispatchProps;

export type UpdateJobCardItemInStorePayload = {
    data: jobCardItemResponse;
};

type jobCardVehicleTypesFetchInit = {
    type: typeof JOB_CARD_VEHICLE_TYPES_FETCH_INIT;
};
type jobCardVehicleTypesFetchSuccess = {
    type: typeof JOB_CARD_VEHICLE_TYPES_FETCH_SUCCESS;
    payload: ApiReturnType<VehicleTypePayload[]>;
};
type jobCardVehicleTypesFetchFail = {
    type: typeof JOB_CARD_VEHICLE_TYPES_FETCH_FAIL;
};

type jobCardVehicleModelsFetchInit = {
    type: typeof JOB_CARD_VEHICLE_MODELS_FETCH_INIT;
};
type jobCardVehicleModelsFetchSuccess = {
    type: typeof JOB_CARD_VEHICLE_MODELS_FETCH_SUCCESS;
    payload: ApiReturnType<VehicleModelPayload[]>;
};
type jobCardVehicleModelsFetchFail = {
    type: typeof JOB_CARD_VEHICLE_MODELS_FETCH_FAIL;
};

type jobCardRimSizesFetchInit = {
    type: typeof JOB_CARD_RIM_SIZES_FETCH_INIT;
};
type jobCardRimSizesFetchSuccess = {
    type: typeof JOB_CARD_RIM_SIZES_FETCH_SUCCESS;
    payload: ApiReturnType<RimSizePayload[]>;
};
type jobCardRimSizesFetchFail = {
    type: typeof JOB_CARD_RIM_SIZES_FETCH_FAIL;
};
type jobCardServicesFetchInit = {
    type: typeof JOB_CARD_SERVICES_FETCH_INIT;
};
type jobCardServicesFetchSuccess = {
    type: typeof JOB_CARD_SERVICES_FETCH_SUCCESS;
    payload: ApiReturnType<CategoryPayload[]>;
};
type jobCardServicesFetchFail = {
    type: typeof JOB_CARD_SERVICES_FETCH_FAIL;
};
type jobCardVehiclesFetchInit = {
    type: typeof JOB_CARD_VEHICLES_FETCH_INIT;
};
type jobCardVehiclesFetchSuccess = {
    type: typeof JOB_CARD_VEHICLES_FETCH_SUCCESS;
    payload: ApiReturnType<vehicleResponse[]>;
};
type jobCardVehiclesFetchFail = {
    type: typeof JOB_CARD_VEHICLES_FETCH_FAIL;
};

type jobCardItemsFetchInit = {
    type: typeof JOB_CARD_ITEMS_FETCH_INIT;
};
type jobCardItemsFetchSuccess = {
    type: typeof JOB_CARD_ITEMS_FETCH_SUCCESS;
    payload: ApiReturnType<jobCardItemResponse[]>;
};
type jobCardItemsFetchFail = {
    type: typeof JOB_CARD_ITEMS_FETCH_FAIL;
};

type jobCardItemsAssigneesFetchInit = {
    type: typeof JOB_CARD_ITEMS_ASSIGNEES_FETCH_INIT;
};
type jobCardItemsAssigneesFetchSuccess = {
    type: typeof JOB_CARD_ITEMS_ASSIGNEES_FETCH_SUCCESS;
    payload: ApiReturnType<AssigneePayload[]>;
};
type jobCardItemsAssigneesFetchFail = {
    type: typeof JOB_CARD_ITEMS_ASSIGNEES_FETCH_FAIL;
};
type jobCardItemUpdateStoreAction = {
    type: typeof JOB_CARD_ITEM_UPDATE_STORE_SUCCESS;
    payload: UpdateJobCardItemInStorePayload;
};

type generateBillInit = {
    type: typeof JOB_CARD_GENERATE_BILL_INIT;
};
type generateBillSuccess = {
    type: typeof JOB_CARD_GENERATE_BILL_SUCCESS;
    payload: ApiReturnType<JobCardPayload>;
};
type generateBillFail = {
    type: typeof JOB_CARD_GENERATE_BILL_FAIL;
};

export type JobCardsActionTypes =
    | jobCardVehicleTypesFetchInit
    | jobCardVehicleTypesFetchSuccess
    | jobCardVehicleTypesFetchFail
    | jobCardVehicleModelsFetchInit
    | jobCardVehicleModelsFetchSuccess
    | jobCardVehicleModelsFetchFail
    | jobCardRimSizesFetchInit
    | jobCardRimSizesFetchSuccess
    | jobCardRimSizesFetchFail
    | jobCardServicesFetchInit
    | jobCardServicesFetchSuccess
    | jobCardServicesFetchFail
    | jobCardVehiclesFetchInit
    | jobCardVehiclesFetchSuccess
    | jobCardVehiclesFetchFail
    | jobCardItemsFetchInit
    | jobCardItemsFetchSuccess
    | jobCardItemsFetchFail
    | jobCardItemsAssigneesFetchInit
    | jobCardItemsAssigneesFetchSuccess
    | jobCardItemsAssigneesFetchFail
    | jobCardItemUpdateStoreAction
    | generateBillInit
    | generateBillSuccess
    | generateBillFail;
