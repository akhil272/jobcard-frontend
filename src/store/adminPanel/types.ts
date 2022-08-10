import { ApiReturnType } from '@Store/api';
import { SelectOption } from '@Store/common/types';
import { getRimSizesPayload, RimSize, RimSizePayload } from '@Store/jobCards/types';

export const ADMIN_PANEL_EMPLOYEES_FETCH_INIT = 'ADMIN_PANEL:EMPLOYEES:FETCH:INIT';
export const ADMIN_PANEL_EMPLOYEES_FETCH_SUCCESS = 'ADMIN_PANEL:EMPLOYEES:FETCH:SUCCESS';
export const ADMIN_PANEL_EMPLOYEES_FETCH_FAIL = 'ADMIN_PANEL:EMPLOYEES:FETCH:FAIL';
export const ADMIN_PANEL_EMPLOYEE_CREATE_INIT = 'ADMIN_PANEL:EMPLOYEE:CREATE:INIT';
export const ADMIN_PANEL_EMPLOYEE_CREATE_SUCCESS = 'ADMIN_PANEL:EMPLOYEE:CREATE:SUCCESS';
export const ADMIN_PANEL_EMPLOYEE_CREATE_FAIL = 'ADMIN_PANEL:EMPLOYEE:CREATE:FAIL';

export const ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_INIT =
    'ADMIN_PANEL:SUB:CATEGORY:PRICES:FETCH:INIT';
export const ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_SUCCESS =
    'ADMIN_PANEL:SUB:CATEGORY:PRICES:FETCH:SUCCESS';
export const ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_FAIL =
    'ADMIN_PANEL:SUB:CATEGORY:PRICES:FETCH:FAIL';
export const ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_INIT =
    'ADMIN_PANEL:SUB:CATEGORY:PRICE:CREATE:INIT';
export const ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_SUCCESS =
    'ADMIN_PANEL:SUB:CATEGORY:PRICE:CREATE:SUCCESS';
export const ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_FAIL =
    'ADMIN_PANEL:SUB:CATEGORY:PRICE:CREATE:FAIL';

export const ADMIN_PANEL_SUB_CATEGORIES_FETCH_INIT = 'ADMIN_PANEL:SUB:CATEGORIES:FETCH:INIT';
export const ADMIN_PANEL_SUB_CATEGORIES_FETCH_SUCCESS = 'ADMIN_PANEL:SUB:CATEGORIES:FETCH:SUCCESS';
export const ADMIN_PANEL_SUB_CATEGORIES_FETCH_FAIL = 'ADMIN_PANEL:SUB:CATEGORIES:FETCH:FAIL';
export const ADMIN_PANEL_SUB_CATEGORY_CREATE_INIT = 'ADMIN_PANEL:SUB:CATEGORY:CREATE:INIT';
export const ADMIN_PANEL_SUB_CATEGORY_CREATE_SUCCESS = 'ADMIN_PANEL:SUB:CATEGORY:CREATE:SUCCESS';
export const ADMIN_PANEL_SUB_CATEGORY_CREATE_FAIL = 'ADMIN_PANEL:SUB:CATEGORY:CREATE:FAIL';

export const ADMIN_PANEL_CATEGORIES_FETCH_INIT = 'ADMIN_PANEL:CATEGORIES:FETCH:INIT';
export const ADMIN_PANEL_CATEGORIES_FETCH_SUCCESS = 'ADMIN_PANEL:CATEGORIES:FETCH:SUCCESS';
export const ADMIN_PANEL_CATEGORIES_FETCH_FAIL = 'ADMIN_PANEL:CATEGORIES:FETCH:FAIL';
export const ADMIN_PANEL_CATEGORY_CREATE_INIT = 'ADMIN_PANEL:CATEGORY:CREATE:INIT';
export const ADMIN_PANEL_CATEGORY_CREATE_SUCCESS = 'ADMIN_PANEL:CATEGORY:CREATE:SUCCESS';
export const ADMIN_PANEL_CATEGORY_CREATE_FAIL = 'ADMIN_PANEL:CATEGORY:CREATE:FAIL';

