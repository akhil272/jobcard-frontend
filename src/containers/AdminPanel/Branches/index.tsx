import {
    createBranch,
    createCity,
    createCountry,
    getAllBranches,
    getCities,
    getCountries,
} from '@Store/adminPanel/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import Branches from './Branches';

const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
    branches: adminPanel.branches,
    cities: adminPanel.cities,
    countries: adminPanel.countries,
});

const mapDispatchToProps = () => ({
    getCities,
    getAllBranches,
    getCountries,
    createBranch,
    createCity,
    createCountry,
});

export default connect(mapStateToProps, mapDispatchToProps)(Branches);
