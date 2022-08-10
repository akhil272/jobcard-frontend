import {
    createSubCategoryPrice,
    getAllBranches,
    getSubCategories,
    getSubCategoryPrices,
    getVehicleModels,
    getVehicleTypes,
} from '@Store/adminPanel/actions';
import { SubCategoryPrice } from '@Store/adminPanel/types';
import { getRimSizes } from '@Store/jobCards/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import ServicePricing from './ServicePricing';

const mapStateToProps = ({ adminPanel, jobCards }: typeof initialState) => ({
    subCategoryPrices: adminPanel.subCategoryPrices.reduce(
        (acc, curr) => [
            ...acc,
            ...curr.subCategories.map((subCategory) => ({
                ...subCategory,
                category: { id: curr.id, name: curr.category },
            })),
        ],
        [] as SubCategoryPrice[],
    ),
    branches: adminPanel.branches,
    subCategories: adminPanel.subCategories,
    vehicleTypes: adminPanel.vehicleTypes,
    vehicleModels: adminPanel.vehicleModels,
    rimSizes: jobCards?.rimSizes,
});

const mapDispatchToProps = () => ({
    getSubCategoryPrices,
    createSubCategoryPrice,
    getAllBranches,
    getSubCategories,
    getVehicleModels,
    getVehicleTypes,
    getRimSizes,
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicePricing);