export const ADMIN_PANEL_VEHICLE_MODELS_FETCH_INIT = 'ADMIN_PANEL:VEHICLE:MODELS:FETCH:INIT';
export const ADMIN_PANEL_VEHICLE_MODELS_FETCH_SUCCESS = 'ADMIN_PANEL:VEHICLE:MODELS:FETCH:SUCCESS';
export const ADMIN_PANEL_VEHICLE_MODELS_FETCH_FAIL = 'ADMIN_PANEL:VEHICLE:MODELS:FETCH:FAIL';
export const ADMIN_PANEL_VEHICLE_MODEL_CREATE_INIT = 'ADMIN_PANEL:VEHICLE:MODEL:CREATE:INIT';
export const ADMIN_PANEL_VEHICLE_MODEL_CREATE_SUCCESS = 'ADMIN_PANEL:VEHICLE:MODEL:CREATE:SUCCESS';
export const ADMIN_PANEL_VEHICLE_MODEL_CREATE_FAIL = 'ADMIN_PANEL:VEHICLE:MODEL:CREATE:FAIL';

export const ADMIN_PANEL_VEHICLE_TYPES_FETCH_INIT = 'ADMIN_PANEL:VEHICLE:TYPES:FETCH:INIT';
export const ADMIN_PANEL_VEHICLE_TYPES_FETCH_SUCCESS = 'ADMIN_PANEL:VEHICLE:TYPES:FETCH:SUCCESS';
export const ADMIN_PANEL_VEHICLE_TYPES_FETCH_FAIL = 'ADMIN_PANEL:VEHICLE:TYPES:FETCH:FAIL';
export const ADMIN_PANEL_VEHICLE_TYPE_CREATE_INIT = 'ADMIN_PANEL:VEHICLE:TYPE:CREATE:INIT';
export const ADMIN_PANEL_VEHICLE_TYPE_CREATE_SUCCESS = 'ADMIN_PANEL:VEHICLE:TYPE:CREATE:SUCCESS';
export const ADMIN_PANEL_VEHICLE_TYPE_CREATE_FAIL = 'ADMIN_PANEL:VEHICLE:TYPE:CREATE:FAIL';

export const ADMIN_PANEL_VEHICLE_BRANDS_FETCH_INIT = 'ADMIN_PANEL:VEHICLE:BRANDS:FETCH:INIT';
export const ADMIN_PANEL_VEHICLE_BRANDS_FETCH_SUCCESS = 'ADMIN_PANEL:VEHICLE:BRANDS:FETCH:SUCCESS';
export const ADMIN_PANEL_VEHICLE_BRANDS_FETCH_FAIL = 'ADMIN_PANEL:VEHICLE:BRANDS:FETCH:FAIL';
export const ADMIN_PANEL_VEHICLE_BRAND_CREATE_INIT = 'ADMIN_PANEL:VEHICLE:BRAND:CREATE:INIT';
export const ADMIN_PANEL_VEHICLE_BRAND_CREATE_SUCCESS = 'ADMIN_PANEL:VEHICLE:BRAND:CREATE:SUCCESS';
export const ADMIN_PANEL_VEHICLE_BRAND_CREATE_FAIL = 'ADMIN_PANEL:VEHICLE:BRAND:CREATE:FAIL';

export const ADMIN_PANEL_OVERVIEW_FETCH_INIT = 'ADMIN_PANEL:OVERVIEW:FETCH:INIT';
export const ADMIN_PANEL_OVERVIEW_FETCH_SUCCESS = 'ADMIN_PANEL:OVERVIEW:FETCH:SUCCESS';
export const ADMIN_PANEL_OVERVIEW_FETCH_FAIL = 'ADMIN_PANEL:OVERVIEW:FETCH:FAIL';

export const ADMIN_PANEL_CITIES_FETCH_INIT = 'ADMIN_PANEL:CITIES:FETCH:INIT';
export const ADMIN_PANEL_CITIES_FETCH_SUCCESS = 'ADMIN_PANEL:CITIES:FETCH:SUCCESS';
export const ADMIN_PANEL_CITIES_FETCH_FAIL = 'ADMIN_PANEL:CITIES:FETCH:FAIL';
export const ADMIN_PANEL_CITIES_CREATE_INIT = 'ADMIN_PANEL:CITIES:CREATE:INIT';
export const ADMIN_PANEL_CITIES_CREATE_SUCCESS = 'ADMIN_PANEL:CITIES:CREATE:SUCCESS';
export const ADMIN_PANEL_CITIES_CREATE_FAIL = 'ADMIN_PANEL:CITIES:CREATE:FAIL';

