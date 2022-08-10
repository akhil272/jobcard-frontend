import {
    createCategory,
    createSubCategory,
    getCategories,
    getSubCategories,
} from '@Store/adminPanel/actions';
import { initialState } from '@Store/rootReducer';
import { connect } from 'react-redux';

import Services from './Services';

const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
    categories: adminPanel.categories,
    subCategories: adminPanel.subCategories,
});

const mapDispatchToProps = () => ({
    getCategories,
    createCategory,
    getSubCategories,
    createSubCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