export const ADMIN_PANEL_COUNTRIES_FETCH_INIT = 'ADMIN_PANEL:COUNTRIES:FETCH:INIT';
export const ADMIN_PANEL_COUNTRIES_FETCH_SUCCESS = 'ADMIN_PANEL:COUNTRIES:FETCH:SUCCESS';
export const ADMIN_PANEL_COUNTRIES_FETCH_FAIL = 'ADMIN_PANEL:COUNTRIES:FETCH:FAIL';
export const ADMIN_PANEL_COUNTRIES_CREATE_INIT = 'ADMIN_PANEL:COUNTRIES:CREATE:INIT';
export const ADMIN_PANEL_COUNTRIES_CREATE_SUCCESS = 'ADMIN_PANEL:COUNTRIES:CREATE:SUCCESS';
export const ADMIN_PANEL_COUNTRIES_CREATE_FAIL = 'ADMIN_PANEL:COUNTRIES:CREATE:FAIL';

export const ADMIN_PANEL_BRANCHES_FETCH_INIT = 'ADMIN_PANEL:BRANCHES:FETCH:INIT';
export const ADMIN_PANEL_BRANCHES_FETCH_SUCCESS = 'ADMIN_PANEL:BRANCHES:FETCH:SUCCESS';
export const ADMIN_PANEL_BRANCHES_FETCH_FAIL = 'ADMIN_PANEL:BRANCHES:FETCH:FAIL';
export const ADMIN_PANEL_BRANCHES_CREATE_INIT = 'ADMIN_PANEL:BRANCHES:CREATE:INIT';
export const ADMIN_PANEL_BRANCHES_CREATE_SUCCESS = 'ADMIN_PANEL:BRANCHES:CREATE:SUCCESS';
export const ADMIN_PANEL_BRANCHES_CREATE_FAIL = 'ADMIN_PANEL:BRANCHES:CREATE:FAIL';

export type createEmployeePayload = {
    user: number;
    branch: number;
    joiningDate: Date;
    name: string;
    phoneNumber: string;
    role: string;
};

export type createSubCategoryPayload = {
    name: string;
    category: number;
};
export type getSubCategoriesPayload = {
    search: string;
};
export type SubCategory = {
    id: number;
    name: string;
    categoryId: number;
    category: { id: number; name: string };
};
export type SubCategoryPayload = SubCategory;
export type SubCategories = SubCategory;
export type Category = {
    id: number;
    name: string;
    subCategories: SubCategory[];
};

export type Categories = SelectOption & Category;

export type CategoryPayload = Category;

export type createCategoryPayload = {
    name: string;
};

export type getCategoriesPayload = {
    search?: string;
};
export type getVehicleTypesPayload = {
    search: string;
};
export type getVehicleBrandsPayload = {
    search: string;
};
export type createVehicleTypePayload = {
    name: string;
};
export type createVehicleBrandPayload = {
    name: string;
};

export type VehicleBrand = {
    id: number;
    name: string;
};

export type VehicleType = {
    id: number;
    name: string;
};

export type VehicleModel = {
    id: number;
    name: string;
    brand: VehicleBrand;
    brandId: number;
    type: VehicleType;
    typeId: number;
};

export type VehicleModelPayload = {
    id: number;
    name: string;
    brand: VehicleBrand;
    brandId: number;
    type: VehicleType;
    typeId: number;
};

export type VehicleTypePayload = {
    id: number;
    name: string;
    vehicleModels: VehicleModel[];
};

export type VehicleBrandPayload = {
    name: string;
    id: number;
    model: VehicleModel;
};

export type getOverviewPayload = {
    startDate: string;
    endDate: string;
    branchId?: number;
};

export type OverviewItem = {
    id: number;
    category: {
        name: string;
        subCategories: Array<{
            id: number;
            name: string;
        }>;
    };
};

export type JobCardOverviewItem = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    services: OverviewItem[];
    totalAmount: number;
    totalPendingAmount: number;
    discount: number;
};
export type Overview = {
    [key: number]: {
        jobCards: JobCardOverviewItem[];
        branch: string;
    };
};

export type OverviewPayload = {
    pending: Overview;
    inProgress: Overview;
    partiallyPaid: Overview;
    paid: Overview;
    totalRevenue: number;
};

export type createVehicleModelPayload = {
    name: string;
    brand: number;
    type: number;
};
export type createBranchPayload = {
    name: string;
    city: number;
};
export type createCityPayload = {
    name: string;
    country: number;
};
export type createCountryPayload = {
    name: string;
    currency: string;
    currencyCode: string;
    currencySymbol: string;
};
export type getCitiesPayload = {
    search: string;
};
export type getCountriesPayload = {
    search?: string;
};

export type Country = {
    name: string;
    currencyCode: string;
    currency: string;
    currencySymbol: string;
};

export type CitiesPayload = {
    id: number;
    name: string;
    countryId: number;
    country: Country;
};

export type City = {
    id: number;
    name: string;
    country: Country;
};

export type CountriesPayload = {
    name: string;
    id: number;
    currency: string;
    currencyCode: string;
    currencySymbol: string;
};
export type BranchesPayload = {
    name: string;
    cityId: number;
    id: number;
    city: City;
};
export type VehicleTypes = SelectOption & VehicleType;
export type VehicleBrands = SelectOption & VehicleBrand;
export type Cities = SelectOption & City;
export type Countries = SelectOption & Country;
export type Branch = {
    name: string;
    cityId: number;
    id: number;
    city: City;
};

export type BranchesStateProps = {
    branches: Branch[];
    cities: Cities[];
    countries: Countries[];
};

export enum PricingMethod {
    FIXED = 'FIXED',
    HOURLY = 'HOURLY',
}

export type SubCategoryPrice = {
    id: number;
    subCategory: string;
    pricingMethod: PricingMethod;
    category: {
        id: number;
        name: string;
    };
    price: number;
};

export type subCategory = {
    id: number;
    pricingMethod: PricingMethod;
    subCategory: string;
    price: number;
};
export type SubCategoryPrices = {
    id: number;
    category: string;
    subCategories: subCategory[];
};
// export type SubCategoryPricesPayload = SubCategoryPrices[];
export type createSubCategoryPricesPayload = {
    branch: number;
    subCategory: number;
    price: number;
    pricingMethod: string;
    vehicleModel: number;
    vehicleType: number;
    oldBuildPrice?: number;
    newBuildPrice?: number;
    rimSize: number;
};
export type AdminPanel = {
    loading: boolean;
    branches: Branch[];
    cities: Cities[];
    countries: Countries[];
    overview: OverviewPayload;
    vehicleBrands: VehicleBrands[];
    vehicleTypes: VehicleTypes[];
    vehicleModels: VehicleModel[];
    categories: Categories[];
    subCategories: SubCategories[];
    subCategoryPrices: SubCategoryPrices[];
};

export type createSubCategoryPriceResponse = {};
export type createCategoryResponse = {};
export type createCityResponse = {};
export type createCountryResponse = {};
export type createBranchResponse = {};
export type createVehicleBrandResponse = {};
export type createVehicleTypeResponse = {};
export type createVehicleModelResponse = {};
export type createSubCategoryResponse = {};

export type ServiceDispatchProps = {
    getCategories: (payload: getCategoriesPayload) => Promise<ApiReturnType<CategoryPayload[]>>;
    createCategory: (data: createCategoryPayload) => Promise<ApiReturnType<createCategoryResponse>>;
    getSubCategories: (
        payload: getSubCategoriesPayload,
    ) => Promise<ApiReturnType<SubCategoryPayload[]>>;
    createSubCategory: (
        data: createSubCategoryPayload,
    ) => Promise<ApiReturnType<createSubCategoryResponse>>;
};

export type ServiceStateProps = {
    categories: Categories[];
    subCategories: SubCategory[];
};
export type getSubCategoryPricesPayload = {
    search?: string;
};

export type BranchesDispatchProps = {
    getCities: (payload: getCitiesPayload) => Promise<ApiReturnType<CitiesPayload[]>>;
    getAllBranches: () => Promise<ApiReturnType<BranchesPayload[]>>;
    getCountries: (payload: getCountriesPayload) => Promise<ApiReturnType<CountriesPayload[]>>;
    createCountry: (data: createCountryPayload) => Promise<ApiReturnType<createCountryResponse>>;
    createCity: (data: createCityPayload) => Promise<ApiReturnType<createCityResponse>>;
    createBranch: (data: createBranchPayload) => Promise<ApiReturnType<createBranchResponse>>;
};
export type VehicleModelsStateProps = {
    vehicleBrands: VehicleBrands[];
    vehicleTypes: VehicleTypes[];
    vehicleModels: VehicleModel[];
};
export type VehicleModelsDispatchProps = {
    getVehicleModels: () => Promise<ApiReturnType<VehicleModelPayload[]>>;
    createVehicleModel: (
        payload: createVehicleModelPayload,
    ) => Promise<ApiReturnType<createVehicleModelResponse>>;
    getVehicleTypes: (
        payload: getVehicleTypesPayload,
    ) => Promise<ApiReturnType<VehicleTypePayload[]>>;
    createVehicleType: (
        payload: createVehicleTypePayload,
    ) => Promise<ApiReturnType<createVehicleTypeResponse>>;
    getVehicleBrands: (
        payload: getVehicleBrandsPayload,
    ) => Promise<ApiReturnType<VehicleBrandPayload[]>>;
    createVehicleBrand: (
        payload: createVehicleBrandPayload,
    ) => Promise<ApiReturnType<createVehicleBrandResponse>>;
};

export type BranchesProps = BranchesStateProps & BranchesDispatchProps;
export type VehicleModelsProps = VehicleModelsStateProps & VehicleModelsDispatchProps;
export type OverviewStateProps = {
    overview: OverviewPayload;
};

export type ServicePricingDispatchProps = {
    getSubCategoryPrices: () => Promise<ApiReturnType<SubCategoryPrices[]>>;
    createSubCategoryPrice: (
        data: createSubCategoryPricesPayload,
    ) => Promise<ApiReturnType<createSubCategoryPriceResponse>>;
    getRimSizes: (payload: getRimSizesPayload) => Promise<ApiReturnType<RimSizePayload[]>>;
};

export type ServicePricingStateProps = {
    subCategoryPrices: SubCategoryPrice[];
    rimSizes: RimSize[];
};

export type ServiceProps = ServiceDispatchProps & ServiceStateProps;
export type ServicePricingProps = ServicePricingDispatchProps &
    ServicePricingStateProps &
    BranchesProps &
    ServiceProps &
    VehicleModelsProps;

export type OverviewDispatchProps = {
    getOverviews: (payload: getOverviewPayload) => Promise<ApiReturnType<OverviewPayload>>;
};

export type OverviewProps = OverviewStateProps & OverviewDispatchProps;

type GetSubCategoryPricesInit = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_INIT;
};

type GetSubCategoryPricesSuccessAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_SUCCESS;
    payload: ApiReturnType<SubCategoryPrices[]>;
};

type GetSubCategoryPricesFailAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_PRICES_FETCH_FAIL;
};
type CreateSubCategoryPriceInit = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_INIT;
};

type CreateSubCategoryPriceSuccessAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_SUCCESS;
    payload: ApiReturnType<SubCategoryPrices>;
};

type CreateSubCategoryPriceFailAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_PRICE_CREATE_FAIL;
};

type GetSubCategoriesInit = {
    type: typeof ADMIN_PANEL_SUB_CATEGORIES_FETCH_INIT;
};

type GetSubCategoriesSuccessAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORIES_FETCH_SUCCESS;
    payload: ApiReturnType<SubCategoryPayload[]>;
};

type GetSubCategoriesFailAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORIES_FETCH_FAIL;
};
type CreateSubCategoryInit = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_CREATE_INIT;
};

type CreateSubCategorySuccessAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_CREATE_SUCCESS;
    payload: ApiReturnType<SubCategoryPayload>;
};

type CreateSubCategoryFailAction = {
    type: typeof ADMIN_PANEL_SUB_CATEGORY_CREATE_FAIL;
};

type GetCategoriesInit = {
    type: typeof ADMIN_PANEL_CATEGORIES_FETCH_INIT;
};

type GetCategoriesSuccessAction = {
    type: typeof ADMIN_PANEL_CATEGORIES_FETCH_SUCCESS;
    payload: ApiReturnType<CategoryPayload[]>;
};

type GetCategoriesFailAction = {
    type: typeof ADMIN_PANEL_CATEGORIES_FETCH_FAIL;
};
type CreateCategoryInit = {
    type: typeof ADMIN_PANEL_CATEGORY_CREATE_INIT;
};

type CreateCategorySuccessAction = {
    type: typeof ADMIN_PANEL_CATEGORY_CREATE_SUCCESS;
    payload: ApiReturnType<CategoryPayload>;
};

type CreateCategoryFailAction = {
    type: typeof ADMIN_PANEL_CATEGORY_CREATE_FAIL;
};

type GetVehicleModelsInit = {
    type: typeof ADMIN_PANEL_VEHICLE_MODELS_FETCH_INIT;
};

type GetVehicleModelsSuccessAction = {
    type: typeof ADMIN_PANEL_VEHICLE_MODELS_FETCH_SUCCESS;
    payload: ApiReturnType<VehicleModelPayload[]>;
};

type GetVehicleModelsFailAction = {
    type: typeof ADMIN_PANEL_VEHICLE_MODELS_FETCH_FAIL;
};
type CreateVehicleModelInit = {
    type: typeof ADMIN_PANEL_VEHICLE_MODEL_CREATE_INIT;
};

type CreateVehicleModelSuccessAction = {
    type: typeof ADMIN_PANEL_VEHICLE_MODEL_CREATE_SUCCESS;
    payload: ApiReturnType<VehicleModelPayload>;
};

type CreateVehicleModelFailAction = {
    type: typeof ADMIN_PANEL_VEHICLE_MODEL_CREATE_FAIL;
};

type GetVehicleTypesInit = {
    type: typeof ADMIN_PANEL_VEHICLE_TYPES_FETCH_INIT;
};

type GetVehicleTypesSuccessAction = {
    type: typeof ADMIN_PANEL_VEHICLE_TYPES_FETCH_SUCCESS;
    payload: ApiReturnType<VehicleTypePayload[]>;
};

type GetVehicleTypesFailAction = {
    type: typeof ADMIN_PANEL_VEHICLE_TYPES_FETCH_FAIL;
};
type CreateVehicleTypeInit = {
    type: typeof ADMIN_PANEL_VEHICLE_TYPE_CREATE_INIT;
};

type CreateVehicleTypeSuccessAction = {
    type: typeof ADMIN_PANEL_VEHICLE_TYPE_CREATE_SUCCESS;
    payload: ApiReturnType<VehicleTypePayload>;
};

type CreateVehicleTypeFailAction = {
    type: typeof ADMIN_PANEL_VEHICLE_TYPE_CREATE_FAIL;
};

type GetVehicleBrandsInit = {
    type: typeof ADMIN_PANEL_VEHICLE_BRANDS_FETCH_INIT;
};

type GetVehicleBrandsSuccessAction = {
    type: typeof ADMIN_PANEL_VEHICLE_BRANDS_FETCH_SUCCESS;
    payload: ApiReturnType<VehicleBrandPayload[]>;
};

type GetVehicleBrandsFailAction = {
    type: typeof ADMIN_PANEL_VEHICLE_BRANDS_FETCH_FAIL;
};
type CreateVehicleBrandInit = {
    type: typeof ADMIN_PANEL_VEHICLE_BRAND_CREATE_INIT;
};

type CreateVehicleBrandSuccessAction = {
    type: typeof ADMIN_PANEL_VEHICLE_BRAND_CREATE_SUCCESS;
    payload: ApiReturnType<VehicleBrandPayload>;
};

type CreateVehicleBrandFailAction = {
    type: typeof ADMIN_PANEL_VEHICLE_BRAND_CREATE_FAIL;
};

type GetAdminPanelOverviewInit = {
    type: typeof ADMIN_PANEL_OVERVIEW_FETCH_INIT;
};

type GetAdminPanelOverviewSuccessAction = {
    type: typeof ADMIN_PANEL_OVERVIEW_FETCH_SUCCESS;
    payload: ApiReturnType<OverviewPayload>;
};

type GetAdminPanelOverviewFailAction = {
    type: typeof ADMIN_PANEL_OVERVIEW_FETCH_FAIL;
};
type GetCitiesInit = {
    type: typeof ADMIN_PANEL_CITIES_FETCH_INIT;
};

type GetCitiesSuccessAction = {
    type: typeof ADMIN_PANEL_CITIES_FETCH_SUCCESS;
    payload: ApiReturnType<CitiesPayload[]>;
};

type GetCitiesFailAction = {
    type: typeof ADMIN_PANEL_CITIES_FETCH_FAIL;
};
type GetCountriesInit = {
    type: typeof ADMIN_PANEL_COUNTRIES_FETCH_INIT;
};

type GetCountriesSuccessAction = {
    type: typeof ADMIN_PANEL_COUNTRIES_FETCH_SUCCESS;
    payload: ApiReturnType<CountriesPayload[]>;
};

type GetCountriesFailAction = {
    type: typeof ADMIN_PANEL_COUNTRIES_FETCH_FAIL;
};

type GetBranchesInit = {
    type: typeof ADMIN_PANEL_BRANCHES_FETCH_INIT;
};

type GetBranchesSuccessAction = {
    type: typeof ADMIN_PANEL_BRANCHES_FETCH_SUCCESS;
    payload: ApiReturnType<BranchesPayload>;
};

type GetBranchesFailAction = {
    type: typeof ADMIN_PANEL_BRANCHES_FETCH_FAIL;
};
type CreateCitiesInit = {
    type: typeof ADMIN_PANEL_CITIES_CREATE_INIT;
};

type CreateCitiesSuccessAction = {
    type: typeof ADMIN_PANEL_CITIES_CREATE_SUCCESS;
    payload: ApiReturnType<CitiesPayload>;
};

type CreateCitiesFailAction = {
    type: typeof ADMIN_PANEL_CITIES_CREATE_FAIL;
};
type CreateCountriesInit = {
    type: typeof ADMIN_PANEL_COUNTRIES_CREATE_INIT;
};

type CreateCountriesSuccessAction = {
    type: typeof ADMIN_PANEL_COUNTRIES_CREATE_SUCCESS;
    payload: ApiReturnType<CountriesPayload>;
};

type CreateCountriesFailAction = {
    type: typeof ADMIN_PANEL_COUNTRIES_CREATE_FAIL;
};
type CreateBranchesInit = {
    type: typeof ADMIN_PANEL_BRANCHES_CREATE_INIT;
};

type CreateBranchesSuccessAction = {
    type: typeof ADMIN_PANEL_BRANCHES_CREATE_SUCCESS;
    payload: ApiReturnType<BranchesPayload>;
};

type CreateBranchesFailAction = {
    type: typeof ADMIN_PANEL_BRANCHES_CREATE_FAIL;
};

export type AdminPanelActionTypes =
    | CreateSubCategoryPriceInit
    | CreateSubCategoryPriceSuccessAction
    | CreateSubCategoryPriceFailAction
    | GetSubCategoryPricesInit
    | GetSubCategoryPricesSuccessAction
    | GetSubCategoryPricesFailAction
    | CreateSubCategoryInit
    | CreateSubCategorySuccessAction
    | CreateSubCategoryFailAction
    | GetSubCategoriesInit
    | GetSubCategoriesSuccessAction
    | GetSubCategoriesFailAction
    | CreateCategoryInit
    | CreateCategorySuccessAction
    | CreateCategoryFailAction
    | GetCategoriesInit
    | GetCategoriesSuccessAction
    | GetCategoriesFailAction
    | CreateVehicleModelInit
    | CreateVehicleModelSuccessAction
    | CreateVehicleModelFailAction
    | GetVehicleModelsInit
    | GetVehicleModelsSuccessAction
    | GetVehicleModelsFailAction
    | CreateVehicleTypeInit
    | CreateVehicleTypeSuccessAction
    | CreateVehicleTypeFailAction
    | GetVehicleTypesInit
    | GetVehicleTypesSuccessAction
    | GetVehicleTypesFailAction
    | CreateVehicleBrandInit
    | CreateVehicleBrandSuccessAction
    | CreateVehicleBrandFailAction
    | GetVehicleBrandsInit
    | GetVehicleBrandsSuccessAction
    | GetVehicleBrandsFailAction
    | GetAdminPanelOverviewInit
    | GetAdminPanelOverviewSuccessAction
    | GetAdminPanelOverviewFailAction
    | GetBranchesInit
    | GetBranchesSuccessAction
    | GetBranchesFailAction
    | GetCitiesInit
    | GetCitiesSuccessAction
    | GetCitiesFailAction
    | GetCountriesInit
    | GetCountriesSuccessAction
    | GetCountriesFailAction
    | CreateCitiesInit
    | CreateCitiesSuccessAction
    | CreateCitiesFailAction
    | CreateCountriesInit
    | CreateCountriesSuccessAction
    | CreateCountriesFailAction
    | CreateBranchesInit
    | CreateBranchesSuccessAction
    | CreateBranchesFailAction;
